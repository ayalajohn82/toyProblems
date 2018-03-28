// Given a large array of integers and a window of size 'w', 
// find the current maximum in the window as the window slides through the entire array.

const maxInWindow = (arr, w) => {
  const n = arr.length;
  if(w > n) {
    return;
  }
  let result = [];
  let window = [];

  //finding max of the first window
  for(let i = 0; i < w; i++) {
    //removing all numbers that smaller than current num
    while(window.length > 0 
          && arr[i] >= arr[window[window.length -1]]) {
      window.pop();
    }
    window.push(i);
  }

  for(let i = w; i < arr.length; i++) {
    //removing all numbers that smaller than current num
    while(window.length > 0 
          && arr[i] >= arr[window[window.length -1]]) {
      window.pop();
    }  

    // remove first item if it is not in window anymore
    if(window.length > 0 
       && (window[0] <= i - w)) {
      window.shift();
    }

    window.push(i);
    result.push(arr[window[0]]);
  }

  return result;
};

const exArr = [-4, 2, -5, 1, -1, 6];
const result = maxInWindow(exArr, 3);
console.log(result);