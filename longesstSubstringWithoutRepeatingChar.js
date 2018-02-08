// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longest = 0;
  let subLength = 0;
  let current = {};
  current[s[0]] = 0;

  for (let i = 1; i < s.length; i++) {
    if (current.hasOwnProperty(s[i])) {
      subLength = Math.max(subLength, current[s[i]]+1);
    }
    longest = Math.max(longest, i - subLength + 1);
    current[s[i]] = i;
  }
  return longest;
}

const result = lengthOfLongestSubstring("dvdfaev");
console.log(result);