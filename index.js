// console.log("hello bhai i am working_ outside");
// const Check = () => {
//   console.log("hello bhai i am working_");
// };

// Check();

//Proble 1.
// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

// Example:

// Input: "hello"
// Output: "olleh"

const handleRerseWord = (word) => {
  const givenWord = word;
  console.log("given word", givenWord);
  const makeArry = givenWord.split("");
  console.log("make array", makeArry);
  const reverseTheWord = makeArry.reverse();
  console.log("reversed word", reverseTheWord);
  const makeString = reverseTheWord.join("");
  console.log(makeString);
  return makeString;
};

handleRerseWord("Hello");
