/* REGEX or Regular Expresssions.
These are tools used for finding patterns within a string. Or
sequence of characters that define a search pattern
They are used to find, validate, search text insert 
known syntax is const regex = / /; 
It's either created by a regex constractor or lteral syntax.
RegExp = ('pattern', 'Flag');
const regex = /pattern/flag

Flags 
i flag g flag and m flag



patterns  include
\b word boudary
\d  same as [0-9] for digits
\w for matching word character [a-z A-Z_0-9]
\D matches any non digit a b @
\W matches any word character a b 0 - 7
\s matches white space caracter space or tab
\S matches non-white space xters 

Qualifiers/ metaCharacters make work abit complex.
[]? character occurs 0 or 1 time
[]+ occurs 1time or more
[]* 0 or many times
[]{n} occurs n times 
[]{y,z} occurs atleast y times not less than z

groups and alternation
() groups part of regex
 [] it matches any one of the characters in the brackets 
| pipe*/

// let text = "Hello, my name is John Doe.";
// let pattern = /\bJohn\b/;

// if (pattern.test(text)) {
//   console.log("Pattern found!");
// } else {
//   console.log("Pattern not found.");
// }


//EXAMPLE 
// phone number / /
// ^\(\d{3}\) \d{3}-\d{4}$
// const regex = /(\d{3})-(\d{2})-(\d{4})/;
// const str = "My number is 123-45-6789.";
// const result = regex.exec(str);

// console.log(result);

// const regex = /(\d{10})/;
// const str = "My number is 1723456789.";
// const result = regex.exec(str);

// console.log(result);


//email validation   Evelyneuwa254@gmail.com
// const pattern = [A-Za-z0-9_\-\.]+@[\.][a-z]{2,3};
// ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

// const text = "My email is Binojjo@example.com and my backup is test123@mail.com.";
const pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
// const emails = text.match(pattern);

// console.log(emails);

// // //Dates
// (\d{2})/(\d{2})/(\d{4})

// //password"P@ssw0rd!"
// const password ="P@ssw0rd!" ;
// const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@!%*?&])[A-Za-z\d$@!%*?&]{8,}$/;

// if (pattern.test(password)) {
//   console.log("Valid password");
// } else {
//   console.log("Invalid password");
// }


// // validation.js
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission
    
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
  
    // Password validation pattern (at least one letter, one number, one special char, and 8+ characters)
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (pattern.test(password)) {
      errorMessage.textContent = "";  // Clear any previous error message
      alert("Password is valid! Form can be submitted.");
      // You can submit the form here if needed, e.g.:
      // document.getElementById("signup-form").submit();
    } else {
      errorMessage.textContent = alert("Password must be at least 8 characters long, contain at least one letter, one number, and one special character.");
    }
  });
  
// // search
      // Predefined string to search within
    // const predefinedText = "I love programming with JavaScript, Java, and Python.";

    // Get the button and result elements
    const searchButton = document.getElementById("btn");
    const resultElement = document.getElementById("result");

    // Function to handle the search
    searchButton.addEventListener("click", function() {
      const searchTerm = document.getElementById("search-term").value.trim();

      // Check if the input field is empty
      if (searchTerm === "") {
        resultElement.textContent = alert("Please enter a search term.");
        resultElement.classList.add("error");
        return;
      }
// get entire text content of the document
      const documentText = document.body.innerText;

      // Create the regular expression for the search term
      const pattern = new RegExp(searchTerm, "gi"); // 'g' for global and 'i' for case-insensitive

      // Use the search() method to find the first match of the search term
      const matchIndex = documentText.search(pattern);

      // Display the result
      if (matchIndex !== -1) {
        resultElement.textContent = alert(`Found "${searchTerm}" at position ${matchIndex}.`);
        resultElement.classList.remove("error");
      } else {
        resultElement.textContent = alert(`"${searchTerm}" was not found.`);
        resultElement.classList.add("error");
      }
    });
     
// to know the number of times the strind occurs in the document we use match() method
// from the above code at line 102: instead of using matchindex put match =documentText.match(pattern) proces continues.

// test
// const found = pattern.test(documentText);

         
//     // Get the button and result elements
//     const searchButton = document.getElementById("btn");
//     const resultElement = document.getElementById("result");

//     // Function to handle the search
//     searchButton.addEventListener("click", function() {
//       const searchTerm = document.getElementById("search-term").value.trim();

//       // Check if the input field is empty
//       if (searchTerm === "") {
//         resultElement.textContent = "Please enter a search term.";
//         resultElement.classList.add("error");
//         return;
//       }
// // get entire text content of the document
//       const documentText = document.body.innerText;

//       // Create the regular expression for the search term
//       const pattern = new RegExp(searchTerm, "gi"); // 'g' for global and 'i' for case-insensitive

//       // Use the search() method to find the first match of the search term
//       const match = documentText.match(pattern);

//       // Display the result
//       if (match) {
//         resultElement.textContent = `Found "${searchTerm}" ${match.length} times in document.`;
//         resultElement.classList.remove("error");
//       } else {
//         resultElement.textContent = `"${searchTerm}" was not found.`;
//         resultElement.classList.add("error");
//       }
//     });






// test() method: returns true if the regex matches the string
// const regex = /hello/;
// const string = 'hello world';
// console.log(regex.test(string)); // Output: true



// // exec() method: returns an array containing the matched text and groups
// const regex = /hello/;
// const string = 'hello world';
// const match = regex.exec(string);
// console.log(match); // Output: ['hello']

// // match() method: returns an array containing the matched text and groups
// const regex = /hello/g;
// const string = 'hello world hello';
// const match = string.match(regex);
// console.log(match); // Output: ['hello', 'hello']

// // replace() method: replaces the matched text with a new string
// const regex = /hello/g;
// const string = 'hello world hello';
// const newString = string.replace(regex, 'hi');
// console.log(newString); // Output: 'hi world hi'

function replaceText() {
  // Get the content of the paragraph
  const paragraph = document.getElementById('dogs');
  
  // Replace "apple" with "orange" using a regular expression
  paragraph.innerHTML = paragraph.innerHTML.replace(/dogs/g, 'food');
}

// all paragraphs
// function replaceText() {
//   // Get all paragraph elements
//   const paragraphs = document.querySelectorAll('p');
  
//   // Loop through each paragraph and replace the text
//   paragraphs.forEach(paragraph => {
//       paragraph.innerHTML = paragraph.innerHTML.replace(/apples/g, 'oranges');
//   });
// }

// // search() method: returns the index of the first match, or -1 if no match is found
// const regex = /hello/;
// const string = 'hello world';
// const index = string.search(regex);
// console.log(index); // Output: 0


// const regex = /\b(\d{4}) [-.]?(\d{4}) [-.]?(\d{4})\b/g;
// const string = "My credit card number is 1234-5678-9102-3456.";
// const matches = string.matchAll(regex)
// for (const match of matches) {
//   console.log(`Credit Card Number: ${match[0]}, First 4 Digits: ${match[1]}, Second 4 Digits: ${match[2]}, Third 4 Digits: ${match[3]}, Last 4 Digits: ${match[4]}`);
// }





// const sentence = "I have a cat. My cat is big."
// const regex = /cat/g;
// console.log(sentence.match(regex))


// const regex = /cats/g;
// const string = 'I love cats. My cat is cute';
// const match = string.match(regex);
// console.log(match)

// const vowels = /[aeiou]/gi;
// const string = 'education';
// const match = string.match(vowels);
// console.log(match)

// /^[^\s@]+@[^\s@]+\.[^\s@]+$/  can I use this format instead