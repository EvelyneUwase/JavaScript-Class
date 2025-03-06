//  this is like a family tree

let parent = document.getElementById("produce")
console.log(parent.children)
console.log(parent.firstElementChild.textContent)
// you can even change color and style the way you want.
console.log(parent.lastElementChild.textContent)

let child = document.getElementById("text")
console.log(child.parentElement)

let middleSibling = document.getElementById("middle")
console.log(middleSibling.previousElementSibling.textContent)