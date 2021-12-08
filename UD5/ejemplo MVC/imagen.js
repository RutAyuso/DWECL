/*
var divElement = document.querySelectorAll('img');
var 
for (let i = 0; i<divElement.length; i++){
    var contador1 = 0;
    divElement[i].onclick = function() {
    contador1++;
    console.log("La imagen ha sido pulsada "+ contador1 + " veces");
}
}*/

window.onload=()=>{
    document.getElementById("gato1").addEventListener("click",Gato.clicar);
    document.getElementById("gato2").addEventListener("click",Gato.clicar);
}
var imgs = document.querySelectorAll('img');

class Gato{
    constructor(nombre, clicksN){
        this.nombre = nombre;
        this.clicks = 0;
        this.imagen = imagen;
    }

    clicar(){
        this.clicks += 1;
        console.log("El "+this.nombre+ " tiene " + this.clicks + " clicks");
    }
}

