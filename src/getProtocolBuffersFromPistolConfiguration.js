'use strict';

const _ = require('lodash')

function convertPistolMessageToProtocolBuffer(message) {
  _.forOwn(message, (value, key) => {
    console.log(value, key)
  })
}

function getProtocolBuffersFromPistolConfiguration(pistolConfiguration) {
  return pistolConfiguration
    .messages
    .map(message => convertPistolMessageToProtocolBuffer(message))
}

module.exports = getProtocolBuffersFromPistolConfiguration
