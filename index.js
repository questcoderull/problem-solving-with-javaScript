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

// handleRerseWord("Hello worl");

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

// handlePalindrome("madam");

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

// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

const removeDuplicatesNum = (num) => {
  const givenNumber = num;
  // console.log(givenNumber);
  let uniqueNUmbers = [];

  for (let i = 0; i < givenNumber.length; i++) {
    const element = givenNumber[i];
    // console.log(element);

    if (!uniqueNUmbers.includes(element)) {
      uniqueNUmbers.push(element);
      // console.log("unique number in the loop", uniqueNUmbers);
    }
  }
  console.log("unique numbers", uniqueNUmbers);
  return uniqueNUmbers;
};

// removeDuplicatesNum([3, 3, 3, 3, 3, 5, 6, 6, 1, 6, 7, 7]);

// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

// Example:

// Input: [1, 2, 3, 4]
// Output: 10

const handleSum = (numbers) => {
  const givenNumbers = numbers;
  // console.log(givenNumbers);
  let totalSum = 0;
  for (let i = 0; i < givenNumbers.length; i++) {
    const element = givenNumbers[i];
    totalSum = totalSum + element;
  }
  console.log("summed number", totalSum);
  return totalSum;
};

// handleSum([5, 5, 5, 300, 9, 7, 3, 2, 76]);

// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

const findEvenNumbers = (num) => {
  const givenNumbers = num;
  console.log(givenNumbers);
  const totalEvenNumbers = [];

  for (let i = 0; i < givenNumbers.length; i++) {
    const singleNumbers = givenNumbers[i];
    console.log(singleNumbers);

    if (singleNumbers % 2 == 0) {
      totalEvenNumbers.push(singleNumbers);
    }
  }
  console.log("total even numbers", totalEvenNumbers);
};

// findEvenNumbers([1, 2, 3, 5, 6, 7, 8]);

// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"

const handleCapitalize = (words) => {
  const givenWords = words;
  const singleWords = givenWords.split(" ");

  const capitalized = singleWords.map((w) => {
    return w.charAt(0).toUpperCase() + w.slice(1);
  });
  const wordInSentace = capitalized.join(" ");
  console.log(wordInSentace);
};

// handleCapitalize(
//   "hi i am reja, a mern stack develper, like to solve problems, because it boasts my skills and let me learn new things and functionality."
// );

// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120

const findFactorial = (num) => {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i;

    console.log("result in the loop", result);
  }
  console.log(result);
  return result;
};

// findFactorial(5);

// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.

// Example:

// For multiples of 3, print "Ping"
// For multiples of 5, print "Pong"
// For multiples of both 3 and 5, print "PingPong"
// If the number is not a multiple of 3 or 5, print the number itself
// Example Output:

// 1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..

const handlePingPong = (num1, num2) => {
  for (let i = 1; i <= 20; i++) {
    // console.log(i);

    if (i % num1 === 0 && i % num2 === 0) {
      console.log("pingPong");
    } else if (i % num1 === 0) {
      console.log("ping");
    } else if (i % num2 === 0) {
      console.log("pong");
    } else {
      console.log(i);
    }
  }
};

// handlePingPong(3, 5);
