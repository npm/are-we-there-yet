'use strict'
var test = require('tap').test
var util = require('util')
var stream = require('readable-stream')
var TrackerStream = require('../..').TrackerStream
var testEvent = require('./test-event.js')

var Sink = function () {
  stream.Writable.apply(this, arguments)
}
util.inherits(Sink, stream.Writable)
Sink.prototype._write = function (data, encoding, cb) {
  cb()
}

test('TrackerStream', function (t) {
  t.plan(9)

  var name = 'test'
  var track = new TrackerStream(name)

  t.equal(track.completed(), 0, 'Nothing todo is 0 completion')

  var todo = 10
  track = new TrackerStream(name, todo)
  t.equal(track.completed(), 0, 'Nothing done is 0 completion')

  track.pipe(new Sink())

  testEvent(track, 'change', afterCompleteWork)
  track.write('0123456789')
  function afterCompleteWork (er, onChangeName) {
    t.equal(er, null, 'write: on change event fired')
    t.equal(onChangeName, name, 'write: on change emits the correct name')
    t.equal(track.completed(), 1, 'write: 100% completed')

    testEvent(track, 'change', afterAddWork)
    track.addWork(10)
  }
  function afterAddWork (er, onChangeName) {
    t.equal(er, null, 'addWork: on change event fired')
    t.equal(track.completed(), 0.5, 'addWork: 50% completed')

    testEvent(track, 'change', afterAllWork)
    track.write('ABCDEFGHIJKLMNOPQRST')
  }
  function afterAllWork (er) {
    t.equal(er, null, 'allWork: on change event fired')
    t.equal(track.completed(), 1, 'allWork: 100% completed')
  }
})
