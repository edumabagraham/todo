var textArea,item,addToList,todoList,todoForm, savedTodos,input, clickedListItem;



// Initializing variables
todoList = document.getElementById('itemList');
todoForm = document.getElementById('list');
savedTodos = JSON.parse(localStorage.getItem('todos')) || []
addToList = document.getElementById('button');

function retrieveFromLocalStorage(){
  for(var i = 0; i < savedTodos.length; i ++){
    item = document.createElement("li");
    item.textContent = savedTodos[i].todo;
    item.isCompleted = savedTodos[i].isCompleted ? true : false;
    if(item.isCompleted) {
      item.style.textDecoration = "line-through";
  }
    todoList.appendChild(item);
  }
}


function appendItemToList(e) {
  e.preventDefault();
  item = document.createElement("li");
  input = document.getElementById("todo").value;
  if(input){                                                        //To prevent saving an empty input
     item.textContent = input;
     item.isCompleted = false;
     todoForm.reset();
     todoList.appendChild(item); 

    //Save to localStorage
    savedTodos.push({todo: item.textContent, isCompleted:false});
    localStorage.setItem('todos', JSON.stringify(savedTodos));
  }
}



// //Crossout item on the list

function markAsComplete(e){
  clickedListItem = e.target;
  if(!clickedListItem.isCompleted){
    clickedListItem.style.textDecoration = 'line-through';
    clickedListItem.isCompleted = true;
  }else{
    clickedListItem.style.textDecoration = 'none';
    clickedListItem.isCompleted = false;
  }

  //Break for duplicates
  for(var i = 0; i < savedTodos.length; i ++){
    if(savedTodos[i].todo === clickedListItem.innerText){
      savedTodos[i].isCompleted = clickedListItem.isCompleted;
      localStorage.setItem('todos', JSON.stringify(savedTodos));
    }
  }
}







todoList.addEventListener('click',markAsComplete,false);
addToList.addEventListener('click', appendItemToList, false);
todoForm.addEventListener('submit', appendItemToList,false);
document.addEventListener('DOMContentLoaded', retrieveFromLocalStorage,false);