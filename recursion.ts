// 1. Factorial of a Number
// Write a recursive function to compute the factorial of a given number n.
// Factorial of n (denoted as n!) is defined as: n! = n * (n-1) * (n-2) * ... * 1
// Base case: 0! = 1
//
// Example Test Cases:

const factorial = (n: number): number => {
  if (n === 0) return 1;
  return n * factorial(n - 1); 
}
// console.log(factorial(5)); // Output: 120
// console.log(factorial(0)); // Output: 1

// 2. Sum of an Array
// Write a recursive function to calculate the sum of all numbers in an array.
//
// Example Test Cases:
const sumArray = (arr: number[]): number => {
  if(arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}
// console.log(sumArray([1, 2, 3, 4])); // Output: 10
// console.log(sumArray([])); // Output: 0
// console.log(sumArray([5])); // Output: 5
// 3. Reverse a String
// Write a recursive function that reverses a given string.
//
// Example Test Cases:
const reverseString = (str: string): string => {
  if (str.length === 0) return ''; 
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}
// console.log(reverseString("hello")); // Output: "olleh"
// console.log(reverseString("racecar")); // Output: "racecar"
// console.log(reverseString("abc")); // Output: "cba"

// 4. Check if a String is a Palindrome
// Write a recursive function to check if a string is a palindrome (reads the same forward and backward).
//
// Example Test Cases:
const isPalindrome =(str: string): boolean => {
  if(str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}
// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello"));   // Output: false
// console.log(isPalindrome("a"));       // Output: true

// 5. Compute the N-th Fibonacci Number
// Write a recursive function to compute the nth Fibonacci number.
// The Fibonacci sequence is defined as:
// F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)
//
// Example Test Cases:
const fibonacci = (n: number): number => {
  if(n === 0) return 0;
  if(n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log(fibonacci(6)); // Output: 8
// console.log(fibonacci(0)); // Output: 0
// console.log(fibonacci(1)); // Output: 1


// 6. Flatten a Nested Array
// Write a recursive function to flatten an array that contains nested arrays into a single-level array.
//
// Example Test Cases:
const flattenArray = (arr: any[]): number[] => {
  let result: number[] = [];
  if(arr.length <= 0) return [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
// console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]
// console.log(flattenArray([])); // Output: []

// 7. Count the Number of Occurrences of a Value in an Array
// Write a recursive function that counts how many times a given value appears in an array.
//
// Example Test Cases:
const countOccurrences =(arr: number[], value: number): number => {
  let count = 0;
  if(arr.length <= 0) return 0;
  if(value === arr[arr.length - 1]) {
    count++;
    arr.pop();
  } else {
    arr.pop();
  }
  return count + countOccurrences(arr, value);
}
// console.log(countOccurrences([1, 2, 3, 4, 2, 2, 5], 2)); // Output: 3
// console.log(countOccurrences([1, 1, 1, 1, 1], 1)); // Output: 5
// console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // Output: 0

// 8. Find the Maximum Number in an Array
// Write a recursive function that finds and returns the maximum value in an array.
//
// Example Test Cases:

const findMax = (arr: number[]): number => {
  if(arr.length === 0) return -Infinity; // had to look this up because at first my function was returning 0 for negative integers...
  let max = arr.pop()!; 
  let next = findMax(arr); 
  return max > next ? max : next; 
}

// console.log(findMax([1, 5, 3, 9, 2])); // Output: 9
// console.log(findMax([7, 7, 7, 7])); // Output: 7
// console.log(findMax([-1, -2, -3, -4])); // Output: -1
