'use strict'

const Handlebars = require('handlebars')
const fs = require('fs')

function formatMessagesForWsdl (messages) {
  return messages
}

function getMessagesFromPistolConfiguration (pistolConfiguration) {
  // We don't care what the key is let's just grap the first one
  return formatMessagesForWsdl(
    pistolConfiguration[Object.keys(pistolConfiguration)[0]].messages
  )
}

function getServiceNameFromPistolConfiguration (pistolConfiguration) {
  // Let's just extract the first key from the configuration object.
  return Object.keys(pistolConfiguration)[0]
}

function getWsdlFromPistolConfiguration (pistolConfiguration) {
  //const wsdlTemplate = fs.readFileSync('templates/wsdl.hbs', 'utf8')
  const wsdlTemplate = fs.readFileSync('templates/testWsdlTemplate.hbs', 'utf8')
  const wsdlCompiledTemplte = Handlebars.compile(wsdlTemplate)
  return wsdlCompiledTemplte({
    serviceName: getServiceNameFromPistolConfiguration(pistolConfiguration),
    messages: getMessagesFromPistolConfiguration(pistolConfiguration)
  })
}

module.exports = getWsdlFromPistolConfiguration
