import nodemailer from "nodemailer";
import { z } from "zod";
import axios from "axios";

// Define the schema for validation
const ContactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name must be less than 50 characters" })
    .regex(/^[A-Za-z\s]+$/, { message: "Name must only contain letters" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .max(100, { message: "Email must be less than 100 characters" }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters long" })
    .max(100, { message: "Subject must be less than 100 characters" }),
  message: z
    .string()
    .min(20, { message: "Message must be at least 20 characters long" })
    .max(500, { message: "Message must be less than 500 characters" }),
  recaptchaToken: z.string(),
});

export async function POST(request: Request): Promise<Response> {
  try {
    // Parse and validate the request body
    const body = await request.json();
    const validatedData = ContactSchema.parse(body);

    // Verify the reCAPTCHA token
    const recaptchaResponse = await axios({
      method: "post",
      url: "https://www.google.com/recaptcha/api/siteverify",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: new URLSearchParams({
        secret: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY as string, // Server-side secret key
        response: validatedData.recaptchaToken,
      }).toString(),
    });

    if (!recaptchaResponse.data.success) {
      return new Response(
        JSON.stringify({ message: "reCAPTCHA verification failed" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Set up nodemailer transporter
    let transporter = nodemailer.createTransport({
      host: "email-smtp.us-east-1.amazonaws.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_SES_SMTP_USER as string,
        pass: process.env.NEXT_PUBLIC_SES_SMTP_PASSWORD as string,
      },
      authMethod: "PLAIN",
    });

    let emailPrefix = validatedData.email.split("@")[0];
    let mailOptions = {
      from: "ajin.sunny@gmail.com",
      replyTo: validatedData.email,
      to: process.env.NEXT_PUBLIC_RECEIVER_EMAIL as string,
      subject: `Hey Ajin, ${emailPrefix} would like to talk about ${validatedData.subject}`,
      text: validatedData.message,
    };

    // Send the email
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    // If the error is a Zod validation error, return its details
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify({ errors: error.errors }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    console.error("Error sending email:", error);
    return new Response("Error sending email: " + error.message, {
      status: 500,
    });
  }
}
