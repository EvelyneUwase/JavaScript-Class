if (4 > 3);
// The condition is true

if (4 >= 3);
//The condition is true 

if (4 < 3);
// The condition is false

if (4 <= 3);
// the condition is false

if (4 == 4);
// The condition is true

if (4 === 4);
// The condition is true

if (4 != 4);
// the condition is false

if (4 !== 4);
// The condition is False

if (4 != '4');
// the condition is false

if (4 == '4');
// condition is true

if (4 === '4');
// the condition is false

console.log(4 > 3, 4 >= 3, 4 < 3, 4 <= 3, 4 == 4, 4 === 4, 4 !== 4, 4 != '4', 4 == '4', 4 === '4')

// slide 3
// variables

let myAge = 250;
let yourAge = 25;

/*Statement
You are younger than me
I am your elder
 */


// 21st assignment  slide 12.

// Prompt user to enter base and height
// const base = parseFloat(prompt("Enter base:"));
// const height = parseFloat(prompt("Enter height:"));

// // Calculate area
// const area = 0.5 * base * height;

// // Print result
// alert("The area of the triangle is " + area);

// Note: this is connected from html file to display in browser.

// const sidea = parseFlloat(prompt("Enter sidea"));
// const sideb = parseFloat(prompt("Enter sideb"));
// const sidec = parseFloat(prompt("Enter sidec"));

// const perimeter = a +b + c;
// alert("the perimeter is:" + perimeter)

//  slide 13
// const length = parseFloat(prompt("Enter length"));
// const width = parseFloat(prompt("Enter width"));

// // calculate
// const area = length * width;
// const perimeter = 2 * (length + width);

// // to display or print results
// alert("The answer is:" + area);
// // alert("perimeter is:" + perimeter);

// get radius
// const area1 = parseFloat(prompt("Enter area"));
// const circumference1 = parseFloat(prompt("Enter circumference"));

// // cacheslculate
// const area = pi * r * r;
// const circumference = c = 2 * pi * r;

// // print
// alert("Area of a circle is :" + area);
// alert("Circumference of the circle is:" + circumference);

// Calculate the slope
// Define the equation coefficients
// const m = 2; // slope
// const b = -2; // y-intercept

// // Calculate the x-intercept
// const xIntercept = -b / m;

// // Display the results
// console.log(`Slope (m): ${m}`);
// console.log(`Y-Intercept: (${0}, ${b})`);
// console.log(`X-Intercept: (${xIntercept}, ${0})`);
// // 


// slope
const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;

const slope = (y2 - y1) / (x2 - x1);

console.log("The slope is:", slope);

/* compare
1 The slope from the equation y = 2x - 2 is m = 2.
2. The slope calculated between the points (2, 2) and (6, 10) is also m = 2.

They are equal!

This makes sense because the points (2, 2) and (6, 10) actually lie on the line defined by the equation y = 2x - 2*/


// the value of y (y = x2 + 6x + 9)
// function calculateY(x) {
//   return x ** 2 + 6 * x + 9;
// }
// // note x**2 means x power 2 or square 2
// console.log(calculateY(0)); // Output: 9
// console.log(calculateY(1)); // Output: 16
// console.log(calculateY(2)); // Output: 25
// console.log(calculateY(-1)); // Output: 4
// console.log(calculateY(-2)); // Output: 1
// console.log(calculateY(-3)); // Output: 0


// // slide 14
// const hours = parseFloat(prompt("Enter hours:"));
// const ratePerHour = parseFloat(prompt("Enter rate per hour:"));

// // calculate
// const weeklyEarning = hours * ratePerHour;

// alert("Weekly earning" + weeklyEarning);


// const lone = prompt("What is your name?");
// if (lone.length > 7) {
//   alert("Your name is long");
// } else {
//   alert("Your name is short");
// }



let firstName = 'Doctors';
let lastName = 'Strange';

// last number
if (firstName.length > lastName.length) {
  console.log(`Your first name, ${firstName}, is longer than your family name, ${lastName}.`);
} else if (firstName.length < lastName.length) {
  console.log(`Your first name, ${firstName}, is shorter than your family name, ${lastName}.`);
} else {
  console.log(`Your first name, ${firstName}, and family name, ${lastName}, are the same length.`);
}