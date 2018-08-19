const test = require('tape')

module.exports = (largestRectangleArea) => {
  const histogram1 = [1,2,3,4,5,3,3,1,3,2]

  test('Largest Rectangle In Area', t => {
    t.plan(1)
    t.equals(largestRectangleArea(histogram1), 15)
  })
}
