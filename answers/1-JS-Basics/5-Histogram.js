function getMaxRectangleFromHistogram(histogram) {
  const rectanglePairs = histogram.map((xValue, i) => {
    let pair = [xValue, 1]
    for(let x=i; x<histogram.length-1;x++) {
      if(histogram[x] < xValue) break
      else pair[1] = pair[1] + 1
    }
    return pair
  })

  const rectangleValues = rectanglePairs.map(pair => pair[0] * pair[1])

  const maxValue  = rectangleValues.sort()[0]

  const indexOfLargestRectangle = rectangleValues.indexOf(maxValue)

  return {
    value: maxValue,
    start: indexOfLargestRectangle,
    end: indexOfLargestRectangle +  rectanglePairs[indexOfLargestRectangle][1]
  }
}

const histogram = [1,2,3,4,5,3,3,2,3]
