'use strict'
const util = require('util')

module.exports = function (obj, event, next) {
  let timeout = setTimeout(gotTimeout, 10)
  obj.once(event, gotResult)

  function gotTimeout () {
    obj.removeListener(event, gotResult)
    next(new Error('Timeout listening for ' + event))
  }
  let result = []
  function gotResult () {
    result = Array.prototype.slice.call(arguments)
    clearTimeout(timeout)
    timeout = setTimeout(gotNoMoreResults, 10)
    obj.once(event, gotTooManyResults)
  }
  function gotNoMoreResults () {
    obj.removeListener(event, gotTooManyResults)
    const args = [null].concat(result)
    next.apply(null, args)
  }
  function gotTooManyResults () {
    const secondResult = Array.prototype.slice.call(arguments)
    clearTimeout(timeout)
    next(new Error('Got too many results, first ' + util.inspect(result) + ' and then ' + util.inspect(secondResult)))
  }
}
