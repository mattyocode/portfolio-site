import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import { htmlEmailContent } from '../../data/html-email';

let sendGridAPIKey: string;
if (process.env.SENDGRID_API_KEY) {
  sendGridAPIKey = process.env.SENDGRID_API_KEY;
} else {
  throw new Error('SENDGRID_API_KEY env variable is not set');
}

sgMail.setApiKey(sendGridAPIKey);

const toAddress = process.env.TO_EMAIL;

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const htmlContent = htmlEmailContent(req);
  try {
    await sgMail.send({
      to: toAddress,
      from: 'hi@mattoliver.dev',
      subject: `[Message from website] : ${req.body.name}`,
      html: htmlContent,
    });
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ detail: 'Message sent successfully.' });
}

export default sendEmail;
