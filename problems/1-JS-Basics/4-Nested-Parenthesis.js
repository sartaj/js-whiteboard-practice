/**
   ## PROBLEM
   You are given a string that contains left 
   and right parenthesis characters. 
   Write code to determine whether the parentheses are
   correctly nested. For example, the strings "(())"
   and "()()" are correctly nested but "(()()" and ")(" 
   are not.

   Mongan, John. Programming Interviews Exposed: Coding Your Way Through the Interview (Kindle Locations 1210-1216). Wiley. Kindle Edition. 
 */

const test = require('tape')

module.exports = (isParensValid) => {
  test('Is Parens Valid', t => {
    t.plan(5)
    t.equals(isParensValid('(())'), true)
    t.equals(isParensValid('(()))'), false)
    t.equals(isParensValid('())'), false)
    t.equals(isParensValid('(()'), false)
    t.equals(isParensValid('()()(())'), true)
  })
}