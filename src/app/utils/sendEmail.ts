import nodemailer from "nodemailer";
import config from "../config";

export const sendEmail = async () => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: config.NODE_ENV === 'production', // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "sanji2601@gmail.com",
      pass: "ybvn itqg gleb cnhw",
    },
  });

  await transporter.sendMail({
    from: 'sanji2601@gmail.com', // sender address
    to: "sanjidakter2304@gmail.com", // list of receivers
    subject: "Cheange the password ✔", // Subject line
    text: "password vule geso?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
};
