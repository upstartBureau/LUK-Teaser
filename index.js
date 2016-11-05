'use strict'

const path  = require('path')
const bodyParser = require('body-parser')
const Express = require('express')
const Favicon = require('serve-favicon')
const Pug = require('pug')
const Morgan = require('morgan')

const Site = Express()

module.exports = {
  Site: Site
}

const Conf = require('./server/conf')

Site.locals.pretty = true
Site.locals.static = path.join(__dirname, '/client/public')
Site.use(Morgan('dev'))
Site.use('/', Express.static(Site.locals.static))
Site.set('x-powerd-by', false)
Site.set('views', path.join(__dirname, '/client/views/'))

Site.set('view engine', 'pug')
Site.use(Favicon(path.join(__dirname, 'client/public', 'favicon.ico')))

Site.use('/', require('./server/router').Base)

Site.use(bodyParser.urlencoded({ extended: true, 'type': 'application/x-www-form-urlencoded' }))
Site.use(bodyParser.json({'type': 'application/json'}))
