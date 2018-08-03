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

/** 
    ## Written

    const isParensValid = (str) => {
      let openParens = 0
      for(let i=0; i<str.length;i++) {
        if(str[i] === '(') openParens++
        else if(str[i] === ')') {
          if(openParens < 1) return false
          else openParens--
        }
      }
      if(openParens === 0) return true
      else return false
    }

  */

const isParensValid = str => {
  let openParens = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") openParens++;
    else if (str[i] === ")") {
      if (openParens < 1) return false;
      else openParens--;
    }
  }
  if (openParens === 0) return true;
  else return false;
};

module.exports = isParensValid
