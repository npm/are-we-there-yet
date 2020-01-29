'use strict'

const TrackerBase = require('./tracker-base.js')

const announce = Symbol('announce')

class Tracker extends TrackerBase {
  constructor (name, todo) {
    super(name)
    this.workDone = 0
    this.workTodo = todo || 0
  }

  completed () {
    return (this.workTodo === 0)
      ? 0
      : this.workDone / this.workTodo
  }

  addWork (work) {
    this.workTodo += work
    this[announce]()
  }

  completeWork (work) {
    this.workDone += work
    if (this.workDone > this.workTodo) {
      this.workDone = this.workTodo
    }
    this[announce]()
  }

  finish () {
    this.workTodo = this.workDone = 1
    this[announce]()
  }

  [announce] () {
    this.emit('change', this.name, this.completed(), this)
  }
}

module.exports = Tracker
