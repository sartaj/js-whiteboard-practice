/**
## PROBLEM
Write a function that reverses a string without using any library functions.

#### Mongan, John. Programming Interviews Exposed: Coding Your Way Through the Interview (Kindle Locations 1153-1155). Wiley. Kindle Edition. 
 */

const test = require('tape')

const matrix = [
  [1,1,0,1,0],
  [0,1,1,1,0],
  [1,1,1,1,0],
  [0,1,1,1,1]
]

const matrix2 = [
  [2,1,0,1,0],
  [0,2,1,1,0],
  [1,1,1,1,0],
  [0,1,1,1,1]
]

module.exports = (largestSquareInMatrix) => {
  const largestOneSquares = largestSquareInMatrix(1)

  const largest = largestOneSquares(matrix)
  const largest2 = largestOneSquares(matrix2)
  
  test('Matrix Largest Square', t => {
    t.plan(2)
    t.equals(largestOneSquares(matrix), 3)
    t.equals(largestOneSquares(matrix2), 2)
  })
}
