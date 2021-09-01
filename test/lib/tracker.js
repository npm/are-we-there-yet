'use strict'
var test = require('tap').test
var Tracker = require('../..').Tracker

var testEvent = require('./test-event.js')

var name = 'test'

test('initialization', function (t) {
  var simple = new Tracker(name)

  t.equal(simple.completed(), 0, 'Nothing todo is 0 completion')
  t.end()
})

var track
var todo = 100
test('completion', function (t) {
  track = new Tracker(name, todo)
  t.equal(track.completed(), 0, 'Nothing done is 0 completion')

  testEvent(track, 'change', afterCompleteWork)

  track.completeWork(todo)
  t.equal(track.completed(), 1, 'completeWork: 100% completed')

  function afterCompleteWork (er, onChangeName) {
    t.equal(er, null, 'completeWork: on change event fired')
    t.equal(onChangeName, name, 'completeWork: on change emits the correct name')
    t.end()
  }
})

test('add more work', function (t) {
  testEvent(track, 'change', afterAddWork)
  track.addWork(todo)
  t.equal(track.completed(), 0.5, 'addWork: 50% completed')
  function afterAddWork (er, onChangeName) {
    t.equal(er, null, 'addWork: on change event fired')
    t.equal(onChangeName, name, 'addWork: on change emits the correct name')
    t.end()
  }
})

test('complete more work', function (t) {
  track.completeWork(200)
  t.equal(track.completed(), 1, 'completeWork: Over completion is still only 100% complete')
  t.end()
})

test('finish is always 100%', function (t) {
  var finishtest = new Tracker(name, todo)
  finishtest.completeWork(50)
  finishtest.finish()
  t.equal(finishtest.completed(), 1, 'finish: Explicitly finishing moves to 100%')
  t.end()
})
