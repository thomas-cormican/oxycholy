import nodemailer from "nodemailer";

export default async (body) => {
  await new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // generated ethereal user
        pass: process.env.EMAIL_PASSWORD, // generated ethereal password
      },
    });

    transporter.sendMail(
      {
        from: `${body.name} <${process.env.EMAIL_USER}>`, // sender address
        to: `${process.env.EMAIL_USER}`, // list of receivers
        subject: "Oxycholy Form", // Subject line
        text:
          body.message +
          `\n email: ${body.email} \n phone: ${body.phone} \n message: ${body.message}`, // plain text body
      },
      (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
          return "Error";
        } else {
          transporter.sendMail(
            {
              from: `Oxycholy <${process.env.EMAIL_USER}>`, // sender address
              to: body.email, // list of receivers
              subject: "Confirmation: Your Email to Oxycholy Has Been Received", // Subject line
              text: `Dear ${body.name},\n\nThank you for reaching out to Oxycholy.\nThis is an automated confirmation to let you know that we've received your email. We appreciate you taking the time to contact us.\nOur team is reviewing your message and will get back to you as soon as possible.Rest assured, we're committed to addressing your concerns or inquiries promptly.`, // plain text body
            },
            (err, info) => {
              if (err) {
                console.error(err);
                reject(err);
                return "Error";
              } else {
                resolve(info);
                console.log("sent");
                return "Ok";
              }
            }
          );
          console.log("sent");
          return "Ok";
        }
      }
    );
  });
};
