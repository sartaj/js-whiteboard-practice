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


const test1 = [0,2,3,6,3,2,6]
const test1Exp = [0,2,3,6]
const test2 = [7,7,77,7,777,7,7]
const test2Exp = [7,77,777]

console.log(removeDuplicates(test1))
console.log(removeDuplicates(test2))
console.log(removeDuplicatesBasic(test1))
console.log(removeDuplicatesBasic(test2))
console.log(removeDuplicatesSet(test1))
console.log(removeDuplicatesSet(test2))