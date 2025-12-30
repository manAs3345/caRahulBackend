const { Resend } = require("resend");
const resend = new Resend("re_CDYm69tH_LesssDmbaXPK2zDgrXnMRa2G");

(async () => {
    try {
        await resend.emails.send({
            from: "support@casomani.com",
            to: "support@casomani.com",
            subject: "Test Email",
            html: "<p>Hello World</p>"
        });
        console.log("Email sent successfully");
    } catch (err) {
        console.error("Error:", err);
    }
})();
