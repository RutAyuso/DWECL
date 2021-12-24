//1
function añadirHijo(nodo){
    node = document.getElementById(nodo);
    p = document.createElement("p");
    p.id = "Hijo";
    p.innerHTML = "HOLA HOLAAA"
    node.appendChild(p);
}
añadirHijo("page");
//2
function añadirAntes(nodoP,nodoS){
    nodePadre = document.getElementById(nodoP);
    nodeSiguiente = document.getElementById(nodoS);
    p = document.createElement("p");
    p.id = "Hijo";
    p.innerHTML = "HOLA HOLAAA";
    nodePadre.insertBefore(p,nodeSiguiente);
}
añadirHijo("header","title");
//3
hijo = document.getElementById("Hijo");
document.getElementById("header").removeChild(hijo);

//4
padre = document.getElementById("content");
nuevo = document.createElement("a");
antiguo = document.getElementById("reemplazar");
nuevo.id = "nuevo_enlace";
nuevo.innerHTML = "Al rico enlace";
nuevo.href="https://www.google.com/";
padre.replaceChild(nuevo,antiguo);

