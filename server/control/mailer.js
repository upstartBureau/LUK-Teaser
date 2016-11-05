'use strict'

const nodemailer = require('nodemailer')
const Conf = require('../conf')

var Mail = {
  transporter: nodemailer.createTransport({
    service: 'Mailgun',
    auth: {
      user: Conf.Secret.EmailUser,
      pass: Conf.Secret.EmailPassword
    }
  })
}

module.exports = {
  ContactEmail: function (FormData) {
    Mail.transporter.sendMail({
      from: '"LÜK Contact Form" david@upstartbureau.io',
      to: '"Matt" finelli@shotwelldigital.com',
      subject: 'Contact Aquisition',
      text: null,
      html: FormData
    }, (err, info) => {
      if (err) console.log(err)
      console.log('message sent')
    })
  }
}
