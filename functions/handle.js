"use strict"
const nodemailer = require("nodemailer")

exports.handler = async function(event, context) {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  let mailOptions = {
    from: '"Fred Foo 👻" <rafal@rudol.eu>', // sender address
    to: "rrrrudol@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: JSON.stringify({event, context}), // html body
  }

  console.log({event, context});

  request(event.verificationUrl,function(error,response,body) {
    body = JSON.parse(body);
    if(body.success !== undefined && !body.success) {
      return {
        statusCode: 400,
        body: JSON.stringify({"responseCode" : 1,"responseDesc" : "Failed captcha verification"})
      }
    }

    const info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId)
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
    
    return {
      statusCode: 200,
      body: JSON.stringify({"responseCode" : 0,"responseDesc" : "Sucess"})
    };
  });
}

exports.handler().catch(console.error)
