/* Loops
for loop
while loop
do while loop 
for of loop = arrays
for in loop  =objects

look for a graph that represents loop 
*/

 // syntax 
 // for (initialization, condtion,increment/decrement) {
 //  any code runs here
// };


// for (let number = 0; number <= 100; number++){
//      console.log(number)
// }

// for (let number = 0; number <= 100; number++){
//     console.log(number)
// }

// // muliplication table
// for (let number = 0; number <= 8; number++){
//     console.log(`number ${number} * ${number} = ${number * number}`);
// }

// for numbers
let  numbers = [1, 2, 3, 4, 5, 6,]
let sum = 0;
for (let i = 0; i < numbers.length; i ++ ){
    sum = sum + numbers[i]
// [i] represents the index of different values
}
console.log(sum)