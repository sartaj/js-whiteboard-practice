console.log("TODO: Largest Rectangle In Histogram")

function largestRectangleArea(histogram) {
  
  if (histogram == null || histogram.length == 0) {
      return 0;
  }

  let max = 0;

  let stack = [];
  let i = 0;

  while (i < histogram.length) {
    //push index to stack when the current histogram is larger than the previous one
    let peek = stack[stack.length - 1]
    let isEmpty = stack.length == 0
    let histogramIteratorState = histogram[i]
    let histogramStackState = histogram[peek]

    if (isEmpty|| histogramIteratorState >= histogramStackState) {
      stack.push(i);
      i++;
    } else {
      //calculate max value when the current histogram is less than the previous one
      let position = stack.pop();
      let peek = stack[stack.length - 1]
      let isEmpty = stack.length == 0

      let height = histogram[position];
      let width = isEmpty ? i : i - 1 - peek;
      max = Math.max(height * width, max);
    }
  }

  while (stack.length!=0) {
    let position = stack.pop();
    let peek = stack[stack.length - 1]
    let isEmpty = stack.length == 0

    let height = histogram[position];
    let width = isEmpty ? i : i - 1 - peek;
    max = Math.max(height * width, max);
  }

  return max;
}

module.exports = largestRectangleArea
