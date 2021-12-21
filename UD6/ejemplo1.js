window.onload=()=>{
    document.getElementById("nombre").onkeyup = comprobarUsuario;
}

    function peticionAjax(str) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                color(this.responseText);
                 var respuesta = JSON.parse(this.responseText);
            }
        };
        xhttp.open("GET", "ejemplo1.php?str"+str, true);
        xhttp.send();
    }

    function comprobarUsuario(){
        var nombre = document.getElementById("nombre");
        if(nombre.value === "usuarioOcupado"){
            peticionAjax(nombre.value);
            mostrar();
        }
        else{
            document.getElementById("nombre").style.backgroundColor="green";
        }

    }

    function color(valor){
        document.getElementById("nombre").style.backgroundColor="red";
    }

    function mostrar(respuesta){
        document.createElement('p');
        
    }