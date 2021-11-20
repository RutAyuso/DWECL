window.onload=()=>{
    document.getElementById("boton1").addEventListener("click",nEnlaces);
    document.getElementById("boton2").addEventListener("click",penultimoE);
    document.getElementById('boton3').addEventListener("click",googleE);
    document.getElementById('boton4').addEventListener("click",tercer);

}



function nEnlaces(){
    var e = document.getElementsByTagName("a");
    alert("El numero de enlaces de la página es: "+e.length);
}

function penultimoE(){
    var d = document.getElementsByTagName("a")[1].href;
    alert("La direccion del penultimo enlace es: "+ d)
}

function googleE(){
    var contador = 0;
    let enlaces = document.getElementsByTagName("a");
    for(var i=0; i<enlaces.length; i++) {
      if(enlaces[i].href == "https://www.google.com/" || enlaces[i].href == "https://www.google.com") {
        contador++;
      }
    }
    alert( contador + " enlace/s llevan a  https://www.google.es/")
    
}

function tercer(){
    // Numero de enlaces del tercer párrafo
    p = document.getElementsByTagName("p");
    var enlaces = p[2].getElementsByTagName("a");
    alert( "Nº enlaces del 3er párrafo  " + enlaces.length);
  }


