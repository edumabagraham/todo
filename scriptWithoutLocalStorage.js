var textArea,item,addToList,todoList,todoForm, savedTodos,input, clickedListItem;

function appendItemToList(e) {
  e.preventDefault();
  item = document.createElement("li");
  item.textContent = document.getElementById("todo").value;
  todoList.appendChild(item);
}

todoList = document.getElementById('itemList');
todoForm = document.getElementById('list');
addList = document.getElementById('button');

todoForm.addEventListener('submit',appendItemToList,false);          //Todo is added when "Enter" is pressed.
addList.addEventListener('click', appendItemToList, false);          //Todo is added when the button is clicked.


//Crossout item on the list

function markAsComplete(e){
  if (e.target.tagName.toLowerCase() === 'li') {
    e.target.style.textDecoration = "line-through";
  }
}

todoList.addEventListener('click', markAsComplete,false);

