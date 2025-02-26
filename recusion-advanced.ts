// 9. Three-Sum Problem
// Write a recursive function to find all unique triplets in an array that sum to zero.
// You must return an array of arrays where each subarray contains a valid triplet.
//
// Example Test Cases:
const threeSum = (arr: number[], index = 0, result: number[][] = []): number[][] => {
  if (index >= arr.length - 2) return result; 
  if(index === 0) arr.sort((a, b) => a - b); 
  function twoSum(left: number, right: number, target: number): any {
    if (left >= right) return; 

    let sum = arr[left] + arr[right];

    if (sum === target) {
      result.push([arr[index], arr[left], arr[right]]);
      return twoSum(left + 1, right - 1, target); 
    }
    return sum < target ? twoSum(left + 1, right, target) : twoSum(left, right - 1, target);
  }

  if (index === 0 || arr[index] !== arr[index - 1]) { 
    twoSum(index + 1, arr.length - 1, -arr[index]);
  }

  return threeSum(arr, index + 1, result); 
}
// console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Expected Output: [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum([0, 1, 1])); // Output: []
// console.log(threeSum([0, 0, 0])); // Output: [[0, 0, 0]]

// 10. Rock, Paper, Scissors (Generate All Possible Outcomes)
// Write a recursive function that generates all possible outcomes of a game of Rock, Paper, Scissors for n rounds.
// Each round has three choices: "rock", "paper", or "scissors".
// The function should return an array of arrays, where each inner array represents a sequence of moves.
//
// Example Test Cases:

// console.log(rockPaperScissors(1));
// Expected Output: [["rock"], ["paper"], ["scissors"]]

const rockPaperScissors = (n: number, result: string[][] = [], curVal: string[] = []): string[][] => {
  if(n === 0) {
    result.push([...curVal]);
    return result;
  }

  ['rock', 'paper', 'scissors'].forEach((move) => {
    curVal.push(move);
    rockPaperScissors(n - 1, result, curVal);
    curVal.pop();
  });
  return result;
}

// console.log(rockPaperScissors(2)); // Expected Output: [
  //   ["rock", "rock"], ["rock", "paper"], ["rock", "scissors"],
  //   ["paper", "rock"], ["paper", "paper"], ["paper", "scissors"],
  //   ["scissors", "rock"], ["scissors", "paper"], ["scissors", "scissors"]
  // ]
