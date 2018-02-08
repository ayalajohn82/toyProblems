// Given a string s, find the longest palindromic substring in s. 
// You may assume that the maximum length of s is 1000.

// Example:

// Input: "babad"

// Output: "bab"

// Note: "aba" is also a valid answer.

// Input: "cbbd"

// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let longest = '';
  for(var i = 0; i < s.length; i++) {
    let current = s[i];
    if(isPalindrome(current)) {
      longest = current.length > longest.length ? current : longest;
    }
    for(var j = i + 1; j < s.length; j++) {
      current += s[j];
      if(isPalindrome(current)) {
        longest = current.length > longest.length ? current : longest;
      }
    }
  }
  return longest;
};

const isPalindrome = (str) => {
  for(var i = 0;  i < str.length; i++) {
    if(str[i] !== str[str.length - i - 1]){
      return false;
    }
  }
  return true;
};

const result = longestPalindrome('c');
console.log(result);