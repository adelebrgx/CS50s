const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

var item=0;
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
    item+=1;
    var tag = document.createElement("input");
    tag.type="checkbox";
    //tag.setAttribute(name, item);
    
    var label = document.createElement("input");
    
    var add=document.createElement("button");
    //add.type="button";
    add.innerHTML="Add";
    //label.setAttribute(for, item);
    //tag.appendChild(label);
    
    var br = document.createElement("br");
    var li=document.createElement("li");
    
    var element = document.getElementById("todo-list");
    
    li.appendChild(tag);
    li.appendChild(label);
    li.appendChild(add);
    li.appendChild(br);
    
    element.appendChild(li);
}