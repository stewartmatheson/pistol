'use strict'

const test = require('tape')
const subject = require('../src/getWsdlFromPistolConfiguration')
const fs = require('fs')

test('getWsdlFromPistolConfiguration() should return a WSDL', t => {
  t.plan(1)
  const pistolConfiguration = JSON.parse(fs.readFileSync('default.json', 'utf8'))
  const expected = fs.readFileSync('./test/fixtures/wsdl-fixture.xml', 'utf8')
  const actual = subject(pistolConfiguration)
  t.equal(actual, expected)
})
