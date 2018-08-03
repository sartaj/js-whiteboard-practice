/**
## PROBLEM
Write a function that reverses a string without using any library functions.

#### Mongan, John. Programming Interviews Exposed: Coding Your Way Through the Interview (Kindle Locations 1153-1155). Wiley. Kindle Edition. 
 */

const test = require('tape')

module.exports = (reverseAttempt) => {
  const stringToTry = '!?noitanrat ni tahW'
  test('Reversing a String', t => {
    t.plan(1)
    t.equals(reverseAttempt(stringToTry), 'What in tarnation?!')
  })
}
