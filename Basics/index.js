// DOM Manipulation

// Event Listeners

//element.addEventListener("click",function);

const buttonTwo=document.querySelector('.btn-2');

function alertBtn(){
    alert('I also Love JS')
}

buttonTwo.addEventListener("click",alertBtn);


//MouseOver event

const newBackground=document.querySelector('.box-3');
function changeBgColor(){
    newBackground.style.backgroundColor = 'blue';
}

newBackground.addEventListener("mouseover",changeBgColor);

//addEventListener is most commonly used because we can add as many events as we want whereas in onevent method only 1 is possible
