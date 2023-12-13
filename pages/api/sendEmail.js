import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "email-smtp.us-east-1.amazonaws.com",
      port: 587,
      secure: false, // use SSL
      auth: {
        user: process.env.SES_SMTP_USER,
        pass: process.env.SES_SMTP_PASSWORD,
      },
      authMethod: "PLAIN",
    });

    //Mail options
    let mailOptions = {
      from: "ajin.sunny@gmail.com", // send address
      replyTo: req.body.email,
      to: process.env.RECEIVER_EMAIL, // receiver address
      subject: `Message from ${req.body.email}: ${req.body.subject}`,
      text: req.body.message,
    };

    try {
      // Convert the asynchronous operation into a promise
      const info = await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            reject(error);
          } else {
            resolve(info);
          }
        });
      });

      console.log("Email sent", info);
      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      console.error("Error stack:", error.stack);
      return res.status(500).send("Error sending email: " + error.message);
    }
  } else {
    res.status(405).end("Method Not Allowed");
  }
}
