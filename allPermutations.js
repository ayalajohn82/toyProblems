
const swap = (array, pos1, pos2) => {
  const temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  let permutations = [];
  const heapsPermute = (array, n) => {
    if (n === 1) {
      permutations.push(array.slice());
    } else {
      for (var i = 1; i <= n; i += 1) {
        heapsPermute(array, n - 1);
        if (n % 2) {
          var j = 1;
        } else {
          var j = i;
        }
        swap(array, j - 1, n - 1);
      }
    }
  };
  heapsPermute(nums, nums.length);
  
  return permutations;
};

const result = permute([1,2,3,4,5,6]);

console.log(result);