window.onload = () =>{
    padre = document.getElementById("padre");
    borrarNodo(padre);
    
}

function borrarNodo(padre){
    if(padre.hasChildNodes()){
        hijos = padre.childNodes;
        for(hijo of hijos){
            padre.removeChild(hijo);
            
        }
        console.log(hijo);
    }
}