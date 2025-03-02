// if you want to access a person we use dot to get element we want


let store = {
    name: "Karibu Grocery",
    location: "Madi",
    branches: "Maganjo",
    stock: {
        beans: 1000,
        maize: 400,
        soyBeans:200,
    },
    saleProduce: function (){
        console.log("sold successfully")

    }
}
store.saleProduce()



// // Method 2 performing same task
// let person2 = {
//     name: "Bills",
//     color: "chocolate",
//     age: 27,
//     speak(){
//         console.log("Hello, I am Peter Bills")
//     }

// }

let calculator = {
    add: function (a,b){
        return a + b
    },
    subtract:function(a,b){
        return a - b
    },
    multiply: function(a,b){
        return a * b
    }

}
console.log(calculator.add (5,4))
console.log(calculator.add (6,8))
console.log(calculator.subtract(10,4))
console.log(calculator.multiply (6,6))