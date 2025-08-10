function newItem(){
    let item=document.getElementById("task");
    let aitem=item.value.trim(" ");
    if(aitem === "" ) return;
    let li =document.createElement("li")
    li.textContent=aitem;
    let delelbut= document.createElement("button");
    delelbut.textContent=" X ";

    delelbut.onclick=function(){
        li.remove();
    }

    li.onclick=function () {
        li.classList.toggle('completed')
        
    }

    li.appendChild(delelbut)
    document.getElementById("listofitem").appendChild(li)
    task.value=" ";
}