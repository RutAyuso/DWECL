//Con funcion anonima


//const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

/*
btn.onclick = function() {
    alert("Está saltando el alert");
  //const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  //document.body.style.backgroundColor = rndCol;
}
*/

//Con una funcion con nombre
//PARA BUTTON
const btn = document.querySelector('button');
//PARA P
const p = document.querySelector('p');
//PARA H2
const h = document.querySelector('h2');
//PARA imagen
const img = document.querySelector('img');
//PARA DIV
const div = document.querySelector('div');

function cambiarFondo(e) {//con la e seleccionamos todos los elementos que hayan hecho click
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  //document.body.style.backgroundColor = rndCol;//cambiar color fondo al bodywertt
  //btn.style.backgroundColor = rndCol;// cambiar el color del boton
  //p.style.backgroundColor = rndCol;//cambiar el fondo del párrafo
  e.target.style.backgroundColor = rndCol;
}

btn.onclick = cambiarFondo;//no se ponen los parentesis, solo es una referencia a una funcion.
//btn.addEventListener("click", cambiarFondo);
btn.onfocus = cambiarFondo;
p.onclick = cambiarFondo;
h.onclick = cambiarFondo;
img.onclick = cambiarFondo;
div.onclick = cambiarFondo;

