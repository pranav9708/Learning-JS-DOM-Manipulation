//DOM Manipulation

// traverse the DOM

let ul=document.querySelector('ul');

//Parent Node Traversal

// console.log(ul.parentNode);
// console.log(ul.parentElement.parentElement);

// const html=document.documentElement;
// console.log(html.parentNode);
// //below returns null, above returns document node
// console.log(html.parentElement);

//Child Node Traversal

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// ul.childNodes[1].style.backgroundColor = "blue";
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

//sibling Node Traversal

console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);