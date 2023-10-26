import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    //Mail options
    let mailOptions = {
      from: req.body.email, // send address
      to: process.env.EMAIL, // receiver address
      subject: `Message from ${req.body.email}: ${req.body.subject}`,
      text: req.body.message,
    };

    //Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
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
