// Search a given number in a sorted array that has been rotated by some arbitrary number.

const bsRotated = (arr, key) => {
  let low = 0;
  let high = arr.length - 1;

  while(low <= high) {
    console.log(low, high);
    let mid = low + Math.floor((high - low) / 2)
    if(key === arr[mid]) {
      return mid;
    } else if(arr[low] < arr[mid] 
              && key < arr[mid] 
              && key >= arr[low]) {
      high = mid - 1;
    } else if(arr[mid] < arr[high]
              && key > arr[mid]
              && key <= arr[high]) {
      low = mid + 1;
      
    } else if(arr[low] > arr[mid]) {
      high = mid - 1;

    } else if(arr[mid] > arr[high]) {
      low = mid + 1;
    } else {
      return -1;
    }
  }
  return -1;    
};

const exArr = [176, 188, 199, 200, 1, 10, 22, 47, 52, 77, 89, 97, 120, 124, 155, 163];
const result = bsRotated(exArr, 2); 
console.log(result);  