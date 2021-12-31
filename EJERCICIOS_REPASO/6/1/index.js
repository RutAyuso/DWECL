window.onload = ()=>{
    div1=document.getElementById("uno");
    div2=document.getElementById("dos");
    div3=document.getElementById("tres");
    div4=document.getElementById("cuatro");
    div1.addEventListener("mouseover", texto);
    div2.addEventListener("mouseover", texto);
    div3.addEventListener("mouseover", texto);
    div4.addEventListener("mouseover", texto);

}


/*1. Diseña una web que haciendo uso de AJAX haga una petición al servidor. Debes 
hacer que se muestre un gif animado mientras se obtiene la respuesta a la petición. 
(Para simular un largo tiempo de procesamiento haz uso de la función sleep en 
php)*/

function texto(e) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       e.target.innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "texto.txt", true);
    xhttp.send();
  }