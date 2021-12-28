
function isPalindrome(word) {

  if (word.length <= 1) {
    return true
  } else {
    if (word[0] === word[word.length - 1]) {
      return isPalindrome(word.slice(1, -1))
    } else {
      return false
    }
  }
}


isPalindrome("abba");


/* 
  Declare Function 
   if length is less than 1 return true

   else
   if word 0 is strictly equal to the end (-1) 
   slice out 1 and -1 
   
   else 
   return false
*/

/*
  If the word is one letter or less, return true 
  Else deconstruct the word using splice to compare letters

  If the letters are not strictly equal return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here


  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
