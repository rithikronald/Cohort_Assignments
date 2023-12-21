/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  str1 = str1.replace(/\s/g, "");
  str2 = str2.replace(/\s/g, "");
  // console.log("STR1", str1);
  if (str1.length == str2.length) {
    let charCount = 0;
    for (i = 0; i < str1.length; i++) {
      for (j = 0; j < str2.length; j++) {
        // console.log(str1[i], "  ", str2[j]);
        if (str1[i] == str2[j]) {
          charCount += 1;
          break;
        }
      }
    }
    // console.log("CharCount: ", charCount);
    if (charCount == str1.length) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// console.log("RESULT", isAnagram("Debit Card", "Bad Credit"));

module.exports = isAnagram;
