import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const toAddress = process.env.TO_EMAIL;

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sgMail.send({
      to: toAddress,
      from: 'hi@mattoliver.dev',
      subject: `[Message from website] : ${req.body.name}`,
      text: `${req.body.message}`,
      // html: `<div>You've got a mail</div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
