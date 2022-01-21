function isPalindrome(word) {
  // Write your algorithm here
  wordArray = word.split("");
  let reversedArray = [];
  
  for(let i=wordArray.length; i>=0; i--) {
      reversedArray.push(wordArray[i]);
  }

  let reversedString = reversedArray.join("");
  return reversedString === word ? true : false;

}

/* 
  Add your pseudocode here
  Turn the word into an array using split.
  Reverse the elements in the array with a for loop.
  Declare a new empty array to push the reversed elements into it.
  Convert that array into a string and compare the word and the reversed string.
*/

/*
  Add written explanation of your solution here
  wordArray = word.split("") is used to convert the word to an array
  let reversedArray = [] is used so the reversed letters can be pushed into this array

  The for loop is used to push the reversed elements to the reversedArray

  let reveresedString = reversedArray.join("") is used to convert the array into a string

  And the ternary operator is used to return true if reversedString and word are equal

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
