//Focus on textarea after the page has loaded

function setUp(){
    var textArea = document.getElementById("todo");
    textArea.focus();
}

window.addEventListener('load', setUp, false);


//Append to list
var itemList 