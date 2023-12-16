import nodemailer from "nodemailer";
import { z } from "zod";

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
});
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    // Validate the request body
    const validatedData = ContactSchema.parse(req.body);

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

// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     // Create a transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//       host: "email-smtp.us-east-1.amazonaws.com",
//       port: 587,
//       secure: false, // use SSL
//       auth: {
//         user: process.env.NEXT_PUBLIC_SES_SMTP_USER,
//         pass: process.env.NEXT_PUBLIC_SES_SMTP_PASSWORD,
//       },
//       authMethod: "PLAIN",
//     });

//     //Mail options
//     let emailPrefix = req.body.email.split("@")[0];
//     let mailOptions = {
//       from: "ajin.sunny@gmail.com", // send address
//       replyTo: req.body.email,
//       to: process.env.NEXT_PUBLIC_RECEIVER_EMAIL, // receiver address
//       subject: `Hey Ajin, ${emailPrefix} would like to talk about ${req.body.subject}`,
//       text: req.body.message,
//     };

//     try {
//       // Convert the asynchronous operation into a promise
//       const info = await new Promise((resolve, reject) => {
//         transporter.sendMail(mailOptions, (error, info) => {
//           if (error) {
//             reject(error);
//           } else {
//             resolve(info);
//           }
//         });
//       });
//       console.log("Email sent", info);
//       return res.status(200).json({ message: "Email sent successfully" });
//     } catch (error) {
//       console.error("Error sending email:", error);
//       console.error("Error stack:", error.stack);
//       return res.status(500).send("Error sending email: " + error.message);
//     }
//   } else {
//     res.status(405).end("Method Not Allowed");
//   }
// }
