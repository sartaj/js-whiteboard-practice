/**
 * # Problem
 * Given an unsorted list of integers, write a function that returns a new list with all
 * duplicate values removed
 */

 /** 
    ## Written

    const removeDuplicates = (arr) =>
        arr.filter((num, i, a) => a.indexOf(num) === i)

  */

const removeDuplicates = (arr) =>
    arr.filter((num, i, a) => a.indexOf(num) === i)

// Alternate basic
const removeDuplicatesBasic = arr => {
    let newArr = []
    for(let i=0;i<arr.length;i++) {
        if(arr.indexOf(arr[i]) === i) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// From book
const removeDuplicatesSet = arr => Array.from(new Set(arr))


module.exports = removeDuplicates