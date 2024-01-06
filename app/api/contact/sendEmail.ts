import { createTransport } from 'nodemailer';

type Params = {
  subject: string;
  message: string;
};

const transport = createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmail = async ({ subject, message }: Params) => {
  return transport.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAIL_TO,
    subject: subject,
    text: message,
  });
};
