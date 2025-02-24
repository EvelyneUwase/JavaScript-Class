// if (condition){
//     // this part of code runs if condition is true//
// };

let number = 6;
if (number > 0){
    console.log(`${number} is a positive integer`)
}

// string
// let weather = "raining";
// if (weather = "raining"){
//     console.log("Remember to carry an umberella")
// }

// boolean
let isRaining = true;
if (isRaining){
    console.log("Remember to carry an umbrella")
}

// using else
let numberTwo = 6;
if (numberTwo > 0){
    console.log(`${numberTwo} is a positive integer`)
} else {
    console.log(`${numberTwo} is a negative integer`)
}


let isRaining2 = true;
if (isRaining2){
    console.log("Remember to carry an umbrella")
} else {
    console.log("You don't need an umbrella")
}


//  else if
let weather = "sunny";
if (weatherNow === "rainny"){
    console.log("you need an umbrella")
} else if(weatherNow === "cloudy"){
    console.log("you might need an umbrella")
} else if (weatherNow === "Sunny"){
    console.log("Do your thing")
} else {
    console.log("no need of an umbrella");
}
