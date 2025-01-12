const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/testEmailRoute/:messageToEcho', (req, res) => {
    const messageToEcho = req.params.messageToEcho;
    res.send(messageToEcho);
});

const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail'
    auth: {
        user: 'casomaniqueries@gmail.com', // your email
        pass: 'xovl armm wbfp ezyx'   // your email password
    }
});

router.post('/sendEmail', (req, res) => {
    const { fromMail, subject, name,message } = req.body;

    const mailOptions = {
        from:fromMail,
        to: 'casomaniqueries@gmail.com',
        subject: subject,
        text: `Name: ${name} \nMessage: ${message}\nEmail: ${fromMail}`,
    };



    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send({"result":`Email sent: ${info.response}`});
    });
});

module.exports = router;