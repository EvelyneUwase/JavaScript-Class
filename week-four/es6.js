// // console.log(document.head);
// // let car={
//     model:10,
 //     color:"black"
    
// // }
// // console.log(car);
// // // console.log(car.model);

// // document.getElementById()
// // document.getElementsByTagName()
// // document.querySelector()
// document.querySelectorAll()

// document.getElementsByTagName()
const allHeadings =document.getElementsByTagName("h1");
console.log(allHeadings);
console.log(allHeadings.length);

for (i=0;i<allHeadings.length;i++){
    console.log(allHeadings[i])
};

//document.getElementByClassName()
const headings =document.getElementsByClassName("heading");
console.log(headings)
console.log(headings.length)

// //document.getElementById()
// const firstHeading =document.getElementById("first-heading")
// console.log(firstHeading)

// document.querySelector()
const firstHeading = document.querySelector("h1")
const firstHeading1 = document.querySelector("#first-heading")
const firstHeading2 = document.querySelector(".heading")

// // document.querySelectorAll()
const allHeading = document.querySelectorAll("h1")
console.log(allHeading.length);
console.log(allHeading);
allHeading[5].className="heading";
allHeading[5].id="sixth-heading";

//set attribute
allHeading[5].setAttribute=("class","heading");
allHeading[5].setAttribute=("id","sixth-heading");

//text content - allows one to fill in content in an html tag
allHeading[5].textContent="Sixth Heading"

// let kglStock ={
//     beans:100,
//     maize:200,
// }
// let produce= document.getElementById("produce")