//Focus on textarea after the page has loaded

function setUp(){
    var textArea = document.getElementById("todo");
    textArea.focus();
}

window.addEventListener('load', setUp, false);


//Append to list
/* This approach is failing mainly because 
when the enter key is pressed, the value
of the input is set to an empty string 
after the keyup event*/ 
var element;
function appendItemToList(e) {

  var item = document.createElement("li");
  var todoItem = document.getElementById("todo").value; // Get todo item entered
  var itemText = document.createTextNode(todoItem);
  var itemListPosition = document.getElementsByTagName("ul")[0]; // Get item list
  
if(e.keyCode == 13){

      item.appendChild(itemText);
    itemListPosition.appendChild(item);

    }
 
}

element = document.getElementById('todo');
element.addEventListener('keyup', appendItemToList, false);


//Remove item from the list
/* The approah i know so far will fail
because the li element when appended do 
not have individual ids that will help me
them*/


