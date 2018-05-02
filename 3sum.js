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
const threeSum = (nums, target) => {
  nums = nums.sort((a, b) => {
    return a - b;
  });
  let solutions = [];
  let sum = nums[0] + nums[1] + nums[2];
  if(sum === target) {
    solutions.push([nums[0], nums[1], nums[2]]);
  }
  for(let i = 3; i < nums.length; i++) {
    sum += nums[i] - nums[i - 3];
    if(sum === target) {
      solutions.push([nums[i - 2], nums[i - 1], nums[i]]);
    }
  }
  return solutions;
};

const result = threeSum([1, 0, 1, 2, 1, 4], 3);
console.log(result);