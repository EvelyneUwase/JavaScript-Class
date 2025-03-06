console.log("I am connected")
// function to create an element in the DOM
function create(){
    const button = document.createElement("button")
    console.log("button clicked")
    // const paragraph = document.createElement("p")
    
}

const paragraph = document.createElement("P")
    paragraph.innerHTML = "Button clicked"
    document.body.appendChild(paragraph)
    console.log("What is your name?")

// // function to Read an element in the DOM
function read(){
    const readQn =document.getElementById("readQn")
    console.log("file read")
}


// // function to Update an element in the DOM
// function update(){
//     const updateQn = document.getElementById("updateQn")
// }


// // function to DElete an element in the DOM
// function clear(){
//     const deleteQn = document.getElementById("deleteQn")
// }
