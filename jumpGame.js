// Given an array of non-negative integers, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Determine if you are able to reach the last index.

// For example:
// A = [2,3,1,1,4], return true.
// A = [3,2,1,0,4], return false. 
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
  const length = nums.length - 1;
  let front = 0; 
  let back = 0;
  let steps = 0;

  while(back < length) {
    steps += 1;
    let max = back + 1;
    for(var i = front; i < back+ 1; i++) {
      if(i + nums[i] >= length) {
        return steps;
      }
      max = Math.max(max, i + nums[i]);
    }
    front = back + 1;
    back = max;
  }
  return steps;
};

const result = canJump([2,3,1,1,4]);
console.log(result);
