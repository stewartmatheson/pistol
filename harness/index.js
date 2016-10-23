const fs = require('fs')
const startServerFromPistolConfiguration = require(
  '../src/startServerFromPistolConfiguration'
)
const pistolConfiguration = JSON.parse(fs.readFileSync('default.json', 'utf8'))
const listenPort = 8080
startServerFromPistolConfiguration(pistolConfiguration, listenPort)
