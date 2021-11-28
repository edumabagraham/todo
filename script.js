var textArea,item,todoItem,itemText,addLink,element;

//Focus on textarea after the page has loaded
function setUp(){
    textArea = document.getElementById("todo");
    textArea.focus();
}


function appendItemToList(e) {
  e.preventDefault();
  item = document.createElement("li");
  todoItem = document.getElementById("todo").value; // Get todo item entered
  itemText = document.createTextNode(todoItem);
  item.appendChild(itemText);
  element.appendChild(item);
}

element = document.getElementById('itemList');
addLink = document.getElementById('button');
addLink.addEventListener('click', appendItemToList, false);
window.addEventListener('load', setUp, false);


//Remove item from the list
/* The approah i know so far will fail
because the li element when appended do 
not have individual ids that will help me
them*/




