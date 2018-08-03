/**
## PROBLEM
Write a function that reverses a string without using any library functions.

#### Mongan, John. Programming Interviews Exposed: Coding Your Way Through the Interview (Kindle Locations 1153-1155). Wiley. Kindle Edition. 
 */


/**
## Hand Written Attempt

    const str = 'test'
    let newStr = ''
    for(let i=str.length-1; i>-1;i--) {
        newStr += str[i]
    }

    const reverse = str =>
        str
            .split()
            .map((s,i) => str[str.length-1-i])
*/

const reverseAttempt = (str) => {
    let newStr = ''
    for(let i=str.length-1; i>-1;i--) {
        newStr += str[i]
    }
    return newStr
}

const reverseMap = str =>
        str
            .split('')
            .map((s,i, arr) => arr[arr.length-1-i])
            .join('')

/**
 ### For Fun
 Creating an FP solution
*/
const map = (mapFunc, item) => {
    if(!item) return (item) => map(mapFunc, item)

    let newItem = []
    for (let i=0; i<item.length; i++) {
        newItem = [...newItem, mapFunc(item[i], i, item)]
    }

    if(typeof item === 'string') return newItem.join('')
    else if(Array.isArray(item)) return newItem
    else throw new Error('item must be a string or object')

    return newItem
}

const reverseFp = str => 
    map((char,i, str) => str[str.length-1-i], str)

const stringToTry = '!?noitanrat ni tahW'

console.log(reverseAttempt(stringToTry))
console.log(reverseMap(stringToTry))
console.log(reverseFp(stringToTry))
