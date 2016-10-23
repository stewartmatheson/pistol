'use strict'

const test = require('tape')
const subject = require('../src/getProtocolBuffersFromPistolConfiguration')
const fs = require('fs')

test('getProtocolBuffersFromPistolConfiguration() should return the correct protocol buffer configuration', t => {
  t.plan(1)
  const pistolConfiguration = JSON.parse(fs.readFileSync('default.json', 'utf8'))
  const actual = subject(pistolConfiguration.TradeRequest)
  const expected = {}
  t.deepEqual(actual, expected)
})
