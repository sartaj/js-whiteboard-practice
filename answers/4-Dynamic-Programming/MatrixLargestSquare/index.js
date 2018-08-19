
// const matrixSum = [
//   [1,1,0,1,0],
//   [0,1,1,1,0],
//   [1,1,2,2,0],
//   [0,1,2,3,1],
// ]

const largestSquareInMatrix = (largestSquareNumber=1) => (matrix) => {
  // create matrixCache, which holds it's some of it's nearest parts as a the bottom right corner
  // (since you're starting from the top right)
  const matrixSumsCacheFromAsBottomRight = []
  let maxSum = 0
  // cycle through matrix
  matrix.forEach((row, x) => {
    if(x === 0) {
      if(matrix[x].indexOf(largestSquareNumber) > -1) {
        let sum = 1
        if(sum > maxSum) maxSum = sum
      };
      matrixSumsCacheFromAsBottomRight.push(row)
    } else {
      matrixSumsCacheFromAsBottomRight.push([])
      row.forEach((item, y)=> {
        if(y === 0) {
          if(item === largestSquareNumber) {
            let sum = 1
            if(sum > maxSum) maxSum = sum     
          }
          matrixSumsCacheFromAsBottomRight[x].push(item === largestSquareNumber ? 1 : 0)
        } else {
          const isSquare = 
            matrix[x-1][y] === largestSquareNumber 
            && matrix[x-1][y-1] === largestSquareNumber
            && matrix[x][y-1] === largestSquareNumber 
          if(isSquare) {
            let minSumAdjacent = Math.min(
              matrixSumsCacheFromAsBottomRight[x-1][y],
              matrixSumsCacheFromAsBottomRight[x-1][y-1],
              matrixSumsCacheFromAsBottomRight[x][y-1]
            )
            let sum = minSumAdjacent + 1
            matrixSumsCacheFromAsBottomRight[x].push(sum)
            if(sum > maxSum) maxSum = sum
          } else {
            matrixSumsCacheFromAsBottomRight[x].push(item === largestSquareNumber ? 1 : 0)
          }
        }
      })
    }
  })
  return maxSum
}

module.exports = largestSquareInMatrix