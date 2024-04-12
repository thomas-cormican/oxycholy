import nodemailer from "nodemailer";

export default async (body) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  await new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        from: `${body.name} <thomascormican@zohomail.eu>`, // sender address
        to: "thomascormican@zohomail.eu", // list of receivers
        subject: "Message", // Subject line
        text:
          body.message +
          `\n email: ${body.email} \n phone: ${body.phone} \n phone number: ${body.message}`, // plain text body
      },
      (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(info);
        }
      }
    );
  });
};
