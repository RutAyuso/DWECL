window.onload = ()=>{
    divGif=document.getElementById("div");
    divGif.addEventListener("click",cargaGif); 
}


/*Se desea ahora tener 4 divs cuadrados ocupando toda la pantalla. Al pasar sobre 
ellos con el ratón, debes hacer una petición AJAX al servidor. En dicha petición, 
obtendrás un mensaje diferente según el div que genera el evento, y se mostrará 
como si  de un toolTip se tratase*/

function cargaGif(e) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          document.getElementById("carga").style.visibility = "visible";
          setTimeout(()=>{
            e.target.innerHTML = this.responseText;
            document.getElementById("carga").style.visibility = "hidden";
          },5000)
     
      }
    };
    xhttp.open("GET", "texto.php", true);
    xhttp.send();
  }