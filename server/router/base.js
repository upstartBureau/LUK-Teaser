'use strict'

const Express = require('express')
const Site = require('../../index').Site
const Base = Express.Router()
const Baseware = require('./middleware').Baseware
const Mailer = require('../control')

Base.use('/', Express.static(Site.locals.static))

Base.use((req, res, next) => { next() })

Base.get('/', (req, res, next) => {
  res.render('Main')
  res.end()
})
Base.post('/send', (req, res, next) => {
  console.log(Baseware.CreateEmail(req.body))
  Mailer.ContactEmail(Baseware.CreateEmail(req.body))
  res.sendStatus(200)
  res.end()
  next()
})

module.exports = Base
