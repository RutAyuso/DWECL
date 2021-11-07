function saltaAlert(e){
    alert(e.target.tagName);
    /*
    e.stopPropagation();
    alert(this);*/
}

document.getElementById("formulario").onclick = saltaAlert;
document.getElementById("div").onclick = saltaAlert;
document.getElementById("parrafo").onclick = saltaAlert;
