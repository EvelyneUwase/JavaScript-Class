
//Event Handler
let btn = document.getElementById("btn")
btn.onclick = function (){
    console.log("button clicked")
}
// syntax is element.onclick = function

btn.onclick = function (){
    console.log("button over Written")
}

//Event Listener
let btn = document.getElementById("btn")
btn.addEventListener("Successfully Clicked", function (){
    console.log("button clicked")
})

btn.addEventListener(alert("successful") function(){
    console.log("seccond event Listener")
})
// you can put any word on the successfully clicked.

// sytax is
// addEventListener("Done", function(){
// })


let element = documrnt.getElementById("submit")

// second format
function sayHello(){
    console.log("hello")
}
btn.addEventListener("click", sayHello)