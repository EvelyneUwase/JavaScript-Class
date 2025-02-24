/*
Assignment Operators:
equal
less than or equal
Greater than or equal
decrment (--)

*/

let pricePerKg = 3000
let quantity = 10
let totalCost = pricePerKg * quantity;

console.log("The price of 10kg of benas is: "+ totalCost)
// or
// console.log(`The price of beans is: ${totalcost}$`)

// discount
let discount = 5000;
let discountedPrice = totalCost - discount;
console.log(discountedPrice)

// coperison
let buyerMoney = 5000;
let priceOfMaizePerKg = 6000;
console.log(buyerMoney !== priceOfMaizePerKg)

// logical operators
let stockIsAvailabe = true;
let buyerIsLegit = false;
console.log(stockIsAvailabe && buyerIsLegit)

// Concatination
let buyerName = "Christine"
let productName = "Beans"
let receiptMessage = "Thank you !!" + "You have just purchased" + quantity+ "kgs of" +productName;
console.log(receiptMessage)

// Assignment Operators
let stock = 100;
let sales = 20;
stock = (stock - 20)
stock -=sales;
console.log(stock)

let salesRevenue = 0;
salesRevenue = salesRevenue + totalCost
console.log(salesRevenue)
// or
consol

