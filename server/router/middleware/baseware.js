'use strict'
var Baseware = {
  CreateEmail: function (Data) {
    var textString = '<h1>' + Data.email + ' emailed: </h1><h4>Known as: ' + Data.name + ' working with: ' + Data.entity + ' has emailed the following;<h4><p>' + Data.message + '</p>'
    return textString
  }
}

module.exports = Baseware
