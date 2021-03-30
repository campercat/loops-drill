// Solve the following problems, you will need to determine which for loop to use, or if one is needed at all:

// 1. Write a function called sum which takes a whole number n as a parameter which will add up all the whole numbers between 1 and the value of n.  The sum should be returned by the function.
const sum = n => {
  let sum = 0
  for(let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}
// console.log(sum(10))

// 2. Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).
const findSyllables = str => {
  return str.length/2
}

// console.log(findSyllables("Lalalalalalala"))

// 3. Write a function called addTo that accepts a number as a parameter and adds all whole numbers smaller or equal than the parameter. The result is to be returned.
const addTo = number => {
  let sum = 0
  for(let i = 1; i <= number; i++) {
    sum += i
  }
  return sum
}
// console.log(addTo(8))

// 4. Write a function that takes a string input and console logs each letter.
const printCharacters = str => {
  for(let character of str) {
    console.log(character)
  }
}

// printCharacters('apple')

// 5. Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
const uppperOrLower = str => {
  if(str === str.toUpperCase()) {
    return `upper`
  } else if(str === str.toLowerCase()) {
    return `lower`
  } else {
    return `mixed`
  }
}

// console.log(uppperOrLower('apple'))
// console.log(uppperOrLower('APPLE'))
// console.log(uppperOrLower('Apple'))

// 6. Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end the number of tries needed should be printed. It counts only as one try if they input the same number multiple times consecutively.
const guessNumber = number => {
  let guess1
  let guess2
  let count = 0
  for(let i = 1; i >= 1; i++) {
    guess2 = guess1
    guess1 = Number(prompt("Enter a whole number for your guess:"))
    if(guess1 === number) {
      count++
      break
    } else if(guess1 > number) {
      if(guess1 != guess2) {
        count++
        console.log(count)
      }
      alert("Your guess is bigger than the number.")
    } else {
      if(guess1 != guess2) {
        count++
        console.log(count)
      }
      alert("Your guess is smaller than the number.")
    }
  }
  return count
}

// console.log(guessNumber(48))


// 7. Write a JavaScript for loop that will iterate from 0 to 25. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// for(let i = 0; i <= 25; i++) {
//   if(i%2 === 1) {
//     console.log(`${i} is odd`)
//   } else {
//     console.log(`${i} is even`)
//   }
// }

// Your results should look like this:
// "0 is even"
// "1 is odd"
// "2 is even"

// 8. You have a shelf that can only hold so many books. For each iteration of the loop, we will add one book onto the shelf. Once the shelf has 80 books, you can no longer add anymore. Write a script that after every iteration, it will tell you how many remaining books you can add into the shelf. Console log something like, "There is room for only ## of books"
// let space = 80
// for(let i = 1; i <= 80; i++) {
//   space--
//   console.log(`There is room for only ${space} of books`)
// }

// 9. Print out a grid of asterisks. Ask the user for the height (rows) and width (columns).
const printBox = () => {
  const row = Number(prompt('What is the height?'))
  const col = Number(prompt('What is the width?'))
  let box = ''
  for(let i = 1; i <= row; i++) {
    for(let j = 1; j <= col; j++) {
      box += '*'
    }
    box += `\n`
  }
  return box
}

// console.log(printBox())

// 10. Write a function that takes a string input, transforms the odd characters to uppercase, and console logs the result of the entire string.
// Example input: "hello" Output: "hElLo"
const oddToUpper = str => {
  let newStr = ''
  for(let i = 0; i < str.length; i++) {
    if(i%2 === 1) {
      newStr += str[i].toUpperCase()
    } else {
      newStr += str[i]
    }
  }
  return newStr
}
// console.log(oddToUpper('hello'))

// 11. Write a function that accept two integers and displays the larger number.
const getLarger = (x, y) => {
  if(x > y) {
    return x
  } else if (y > x) {
    return y
  } else {
    return x
  }
}
// console.log(getLarger(20, 17))

// 12. Write a function that takes in 3 numbers and sorts them from lowest to highest. Display an alert box to show the result.
const compare = (num1, num2) => {
  return num1 - num2
}

// const sort = (num1, num2, num3) => {
//   let output = `${num1} ${num2} ${num3}`
//   if(compare(num1, num2) > 0) {
//     output  = `${num2} ${num1} ${num3}`
//   } else if(compare(num2, num3) > 0) {
//     let output = `${num1} ${num3} ${num2}`
//   }
//   if(compare(num2, num3) > 0) {
//     output  = `${num2} ${num3} ${num1}`
//   }
//   if(compare(num2, num3) > 0) {
//     output  = `${num3} ${num2} ${num1}`
//   }
//   return output
// }
const sort = (num1, num2, num3) => {
  let min = Math.min(num1, num2, num3)
  let max = Math.max(num1, num2, num3)
  let mid
  if(num1 !== min && num1 !== max) {
    mid = num1
  } else if(num2 !== min && num2 !== max) {
    mid = num2
  } else {
    mid = num3
  }
  return `${min} ${mid} ${max}`
}

// console.log(sort(2,3,1))
// console.log(sort(2,8,2))
// console.log(sort(5,5,5))


// 13. Write a function that takes in a string and removes all vowels from it (a, e, i, o, u), and returns the new string. If the string is empty, break from the loop.
const removeVowels = str => {
  const vowels = 'aeiou'
  for(let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i])){
      str = str.replace(str[i], '')
    }
  }
  return str
}

// console.log(removeVowels('elephant'))