//3
/*
setTimeout(function(){
    alert("Han pasado 60 segundos");},60000);
*/

//solucion

setTimeout(muestraseg,1000);
var segundos = 60;

function muestraseg(){
document.write(segundos--);
document.write("<br>");

if (segundos>=0)
    setTimeout(muestraseg,1000);

}




