


// Input:
// First line of the input contains a single integer T denoting the number of test cases.
// For each test case there are two lines of input.
// The first line contain two space separated integer N and K.
// The next line of the input will contain N space seprated integers, which are the taste number of the r th carrot Ar dug by the i th rabbit. 

// Output
// For each test case output a single integer denoting the number of carrots which can be eaten by the ith rabbit on a new line. 

// Constraints
//     1 ≤ T ≤ 100
//     1 ≤ N ≤ 100000
//     1 ≤ K ≤ 1000
//     1 ≤ Ar ≤ 1018

//example input:
// 3                  number of test cases
// 5 2                Number of Carrot, Rabit's carrot type
// 14 17 4 16 64      Each carrot rabbit dug up
// 3 9
// 9 5 81
// 4 7
// 343 14 25 5764801

//example output:
// 3
// 2
// 2


const example = '3\n5 2\n14 17 4 16 64\n3 9\n9 5 81\n4 7\n343 14 25 5764801';

/**
 * 
 * @param {Integer} n - number of carrots
 * @param {Integer} k - carrot type(base)
 * @param {ArrayInt} Carrots - carrots(power)
 */
const findCarrotForRabbit = (n, k, Carrots) => {
  
};

/**
 * 
 * @param {String} input - string representing test cases
 * @returns {ArrayObject} - test cases separated out in array of objects
 */
const parseInput = (input) => {
  input = input.split('\n');
  var numTest = Number(input[0]);
  console.log('split input', input);
  console.log('numTest', numTest);
  for(let i = 0; i < numTest; i++) {
    const test = {
      k: input[i+1][0]
    }
    console.log('test obj', test)
  }
};

parseInput(example);
/**
 * Check if a number is the power of another number
 * @param {Integer} base - base number
 * @param {Integer} power - number that might be power of base
 * @returns {Boolean} - whether power is a power of base
 */
const isPowerOf = (base, power) => {
  while(power % base === 0) {
    power /= base;
  }
  return power === 1;
}