/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  let pairCount = 0;
  let compliments = {};
  for (let i = 0; i < nums.length; i++) {
    if(compliments.hasOwnProperty(nums[i])) {
      pairCount += compliments[nums[i]][0];
    }
    if(compliments[nums[i] - k]) {
      if(nums[i] !== compliments[nums[i] - k][1]) {
        compliments[nums[i] - k][0] += 1;
      }
    } else {
      compliments[nums[i] - k] = [1, nums[i]];
    }
    if(compliments[nums[i] + k]) {
      if(nums[i] !== compliments[nums[i] + k][1]) {
        compliments[nums[i] + k][0] += 1;
      }
    } else {
      compliments[nums[i] + k] = [1, nums[i]];
    }
  }
  return pairCount;
};

const result = findPairs([1, 2, 3, 4, 5], 1);
console.log(result);