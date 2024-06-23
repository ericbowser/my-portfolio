import axios from 'axios';

async function sendEmail(emailParams = {}) {
    const {from, subject, message} = emailParams;
    console.log(process.env.ASSIST_EMAIL_URL)
    try {
        return await axios.post(
            process.env.ASSIST_EMAIL_URL,
            {
                subject: subject,
                from: from,
                message: message
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export default sendEmail;