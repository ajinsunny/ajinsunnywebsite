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
    });

    //Mail options
    let mailOptions = {
      from: "ajin.sunny@gmail.com", // send address
      replyTo: req.body.email,
      to: process.env.RECEIVER_EMAIL, // receiver address
      subject: `Message from ${req.body.email}: ${req.body.subject}`,
      text: req.body.message,
    };

    //Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        console.error("Error stack:", error.stack);
        res.status(500).send(error.message);
      } else {
        console.log("Email sent");
        res.status(200).json(req.body);
      }
    });
  } else {
    res.status(405).end();
  }
}
