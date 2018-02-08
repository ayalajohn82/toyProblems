// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? 
// Find all unique triplets in the array which gives the sum of zero.

// For example, given array S = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  let solutionSet = [];
  let currentSolution = [];

  for(let i = 0; i < nums.length; i++) {
    let front = i + 1;
    let back = nums.length - 1;

    while(front < back) {
      let sum = nums[front] + nums[back];

      
    }
  }
  return solutionSet;
};

const result = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(result);