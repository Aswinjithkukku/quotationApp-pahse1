const nodemailer = require('nodemailer')

const sendEmail = async ({subject, message}) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: '587',
        auth: {
            user: "kukkukukku2001@gmail.com",
            pass: ""
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const options = {
        from: "kukkukukku2001@gmail.com",
        to: "",
        replyTo: "",
        subject: subject,
        html: message
    }
}

module.exports = sendEmail