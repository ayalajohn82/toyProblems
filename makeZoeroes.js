// Given a two dimensional array, if any element in it is zero make its whole row and column zero.

const makeZeroes = (matrix) => {
  let rows = [];
  let cols  = [];
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix.length; j++) {
      if(matrix[i][j] === 0) {
        rows.push(i);
        cols.push(j);
      }
    }
  }
  for(let x = 0; x < rows.length; x++) {
    for(let y = 0; y < matrix.length; y++) {
      matrix[rows[x]][y] = 0;
    }
  }

  for(let a = 0; a < cols.length; a++) {
    for(let b = 0; b < matrix.length; b++) {
      matrix[b][cols[a]] = 0;
    }
  }

  return matrix;
};

let matrix = [
  [5,4,3,9],
  [2,0,7,6],
  [1,3,4,0],
  [9,8,3,4],
];

makeZeroes(matrix);