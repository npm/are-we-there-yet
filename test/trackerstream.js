'use strict'
const test = require('tap').test
const util = require('util')
const stream = require('readable-stream')
const TrackerStream = require('../index.js').TrackerStream
const testEvent = require('./lib/test-event.js')

const Sink = function () {
  stream.Writable.apply(this, arguments)
}
util.inherits(Sink, stream.Writable)
Sink.prototype._write = function (data, encoding, cb) {
  cb()
}

test('TrackerStream', function (t) {
  t.plan(9)

  const name = 'test'
  let track = new TrackerStream(name)

  t.is(track.completed(), 0, 'Nothing todo is 0 completion')

  const todo = 10
  track = new TrackerStream(name, todo)
  t.is(track.completed(), 0, 'Nothing done is 0 completion')

  track.pipe(new Sink())

  testEvent(track, 'change', afterCompleteWork)
  track.write('0123456789')
  function afterCompleteWork (er, onChangeName) {
    t.is(er, null, 'write: on change event fired')
    t.is(onChangeName, name, 'write: on change emits the correct name')
    t.is(track.completed(), 1, 'write: 100% completed')

    testEvent(track, 'change', afterAddWork)
    track.addWork(10)
  }
  function afterAddWork (er, onChangeName) {
    t.is(er, null, 'addWork: on change event fired')
    t.is(track.completed(), 0.5, 'addWork: 50% completed')

    testEvent(track, 'change', afterAllWork)
    track.write('ABCDEFGHIJKLMNOPQRST')
  }
  function afterAllWork (er) {
    t.is(er, null, 'allWork: on change event fired')
    t.is(track.completed(), 1, 'allWork: 100% completed')
  }
})
