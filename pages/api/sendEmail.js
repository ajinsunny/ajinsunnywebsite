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
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    // Validate the request body
    const validatedData = ContactSchema.parse(req.body);

    // Verify the reCAPTCHA token
    const recaptchaResponse = await axios({
      method: "post",
      url: "https://www.google.com/recaptcha/api/siteverify",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY, // This is your server-side key
        response: validatedData.recaptchaToken,
      }).toString(),
    });

    if (!recaptchaResponse.data.success) {
      return res.status(400).json({ message: "reCAPTCHA verification failed" });
    }

    // Email sending logic
    let transporter = nodemailer.createTransport({
      host: "email-smtp.us-east-1.amazonaws.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_SES_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SES_SMTP_PASSWORD,
      },
      authMethod: "PLAIN",
    });

    let emailPrefix = validatedData.email.split("@")[0];
    let mailOptions = {
      from: "ajin.sunny@gmail.com",
      replyTo: validatedData.email,
      to: process.env.NEXT_PUBLIC_RECEIVER_EMAIL,
      subject: `Hey Ajin, ${emailPrefix} would like to talk about ${validatedData.subject}`,
      text: validatedData.message,
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) reject(error);
        else resolve(info);
      });
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    console.error("Error sending email:", error);
    return res.status(500).send("Error sending email: " + error.message);
  }
}
