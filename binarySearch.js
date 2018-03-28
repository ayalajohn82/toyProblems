// Binary search of a sorted array
// Time: O(n)
// Space: O(1)

const binarySearch = (arr,  key) => {
  let low = 0;
  let high = arr.length - 1;
  while(low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if(key === arr[mid]                                                                                                           ) {
      return mid;
    }else if(key < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

var exArr = [1, 5, 7, 9, 10, 22, 34, 100, 102, 103];
const result = binarySearch(exArr, 15);
console.log(result);