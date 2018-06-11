'use strict'
var util = require('util')
var Transform = require('stream').Transform || require('readable-stream').Transform
var delegate = require('delegates')
var Tracker = require('./tracker.js')

var TrackerStream = module.exports = function (name, size, options) {
  Transform.call(this, options)
  this.tracker = new Tracker(name, size)
  this.name = name
  this.id = this.tracker.id
  this.tracker.on('change', delegateChange(this))
}
util.inherits(TrackerStream, Transform)

function delegateChange (trackerStream) {
  return function (name, completion, tracker) {
    trackerStream.emit('change', name, completion, trackerStream)
  }
}

TrackerStream.prototype._transform = function (data, encoding, cb) {
  this.tracker.completeWork(data.length ? data.length : 1)
  this.push(data)
  cb()
}

TrackerStream.prototype._flush = function (cb) {
  this.tracker.finish()
  cb()
}

delegate(TrackerStream.prototype, 'tracker')
  .method('completed')
  .method('addWork')
  .method('finish')
