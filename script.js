var textArea,item,addList,todoList,todoForm;

function appendItemToList(e) {
  e.preventDefault();
  item = document.createElement("li");
  item.textContent = document.getElementById("todo").value;
  todoList.appendChild(item);
}

todoList = document.getElementById('itemList');
todoForm = document.getElementById('list');
addList = document.getElementById('button');

todoForm.addEventListener('submit',appendItemToList,false);
addList.addEventListener('click', appendItemToList, false);



//Remove item from the list
/* The approah i know so far will fail
because the li element when appended do 
not have individual ids that will help me
them*/




