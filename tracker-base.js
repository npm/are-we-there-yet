'use strict'
const EventEmitter = require('events').EventEmitter
const util = require('util')

let trackerId = 0
const TrackerBase = module.exports = function (name) {
  EventEmitter.call(this)
  this.id = ++trackerId
  this.name = name
}
util.inherits(TrackerBase, EventEmitter)
