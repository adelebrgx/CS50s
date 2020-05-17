const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  var tag = document.createElement("li");
   var text = document.createTextNode("Go to the gym");
   tag.appendChild(text);
   var element = document.getElementById("todo-list");
   element.appendChild(tag);
}
