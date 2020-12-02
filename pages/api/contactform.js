require('dotenv').config()
const nodemailer = require('nodemailer')

export default function handler(req, res) {
  const { firstname, lastname, email, text } = req.body

  const transporter = nodemailer.createTransport({
    host: 'SMTP.Office365.com',
    port: 587,
    auth: {
      user: 'markus.wiland@outlook.com',
      pass: 'p%bxSJP6',
      secure: 'STARTTLS'
    }
  })

  const mailOptions = {
    from: `${email}`,
    to: `arsenalwiland@gmail.com`,
    subject: `New mail from ${email}`,
    text: `
    ${firstname} ${lastname} wrote:
    ${text}
    `
  }
  console.log(mailOptions)
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err)
      res.send('error' + JSON.stringify(err)).end()
    } else {
      console.log('mail send', data)
      res.send('success').end()
    }
  })
}
