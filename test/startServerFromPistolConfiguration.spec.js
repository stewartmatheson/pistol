'use strict'

const test = require('tape')
const subject = require('../src/startServerFromPistolConfiguration')
const fs = require('fs')

test('getServerFromWsdl should return a server', t => {
  const pistolConfiguration = JSON.parse(fs.readFileSync('default.json', 'utf8'))
  const port = 9123
  const result = subject(pistolConfiguration, port)
  t.assert(result)
})
