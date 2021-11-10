window.addEventListener("load", main);
var letra=11;

function main() {
    document.getElementById("aumentar").addEventListener("click", aumentar_tamaño);
    document.getElementById("tamañoDefecto").addEventListener("click", tamañoPorDefecto);
    document.getElementById("justificar").addEventListener("click", justificar);
    document.getElementById("alineaIzq").addEventListener("click", alinearIzda);    
    document.body.style.backgroundColor = "#A3E4D7";    

}
function justificar(){
    document.body.style.textAlign = "justify";
    document.getElementById("justificar").style.backgroundColor="#D1F2EB";
    
}
function alinearIzda(){
    document.body.style.textAlign = "left";
    document.getElementById("alineaIzq").style.backgroundColor="#D1F2EB";
}
function aumentar_tamaño(){
    tamaño++;
    document.body.style.fontSize = tamaño + "px";
    document.getElementById("aumentar").style.backgroundColor="#D1F2EB";
}
function tamañoPorDefecto(){
    tamaño = 11;
    document.body.style.fontSize = tamaño + "px";
    document.getElementById("tamañoDefecto").style.backgroundColor="#D1F2EB";
}
