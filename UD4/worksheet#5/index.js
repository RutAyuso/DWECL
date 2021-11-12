function validarMayuscula(e){
    var regex=  /[A-ZÑ]+$/;
    if(regex.test(e) == false){
        alert("El parametro debe constar de al menos un caracter en MAYUSCULA");
        return false;
    }
    return true;    
}

function validarCaracteresEspeciales(e){
    var regex=  /[!@#$%^&]+*/;
    if(regex.test(e) == false){
        alert("El parametro debe constar de al menos uno de estos caracteres: !@#$%^&");
        return false;
    }
    alert("El parametro reune las caracteristicas necesarias")
    return true;    
}

function validarCorreo(e){
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(regex.test(e)==false){
          return true;
          alert("El email es válido");
        }
        else{
          alert("El email no es valido");
          return false;
        }
      }

function validarTarjetaCredito(e){


}

function validarLongitud(e){
    var regex=  /[\w]{8,}/;
    if(regex.test(e) == false){
        alert("El parametro debe constar de al menos 8 caracteres ");
        return false;
    }
    alert("La longitud es correcta");
    return true;
}

function validarNumero(e){
    var regex=  /[\d]{1,}/;
    if(regex.test(e) == false){
        alert("El parametro debe constar de al menos un dígito");
        return false;
    }
    alert("El parametro es correcto");
    return true;
}
