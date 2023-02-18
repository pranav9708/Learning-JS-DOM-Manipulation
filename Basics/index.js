// //returns one element with the specified id
// const title=document.getElementById('main-title');
// console.log(title);

// //returns array of element with class name
// const listItems= document.getElementsByClassName('list-item');
// console.log(listItems);

// //returns array of elements in which order they appear
// const li= document.getElementsByTagName('li');
// console.log(li);

// // returns first element thats matches the query
// const container=document.querySelector('.container');
// console.log(container);

// //return nodelist of all elements that matches the query
// const containers=document.querySelectorAll('.container');
// console.log(containers);

//DOM Manipulation


//styling elements 

// const title=document.getElementById('main-title');
// title.style.color="Red";
// //inline style does not work with multiple elements like query selectorall or get element by class
// //need to loop to set style for such elements
// console.log(title);

//creating elements

const ul=document.querySelector('ul');
const li=document.createElement('li');
//adding elements
ul.append(li);

//modifying the text
li.innerText='X-men';

//modifying attributes and classes
li.setAttribute('class','list-item');
li.removeAttribute('class');

console.log(li.getAttribute('class'));

li.classList.add('list-item');

//removeElements

li.remove();


// const firstLi= document.querySelector('.list-item');
// //just the text
// console.log(firstLi.innerText);
// //how it is written in html including elements insid, security issues dont use
// console.log(firstLi.innerHTML);
// //how it is written in html excluding elements inside
// console.log(firstLi.textContent);