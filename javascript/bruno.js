var enterButton = document.getElementById("enter");
var input = document.getElementById("campo");
var ul = document.getElementById("ul");
var item = document.getElementsByTagName("li");
function texto(){
    return input.value.length;
}

function criarlista(){
    const tarefa = document.querySelector("#campo").value;
    localStorage.setItem("Tarefa", tarefa);
  
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function clique(){
        li.classList.toggle("done");
        alert("Tarefa: " + tarefa);
    }

    li.addEventListener("click",clique);

 
}

enterButton.addEventListener("click",addlista);
input.addEventListener("keypress", addListAfterKeypress);

function addlista(){
    if (texto() > 0){
        criarlista();
    }
}
    
function addListAfterKeypress(){
    if(texto() > 0 && event.which === 13){
        criarlista();
    }
}

