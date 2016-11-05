'use strict'

const PROD = process.env.NODE_ENV === 'production'

const Conf = {
  Site: {
    STANDARDPORT: PROD ? 80 : process.env.PORT || 8080
  }
}

module.exports = {
  Conf: Conf
}
