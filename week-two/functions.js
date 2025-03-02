
// suntax
// function name(){
//     return
// }

// name() to evoke or call a function to perform a given task.


// unchangeable/ reusuable /muteable 
// function add(a,b) {
//     sum = a + b
//     return sum
// }
// console.log (add(a+b)) 
// // console.log prints out resuts

// // how to Square a number
// const square = function(a){
//     let square = a*a;
//     return square
// }

// arrow function, this is rarely used but brief to execute task
// const  square = (a) => a*a;
// let areaOfTriangle = (base, height) => {
//     let area = 0.5 * base * height;
//     return area
// }
// console.log("The area of a triangle is:" + areaOfTriangle(10,20))

// using function to calculate total
function calculateTotalPrice (product, pricePerKg, quantity){
    let totalPrice = pricePerKg + quantity;
    console.log("the totla price is:" + quantity, "kg of" +product + "is" +totalPrice + "Ugx.");

}
calculateTotalPrice("Beans", 3000, 4)
calculateTotalPrice("Gnuts", 2000, 3)
calculateTotalPrice("Maize", 7000, 6)
calculateTotalPrice("cowpeas", 6000, 5)
calculateTotalPrice("SoyBeans", 4000, 2)