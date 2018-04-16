//Reverse words in a string

// Reverse the order of words in a given sentence. Here are a few examples:
// "Hello World" -> "World Hello"
// "The quick brown fox jumped over the lazy dog." -> "dog. lazy the over jumped fox brown quick The"
// CONSTRAINTS: O(n) Time O(1) Space

/**
 * Replaces a portion of string at a specified index
 * @param {String} str - string that will have elements replaced
 * @param {Integer} index - replace index
 * @param {String} replacement - string to replace
 */
const replaceAt = (str, index, replacement) => {
  return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}

/**
 * Reverses input s tring return it
 * @param {String} str - string to be reversed
 * @param {String} front - start of reversal
 * @param {String} back - end of reversal
 * @returns {String} - reveresed string
 */
const reverseString = (str, front, back) => {
  while(front < back) {
    let temp = str[front];
    str = replaceAt(str, front, str[back]);
    str = replaceAt(str, back, temp);
    front++;
    back--;
  }
  return str;
};

/**
 *  Reverse a string's words
 * @param {String} str - string to be reversed by words 
 * @returns {String} - str reversered by words
 */
const reverseWordsInString = (str) => {
  let front = 0;
  let back = str.length;
  str = reverseString(str, front, back - 1);
  
  while(true) {
    while(str[front] === ' ') {
      front++;
    }
    
    if(front >= str.length) {
      break;
    }

    back = front + 1;

    while(back < str.length && str[back] !== ' ') {
      back++;
    }

    str = reverseString(str, front, back - 1);
    front = back;
  }
  
  return str;
};


const ex1 = 'Hello World';
const ex2 = 'The quick brown fox jumped over the lazy dog.';

const result1 = reverseString(ex1, 0, ex1.length - 1);
const result2 = reverseString(ex2, 0, ex2.length - 1);
const reversed1 = reverseWordsInString(ex1);
const reversed2 = reverseWordsInString(ex2);
console.log(result1);
console.log(result2);
console.log(reversed1);
console.log(reversed2);
