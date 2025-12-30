const router = require('express').Router();
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);
router.post('/sendEmail', async (req, res) => {
    try {
        const {fromMail,subject, name, message} = req.body;
        await resend.emails.send({
            from: 'support@casomani.com',
            to: 'support@casomani.com',
            subject: subject,
            html: `<p>
            Name: ${name}
            Message: ${message}
            Email: ${fromMail}
            </p>`
        });

        res.status(200).json({
            success: true,
            message: "Email sent successfully via Resend"
        });

    } catch (err) {
        console.error("Resend error:", err);
        res.status(500).json({
            success: false,
            message: "Failed to send email via Resend",
            error: err.message
        });
    }
});

module.exports = router;
