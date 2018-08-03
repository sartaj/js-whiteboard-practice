/**
 * # Problem
 * Given an unsorted list of integers, write a function that returns a new list with all
 * duplicate values removed
 */

const test = require('tape')

module.exports = (removeDuplicates) => {
  const test1 = [0,2,3,6,3,2,6]
  const test1Exp = [0,2,3,6]
  const test2 = [7,7,77,7,777,7,7]
  const test2Exp = [7,77,777]

  test('Remove Duplicates', t => {
    t.plan(2)
    t.deepEqual(removeDuplicates(test1), test1Exp)
    t.deepEqual(removeDuplicates(test2), test2Exp)
  })
}
