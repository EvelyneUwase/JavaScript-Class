// console.log(document.head)

// let car = {
//     name: "benz",
//     color: "grey",
//     model: "latest",
// }
// console.log(car)

// document.getElementById()
// document.getElementsByTagName()
// document.querySelector()
// document.querrySelectorAll()
// document.getElementByClassName()

// by tagName
// const allHeadings = document.getElementsByTagName("h1")
// console.log(allHeadings);
// console.log(allHeadings.length);

// for (let i =0; i < allHeadings.length; i ++){
//     console.log(allHeadings[i])
// }

// // by className
// const otherHeadings = document.getElementsByClassName("var")
// console.log(otherHeadings);

// // by Id
// const firstHeading = document.getElementById("js")
// console.log(firstHeading)


// // document.querySelector()
// // this has principle of css it captures by id or class, tagname

// const firstHeading1 = document.querySelector("h1")
// const firstHeading2 = document.querySelector("#js")
// const firstHeading3 = document.querySelector(".heading")

// // document.querrySelectorAll()
// const allHeading = document.querySelectorAll("h1")
// console.log(allHeading.length);
// console.log(allHeading);
// allHeading[4].className="heading";
// allHeading[4].id="sixth-heading";

// // set attributes/ here you give doc data
// allHeading[4].setAttribute = ("class","heading");
// allHeading[4].setAttribute = ("id","sixth-heading");
// allHeading[4].textContent = "Switch"


let kglStock = {
    beans: 100,
    maize: 300,
    cowpeas: 200,
}
let produce = document.getElementById("produce")