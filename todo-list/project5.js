//ToDoList/ Master

// Key Concepts for Project

// document.getElementById()
// addEventListener()
// e.target
// appendChild();
// createElement();
// parentElement();
// remove()
// classList.add();

//variables

const addTask=document.getElementById('add-task');
const taskContainer=document.getElementById('task-container');
const inputTask=document.getElementById('input-task');

//eventListener for add button

addTask.addEventListener('click',function(){
    let task=document.createElement('div');
    task.classList.add('task');

    let li=document.createElement('li');
    li.innerText=`${inputTask.value}`;
    task.appendChild(li);

    let checkButton=document.createElement('button');
    checkButton.innerHTML=`<i class="fa-solid fa-check"></li>`
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton=document.createElement('button');
    deleteButton.innerHTML=`<i class="fa-solid fa-trash"></li>`
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value===""){
        alert("please Enter a task");
    }else{
        taskContainer.appendChild(task);
    }
    inputTask.value = "";

    let isChecked = false;
    checkButton.addEventListener("click", function(){
        if(!isChecked){
            checkButton.parentElement.style.textDecoration="line-through";
            isChecked=true;
        }else{
            checkButton.parentElement.style.textDecoration="none";
            isChecked=false;
        }
    })

    deleteButton.addEventListener("click", function(e){
        let target=e.target;
        //parent->li, parent of li->task
        target.parentElement.parentElement.remove();
    })

})