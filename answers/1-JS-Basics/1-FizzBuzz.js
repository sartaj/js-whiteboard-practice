/**
## PROBLEM
Write a program that prints the numbers from 1 to 100. If a number is divisible by 3, print “Fizz” instead of the number, if a number is divisible by 5, print “Buzz” instead of the number, and if a number is divisible by both 3 and 5, print “FizzBuzz” instead of the number.

#### Mongan, John. Programming Interviews Exposed: Coding Your Way Through the Interview (Kindle Locations 1128-1131). Wiley. Kindle Edition. 
 */


/**
## Hand Written Attempt

    for (let x = 1;  x>=100; x++) {
        const is3 = x%3 === 0
        const is5 = x%5 === 0
        if(is5 && is3) console.log('FizzBuzz')
        else if(is3) console.log('FizzBuzz')
        else if(is5) console.log('Buzz')
    }
*/

// ## Answer (from book)

for (let i = 1;  i<=100; i++) {
    const is3 = i%3 === 0
    const is5 = i%5 === 0
    if(is5 && is3) console.log('FizzBuzz')
    else if(is3) console.log('FizzBuzz')
    else if(is5) console.log('Buzz')
    else console.log(i)
}

/**
 ## Lessons:
 - Remember that a fast and accurate solution is more important than a super elegant
 one.
 - Remember with for loops to use the proper equal sign
 */