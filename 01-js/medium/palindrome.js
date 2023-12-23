/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str2 = "";
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "A" && str[i] <= "Z") || (str[i] >= "a" && str[i] <= "z"))
      str2 += str[i];
  }
  str2 = str2.toLowerCase();
  for (let i = 0; i < str2.length / 2; i++) {
    if (str2[i] != str2[str2.length - i - 1]) return false;
  }
  return true;
}

module.exports = isPalindrome;
