'use strict'

const Express = require('express')
const Site = require('../../index').Site
const Base = Express.Router()

Base.use('/', Express.static(Site.locals.static))

Base.use((req, res, next) => { next() })

Base.get('/', (req, res, next) => {
  res.render('Main')
  res.end()
})


module.exports = Base
