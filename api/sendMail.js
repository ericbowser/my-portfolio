import KEY_FILE_PATH from '../auth/google_service_account.json';
import {DefaultTransporter, GoogleAuth} from "google-auth-library";
const USER_EMAIL = 'laser@new-collar.space';
const GMAIL_API_VERSION = 'v1';
const auth = new GoogleAuth({
  keyFile: KEY_FILE_PATH,
  scopes: ['https://mail.google.com/'],
})
const sendGmail = async (formData) => {
  try {
    const response = await fetch('http://localhost:32636/sendEmail', {...formData});
    console.log('send email response: ', response);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function sendEmail(formData) {
  //const gmail = google.gmail({ version: GMAIL_API_VERSION, auth });
  // Construct the email message (as a raw string)
  const to = formData.name;
  const from = formData.email;
  const message = formData.message;
  const rawMessage = createRawEmail(formData.name, 'ericryanbowser@gmail.com', formData.subject, formData.message);

  const info = await transporter.sendMail({
    from: from,
    to: USER_EMAIL,
    subject: subject,
    text: message,
    html: `<p>${message}</p>`
  });

  // Send the email
  // const response = await gmail.users.messages.send({
  //   userId: 'me', // 'me' refers to the authenticated user
  //   requestBody: {
  //     raw: rawMessage,
  //   },
  // });

  // console.log('Email sent:', response.data);
  // const transporter = await nodemailer.createTransport({
  //     host: 'smtp.gmail.com',
  //     port: 587,
  //     auth: auth
  // });

  // console.log("Message sent: %s", info.messageId);
  // return info.messageId;
}

// Helper function to create the raw email message (Base64 encoded)
function createRawEmail(from, to, subject, message) {
  const emailText = `From: ${from}\r\n` +
    `To: ${to}\r\n` +
    `Subject: ${subject}\r\n` +
    `Content-Type: text/plain; charset=utf-8\r\n` +
    `\r\n` + // Important: Add a blank line to separate headers from the body
    `${message}\r\n`;

  const encodedMessage = Buffer.from(emailText)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, ''); // Remove trailing equal signs

  return encodedMessage;
}

export default sendEmail;