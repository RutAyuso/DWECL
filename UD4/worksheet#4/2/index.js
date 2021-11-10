window.addEventListener("load", primera);

function primera() {
    document.getElementById("con_color").addEventListener("click", ponerCss);
    document.getElementById("minimalista").addEventListener("click", quitarCss);
}
function ponerCss(){
    var link = document.head.getElementsByTagName("link")[0];
    link.href = "con_color.css";
}
function quitarCss(){
    var link = document.head.getElementsByTagName("link")[0];
    link.href = "minimalista.css";

}