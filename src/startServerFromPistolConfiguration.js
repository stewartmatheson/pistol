'use strict'

const Soap = require('soap')
const http = require('http')

const getRequestHandlersFromPistolConfiguration = require(
  './getRequestHandlersFromPistolConfiguration'
)
const getWsdlFromPistolConfiguration = require(
  './getWsdlFromPistolConfiguration'
)

// TODO : This function should be composable.
function startServerFromWsdl (pistolConfiguration, listenPort) {
  // Mount the service at /. We can pass a path in later if we need to
  const rootSoapServicePath = '/service'

  // Create the base server object. This could be an express object but
  // node http is fine for now
  const baseHttpServer = http.createServer((request, response) => {
    // Here we don't respond to any incoming connections via http
    response.end('404')
  })

  // Now let's start the base server
  baseHttpServer.listen(listenPort)

  // Incoming request handlers will need to be generated from the pistol
  // configuration
  const incomingRequestHandlers = getRequestHandlersFromPistolConfiguration(
    pistolConfiguration
  )

  // Lastly we generate the WSDL file it's self. Again this comes from the
  // same configuration object that the request handlers has been generated
  // from
  const generatedWsdl = getWsdlFromPistolConfiguration(pistolConfiguration)

  // Let's tell soap to listen
  const listeningSoapServer = Soap.listen(
    baseHttpServer,
    rootSoapServicePath,
    incomingRequestHandlers,
    generatedWsdl
  )

  // Here we add some VERY basic logging. This will most likely be
  // composed and handled somewhere else
  listeningSoapServer.log = (type, data) => console.log(type, data)

  return baseHttpServer
}

module.exports = startServerFromWsdl
