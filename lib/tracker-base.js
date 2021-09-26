'use strict'
var EventEmitter = require('events')

var trackerId = 0

module.exports = class TrackerBase extends EventEmitter {
  constructor (name) {
    super()

    this.id = ++trackerId
    this.name = name
  }
}
