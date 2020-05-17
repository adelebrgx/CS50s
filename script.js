const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


var itemCount=0;
var added=0;
var unchecked=0;
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
var ok=true;

function newTodo() {
    if(ok==true || itemCount==0){
    added+=1;
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
    tag.id="check-"+added;
    
    var label = document.createElement("input");
    label.id="text-"+added;
    
    var add=document.createElement("button");
    add.innerHTML="Add Task";
    add.id=added;
    add.addEventListener( 'click', function() {
        var searchedId="text-"+this.id;
        var text=document.getElementById(searchedId);
       
        console.log(text.value);
        
        var val=document.createElement("span");
        val.id="text-"+added;
        val.textContent=text.value;
        
        text.remove();
        var ourLI= document.getElementById("li-"+this.id);
        console.log(ourLI);
        
        var del=document.getElementById("delete-"+this.id);
        
        
        ourLI.insertBefore(val,this);
        this.remove();
        
        ok=true;
        
        
        
    });
   
    
    var br = document.createElement("br");
    var li=document.createElement("li");
    li.id="li-"+added;
    
    var del=document.createElement("button");
    del.innerHTML="Delete Task";
    del.addEventListener( 'click', function() {
        
        console.log(del.parentNode.id);
        
        var checkbox=document.getElementById("check-"+del.parentNode.id.split("-")[1]);
        
        if (!checkbox.checked){
            unchecked-=1;
            uncheckedCountSpan.innerHTML=unchecked;
            console.log("unchecked");}
        del.parentNode.remove();
        itemCount-=1;
        itemCountSpan.innerHTML=itemCount;
        
    });
    del.id="delete-"+added;
    
    var element = document.getElementById("todo-list");
    
    
    li.appendChild(tag);
    li.appendChild(label);
    li.appendChild(add);
    li.appendChild(del);
    li.appendChild(br);
    
    element.appendChild(li);
        ok=false;
    
}}

