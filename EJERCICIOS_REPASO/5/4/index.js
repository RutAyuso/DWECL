window.onload = () =>{
    padre = document.getElementById("padre");
    comoHTML(padre);
    
}

function comoHTML(padre){
    if(padre.hasChildNodes()){
        hijos = padre.childNodes;
        for(hijo of hijos){
            console.log(hijo.nodeName, hijo.innerHTML);
        }
    }
}