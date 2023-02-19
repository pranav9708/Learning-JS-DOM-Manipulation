//Modal/Beginner

// Key Concepts for Project

// document.getElementById()
// addEventListener()
// e.target
// css styling through JS
// css animation

//variables
let openBtn= document.getElementById('open-btn');
let modalContainer= document.getElementById('modal-container');
let closeBtn= document.getElementById('close-btn');

//Event Listeners

openBtn.addEventListener('click',function(){
    modalContainer.style.display='block';
});

closeBtn.addEventListener('click',function(){
    modalContainer.style.display='none';
});

window.addEventListener('click',function(e){
    if(e.target == modalContainer){
        modalContainer.style.display='none';
    }
})