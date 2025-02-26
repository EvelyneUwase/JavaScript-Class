// slide four 4

// let challenge = '30 Days Of JavaScript';

// console.log(challenge);

// // length
// console.log(challenge.length);

/* srting toUpperCase
const capitalizedChallenge = challenge.toUpperCase();
console.log(capitalizedChallenge);*/

// to lowercase
// const capitalizedChallenge = challenge.toLowerCase();
// console.log(capitalizedChallenge);

// OR ; console.log(`lowerCase`: challenge: to lowercase )

// no.6 slice out hte first word
// const str = '30 Days Of JavaScript';
// const substr = str.substring(3);
// console.log(substr)

// slice out the phrase day....
// const str = '30 Days Of JavaScript';
// const substr = str.substring(0,2);
// console.log(substr)


// checking word script
// const str = '30 Days Of JavaScript';
// if (str.includes("script"));
// console.log("The string contains 'script'.")

// splitting string
// const arr = str.split();
// console.log(arr)

// form comma to array
// const str = "Facebooke, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// const arr = str.split(".");
// console.log(arr)

// replacing ??? 12
// const str = "30 Days Of JavaScript (30 Days Python)";
// const newStr = str.replace();
// console.log(newStr);


    slide5 
// const str = '30 Days Of JavaScript';
// console.log(str.charAt(15));

// no 2 code
// const character = 'J';
// const characterCode = character.charCodeAt(0)
// console.log(characterCode);
// each character is assigned to a unique numerical value aka code point
// so uppercase J is 74 in decimal notation.

// no 3 the position of first occurence
// const position = str.indexOf("a");
// console.log(position)

// no4 last index
// const position = str.lastIndexOf("a");
// console.log(position);

// no5
// const string = "You cannot end a sentence with because because because in a conjuction";
// const position = string.indexOf("because");
// console.log(position)

// no-6 lastIndexOf
// const position = string.lastIndexOf("because");
// console.log(position)

// n0-7 
// const position = string.search("because");
// console.log(position)

// n0 8 trim
// const trimmedString = string.trim();
// console.log(trimmedString)


        slide6
// n0 1 startsWith()
// let string = "30 Days Of JavaScript";
// const result = string.startsWith("30");
// console.log(result)
// // this method returns true if the string starts with a specified value and false otherwise

// const result = string.endsWith("Script");
// console.log(result)

// const result = string.match(/a/g);
// console.log(result) /a/g is a pattern to match

// const results = string.repeat(2);
// console.log(results)

// // merging 
// const array1 = ["30 Days of"];
// const array2 = ["JavaScript"];
// const mergedArray = array1.concat(array2);

// console.log(mergedArray)

// SLIDE 7
// console.log(typeof 10 === 10);

// const num = parseFloat('9.8');
// const result = num === 10 ? num : Math.ceil(num);
// console.log(result); 

// const python = 'python';
// const jargon = 'jargon';

// const result = python.includes('on') && jargon.includes('on');
// console.log(result); 

// const string = "I hope this course is not full of jargon";
// const result = string.includes("jargon");
// console.log(result); // Output: true

// // random number between 0-100
// let number = Math.random();
// console.log(number)
// let randomNumber = number *100;
// console.log(randomNumber)
// let wholeNumber = Math.floor(randomNumber)
// console.log(wholeNumber)

// // btween 50 and 100
// let number = Math.random();
// console.log(number)
// let randomNumber = number*50;
// console.log(randomNumber )
// let wholeNumber = Math.floor(randomNumber)
//  console.log(wholeNumber)

//  let number = Math.random();
console.log(number)
let randomNumber = number*255;
console.log(randomNumber )
let wholeNumber = Math.floor(randomNumber)
 console.log(wholeNumber)


//  const str = 'JavaScript';
// const randomIndex = Math.floor(Math.random() * str.length);
// const randomChar = str[randomIndex];
// console.log(randomChar);

// // slide 8
console.log(`1 1 1 1 1`)
console.log(`2 1 2 4 8`)
console.log(`3 1 3 9 27`)
console.log(`4 1 4 16 64`)
console.log(`5 1 5 25 125`)

// slice
const sentence = "You cannot end a sentence with because because because is a conjunction";
const startIndex = sentence.indexOf('because because because');
const phrase = sentence.subsentence(startIndex, 20);
console.log(phrase); 
// still failling

// SLIDE 9
let firstName = "Evelyne";
let lastName = "Uwase";
let country = "Uganda";
let city = "Kampala";
let age = 23;
let isMarried = false;
let year = 2025;

console.log(typeof(firstName))
console.log(typeof(lastName ))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age ))
console.log(typeof(isMarried ))
console.log(typeof(year))

// console.log(typeof 10 ===10);

// check parselnt
const num = parseInt('9,8');
const result = Math.round(num);
console.log(result)
// not equal to 10

// boolean 
//  const value0 = 5 > 3; // true

// const value1 = "Hello"; // "Hello" is a truthy string

const value2 = [1, 2, 3];
console.log(value2)

const value4 = 0; // 0 is a falsy number

 const value5 = ""; // Empty strings are falsy

 const value6 = null;