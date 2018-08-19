/**
## PROBLEM
Write a function that reverses a string without using any library functions.

#### Mongan, John. Programming Interviews Exposed: Coding Your Way Through the Interview (Kindle Locations 1153-1155). Wiley. Kindle Edition. 
 */

const test = require('tape')

module.exports = (Stack) => {
  
  test('Stack', t => {
    t.plan(7)
    const stack = new Stack()

    t.equals(stack.isEmpty(), true)

    stack.push('beep')
    stack.push('boop')

    t.equals(stack.isEmpty(), false)
    t.equals(stack.pop(), 'boop')
    t.equals(stack.peek(), 'beep')
    t.equals(stack.pop(), 'beep')
    t.equals(stack.pop(), undefined)
    t.equals(stack.isEmpty(), true)
  })
}