'use strict'

const PROD = process.env.NODE_ENV === 'production'
const Secret = require('./secret')

module.exports = {
  PROD: PROD,
  Site: {
    STANDARDPORT: PROD ? 80 : process.env.PORT || 8080
  },
  Secret: Secret
}
