// Given an array, find the contiguous subarray with the largest sum. 

const maxSubSum = (arr) => {
  let maxSub = [];
  let currMax = 0;
  let max = 0;
  for(let i = 0 ; i < arr.length; i++)  {
    if(arr[i] > 0) {
      currMax += arr[i];
    } else {
      max = Math.max(max, currMax);
      currMax = 0;
    }
  }

  return max;
};

console.log(maxSubSum([-4, 2, -5, 1, 2, 3, 6, -5, 1]));