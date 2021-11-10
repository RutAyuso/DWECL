numImagen = 1;
totalImagenes = 3;
document.getElementById("slider").style.backgroundImage="url(num + '.jpg')";

window.onload = ()=>{

    cambiaImagen(2);
    var mc = new Hammer(document.getElementById('miimagen'));
    //listen to events...
    mc.on('panleft',pasarIzqDedo);
    mc.on('panright',pasarDchaDedo);

    window.addEventListener('deviceorientation', trataOrientacion);
    window.addEventListener('devicemotion', trataAceleracion);
    document.getElementById("arrow_left").addEventListener("click", pasarIzq);
    document.getElementById("arrow_right").addEventListener("click", pasarDcha);
}

function pasarIzqDedo(e){
    if(e.isFinal)
        pasarIzq();
}

function pasarIzq(){
    if(numImagen >= 1){
        numImagen--;
        cambiaImagen(numImagen);
    }
}

function pasarDchaDedo(e){
    if(e.isFinal)
        pasarDcha();
}

function pasarDcha(){
    if (numImagen < totalImagenes){
        numImagen++;
        cambiaImagen(numImagen)
    }
}

function cambiaImagen(num){
    document.getElementById("slider").style.backgroundImage="url("+ num + "'.jpg')";
}

function trataOrientacion(e){
    document.getElementById('miimagen').style.transform = "rotateX(" + e.alpha + "deg) rotateY(" + e.beta + "deg)";
}

function trataAceleracion(e){
    if(e.aceleration[0]!=0){
        pasarDcha();
    }
    else if(e.acceleration[2]!=0){
        pasarIzq();
    }
}
