'use strict'

function getRequestHandlersFromPistolConfiguration (pistolConfiguration) {
  // TODO : Don't return a place holder object here
  return {
    Hello_Service: {
      Hello_Port: {
        sayHello: args => {
          console.log('Hello ', args)
          return {
            firstName: 'Stewart'
          }
        }

      }
    }
  }
}

module.exports = getRequestHandlersFromPistolConfiguration
