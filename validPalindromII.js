/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let deleted = false;
  for(let front = 0, back = s.length-1; front <= back; front++, back--) {
    if(s[front] !== s[back]) {
      let letter = s.length - 1 - front;
      return (isPalindrome(s, front + 1, letter) || isPalindrome(s, front, letter-1));
    } 
  }
  return true;
};

const isPalindrome = (s, front, back) => {
  for(let k = front; k <= front + (back - front) / 2; k++) {
    if(s[k] !== s[back - k + front]) {
      return false;
    }
  }
  return true;
}

const result = validPalindrome("ebcbbececabbacecbbcbe");
console.log(result);