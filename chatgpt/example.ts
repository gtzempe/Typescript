// function multiply(a: number, b: number): number {
//   return a * b;
// }

// function addExclam(s: string): string {
//   return s + "!"
// }

// function negative(n: number): boolean {
//   return n < 0;
// }

// function upperCase(word: string): boolean {
//   if (word.length === 0) return false;
//   const upper = word[0]
//   return upper === upper.toUpperCase() && upper !== upper.toLowerCase()
// }

// function capitalFirstLetter(letter: string[]): string[] {
  
//   return letter.filter(l => {
//     if (l.length === 0) return false;
//     const first = l[0]
//     return first === first.toUpperCase() && first !== first.toLowerCase()
//   }) 
// }

// function nonCapital(words: string[]): string[] {
//   return words.filter(word => {
//     if(word.length === 0) return false;
//     const first = word[0]
//     return first !== first.toUpperCase() && first === first.toLowerCase() 
//   })
// }

// function perfectSquare(numbers: number[]): number[] {
//   return numbers.filter(n => {
//     if (n < 0) return false;
//     const sqrt = Math.sqrt(n)
//     return sqrt === Math.floor(sqrt)
//   })
// }

// function nonPerfectSquare(numbers: number[]): number[] {
//   return numbers.filter(n => {
//     if (n < 0) return false;
//     const sqrt = Math.sqrt(n)
//     return sqrt !== Math.floor(sqrt)
//   })
// }

// function joinUpperCaseNames(arr: { name: string }[]): string {
//   return arr.map(obj => obj.name).join(' ').toUpperCase()
// }

//1
function square(num: number): number {
  return num * num
}

//2
function reverse(str: string): string {
  return str.split('').reverse().join('')
  
}

//3
function sum(num: number[]): number {
  return num.reduce((a, b) => a + b, 0)
}

//4
function evenNum(num: number): boolean {
  return num % 2 === 0
}

//5
function sumBetween(num1: number, num2: number): number {
  let sum = 0
  for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
    sum += i 
  } 
  return sum;
}  

//6
// function biggestWord(arr: string[]): number {
//   let maxLength = 0
//   let word = 0
  
//   for (let i = 0; i < arr.length; i++) {
//       word = arr[i].length;
//       if (word > maxLength) {
//         maxLength = word
//       }
//   }
//   return maxLength;
// }

function biggestWord(arr: string[]): number {
  return Math.max(...arr.map(word => word.length));
}

//7
function props( obj:{params: object} ): string[] {
  return Object.keys(obj.params)
}

//8
function palindrome(str: string): boolean {
  let reverse = str.split('').reverse().join('')
  return reverse === str
}

//9
function minMax(arr: number[]): [number, number] {
  let num1 = Math.max(...arr)
  let num2 = Math.min(...arr)
  return [num1, num2]
}

//10
function isPrime(num: number): boolean {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

//11
function capitalLetters(arr: string[]): string[] {
  return arr.map(item => item.toUpperCase())
}

//12
// function evenNumbers(arr: number[]): number[] {
//   let even: number[] = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       even.push(arr[i])
//     }
//   }
//   return even;
// }

function evenNumbers(arr: number[]): number[] {
  return arr.filter(el => el % 2 !== 0)
}

//13
function factorial(num: number): number {
  if (num === 0) return 1;
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

//14
function objSplit(arr: { name: string }[] ): string {
  return arr.map(el => el.name).join(' ')
}

//15
function uniqueChars(str: string): string {
  return [...new Set(str)].join('');
}
