/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let NO_OF_CHARS = 256;

  let count1 = new Array(NO_OF_CHARS);
  let count2 = new Array(NO_OF_CHARS);
  for (let i = 0; i < NO_OF_CHARS; i++) {
    count1[i] = 0;
    count2[i] = 0;
  }

  let i;
  for (i = 0; i < str1.length && i < str2.length; i++) {
    count1[str1[i].charCodeAt(0)]++;
    count2[str1[i].charCodeAt(0)]++;
  }
  if (str1.length != str2.length) return false;

  // Compare count arrays
  for (i = 0; i < NO_OF_CHARS; i++) if (count1[i] != count2[i]) return false;

  return true;
}

module.exports = isAnagram;
