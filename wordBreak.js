// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
// determine if s can be segmented into a space-separated sequence of one or more dictionary words. 
// You may assume the dictionary does not contain duplicate words.
// For example, given
// s = "leetcode",
// dict = ["leet", "code"].
// Return true because "leetcode" can be segmented as "leet code". 
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  for(var i = 0; i < wordDict.length; i++) {
    if(wordDict[i][0] === s[0]) {
      if(wordMatch(s, wordDict[i])) {

      }
    }
  }
};

const wordMatch = (s1, s2) => {
  for(var j = 0; j < s1.length; j++) {
    if(s1[j] !== s2[j]) {
      return false;
    }
  }
  return true;
};
const result = wordBreak('leetcode', ['leet', 'code']);
console.log(result);