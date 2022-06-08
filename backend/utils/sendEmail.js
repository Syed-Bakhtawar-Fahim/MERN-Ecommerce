const nodeMailer = require("nodemailer")

const sendEmail = async (options) => {
   // testecommerce936@gmail.com
   //testEcommerce123 
    // const SMPT_MAIL= "testecommerce936@gmail.com";
    // const SMPT_PASSWORD = "testEcommerce123";
    // const SMPT_SERVICE = "gmail";
    const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        service: "gmail",
        auth: {
            user: "testecommerce936@gmail.com",
            pass: "testEcommerce123"
        }
    })

    const mailOptions = {
        from: "testecommerce936@gmail.com",
        to : options.email,
        subject: options.subject,
        text: options.message
    }

    await transporter.sendMail(mailOptions)

}

module.exports = sendEmail