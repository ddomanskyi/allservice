// pages/api/sendEmail.js

import nodemailer from 'nodemailer'

let transporter = nodemailer.createTransport({
  host: 'smtpout.secureserver.net',
  port: 465,
  secure: true,
  auth: {
    user: 'info@allservice.com.pl',
    pass: 'allservice5gfhjkm123'
  }
})

export async function POST(req) {
  if (req.method === 'POST') {
    const body = await req.json()

    try {
      let mailOptions = {
        from: body.email,
        to: 'info@allservice.com.pl',
        subject: 'Message from website',
        text: `Name: ${body.name} \n\n Phone number: ${body.phone} \n\n Message: \n${body.message}`
      }

      console.log('mailOptions', mailOptions);

      let info = await transporter.sendMail(mailOptions)
      console.log('Email sent: ' + info.response)

      return Response.json({ success: true, message: 'Email sent successfully' })
    } catch (error) {
      console.error('Error sending email:', error)
      return Response.json({ success: false, message: 'Error sending email' })
    }
  } else {
    return Response.json({ success: false, message: 'Method Not Allowed' })
  }
}
