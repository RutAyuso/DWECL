var num= 2
function izquierda(){
    if(num>1){
    num -=1
    document.getElementById("imagen").src= num+".jpg";
    document.getElementById("numeracion").innerHTML=num+"/3";
    }
    else{
        num = 3
        document.getElementById("imagen").src= num+".jpg";
        document.getElementById("numeracion").innerHTML=num+"/3";
    }
}
function derecha(){
    if(num<3){
    num+=1
    document.getElementById("imagen").src= num+".jpg";
    document.getElementById("numeracion").innerHTML=num+"/3";
    }
    else{
        num = 1
        document.getElementById("imagen").src= num+".jpg";
        document.getElementById("numeracion").innerHTML=num+"/3";
    }

}

function izquierdaDedo(e){
    if(e.isFinal)
        izquierda()
}

function derechaDedo(e){
    if(e.isFinal)
        derecha()
}

function trataOrientacion(e){
    document.getElementById('imagen').style.transform = "rotateX("+e.alpha + "deg) rotateY("+e.beta + "deg)";
}

function inicia(){
document.getElementById("numeracion").innerHTML=num+"/3";
document.getElementById("flechaizquierda").addEventListener("click", izquierda);
document.getElementById("flechaderecha").addEventListener("click", derecha);

var mc = new Hammer(document.getElementById('imagen'));

mc.on("panleft", izquierdaDedo)
mc.on("panright", derechaDedo)

window.addEventListener('deviceorientation',trataOrientacion);
}

window.addEventListener('load',inicia);