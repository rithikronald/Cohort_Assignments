/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function reverseString(str, n) {
  let strSplit = str.split("");
  let left = 0;
  let right = n - 1;
  let temp;
  while (left < right) {
    // console.log(left, " ", right);
    temp = strSplit[left];
    // console.log("TEMp", temp);
    strSplit[left] = strSplit[right];
    // console.log("strSplit RIGHT", strSplit[right], " ", strSplit);
    strSplit[right] = temp;
    left++;
    right--;
    // console.log("stri", strSplit);
  }
  return strSplit.join("");
}

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z]/g, "");
  let reversedString = reverseString(str, str.length);
  console.log("REVERSED", reversedString, "  ", str);
  if (str == reversedString) {
    return true;
  } else {
    return false;
  }
}

// console.log("RESULT", isPalindrome("Able, was I ere I saw Elba!"));

module.exports = isPalindrome;
