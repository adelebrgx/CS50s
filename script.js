const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


var itemCount=0;
var unchecked=0;
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
    itemCount+=1;
    itemCountSpan.innerHTML=itemCount;
    unchecked+=1;
    uncheckedCountSpan.innerHTML=unchecked;
    
    var tag = document.createElement("input");
    tag.type="checkbox";
    
    tag.addEventListener( 'change', function() {
    if(this.checked) {
        unchecked-=1;
        uncheckedCountSpan.innerHTML=unchecked;
    } else {
        unchecked+=1;
        uncheckedCountSpan.innerHTML=unchecked;
    }
    });
    
    var label = document.createElement("input");
    
    var add=document.createElement("button");
    add.innerHTML="Add Task";
    add.addEventListener( 'click', function() {
        console.log("been clicked add")
    });
   
    
    var br = document.createElement("br");
    var li=document.createElement("li");
    li.id=itemCount;
    
    var del=document.createElement("button");
    del.innerHTML="Delete Task";
    del.addEventListener( 'click', function() {
        
        console.log(del.parentNode.id);
        del.parentNode.remove();
        itemCount-=1;
        itemCountSpan.innerHTML=itemCount;
        
    });
    
    var element = document.getElementById("todo-list");
    
    
    li.appendChild(tag);
    li.appendChild(label);
    li.appendChild(add);
    li.appendChild(del);
    li.appendChild(br);
    
    element.appendChild(li);
    
}

