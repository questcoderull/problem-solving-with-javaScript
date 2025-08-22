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

// handleRerseWord("hello world");

// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3

const findVowels = (word) => {
  const givenWord = word;
  const makeArry = givenWord.split("");
  console.log(makeArry);

  let vowelCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < makeArry.length; i++) {
    const element = makeArry[i];
    console.log("element", element);

    if (vowels.includes(element)) {
      vowelCount++;
    }
  }

  console.log("total vowels", vowelCount);
};

// findVowels("muhammad");

// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

const handlePalindrome = (word) => {
  const givenWord = word;
  const makeArray = givenWord.split("");
  const firstLetter = makeArray[0];
  console.log(firstLetter);
  const lastLetter = makeArray[makeArray.length - 1];
  console.log(lastLetter);

  if (firstLetter === lastLetter) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

// handlePalindrome("hello");

// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

// Example:

// Input: [5, 1, 9, 3]
// Output: 9

const findMaxNumber = (num) => {
  const givenNum = num;
  console.log(num);
  const maxNumber = Math.max(...givenNum);
  console.log(maxNumber);
  return maxNumber;
};

// findMaxNumber([3, 9, 5, 7, 3, 2]);
