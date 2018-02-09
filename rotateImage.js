// You are given an n x n 2D matrix representing an image.
// Rotate the image by 90 degrees (clockwise)
// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  let clonedArray = JSON.parse(JSON.stringify(matrix));
  for(var i = 0; i < matrix.length;  i++) {
    for(var j = 0; j < matrix.length; j++) {
      matrix[i][j] = clonedArray[matrix.length - 1 - j][i];
    }
  }
};

const result = rotate([[1,2,3],[4,5,6],[7,8,9]]);
console.log(result);