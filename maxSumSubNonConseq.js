// Find an efficient algorithm to find maximum sum of a subsequence in an array such 
// that no consecutive elements are part of this subsequence. 

const maxSub = (a) => {
  if(a.length === 0) {
    return 0;
  } else if(a.length === 1) {
    return arr[0];
  }
  let length = a.length;
  let result = [];
  result.push(a[0]);
  for(let i = 1; i < length; i++) {
    result.push(Math.max(a[i], result[i - 1]));
    if(i - 2 >= 0) {
      result[i] = Math.max(result[i], a[i] + result[i - 2]);
    }
  }
  return result;
};

console.log(maxSub([1,6,10,14,-5,-1,2,-1,3]));