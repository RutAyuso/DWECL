window.addEventListener("load", primera);

function primera() {
    minimalista();
    document.getElementById("con_color").addEventListener("click", con_color);
    document.getElementById("minimalista").addEventListener("click", minimalista);
}

function con_color() {
    document.body.style.backgroundColor = "#EACB94";
    document.getElementById("con_color").style.fontFamily="Arial";
    document.getElementById("con_color").style.fontWeight="bold";
    document.getElementById("con_color").style.textDecoration="none";
    document.getElementById("minimalista").style.fontFamily="Arial";
    document.getElementById("minimalista").style.fontWeight="bold";
    document.getElementById("minimalista").style.textDecoration="none";
    document.getElementById("title").style.fontFamily="Arial";
    document.getElementById("title").style.fontWeight="Bold";
    document.getElementById("title").style.color="#0D1745";
    document.getElementById("p5").style.backgroundColor = "yellow";
    document.getElementById("p5").style.border = "1px solid";
    document.getElementById("marco").style.backgroundColor = "lightblue";
    document.getElementById("marco").style.border = "1px solid";
    document.getElementById("marco").style.color = "#0D1745";
    document.getElementById("p4").style.visibility = "visible";
    document.getElementById("p4").style.fontWeight = "bold";
    document.getElementById("cont").style.borderLeft = "100px solid blue";
    document.getElementById("cont").style.padding = "2px";


}

function minimalista() {
    document.body.style.backgroundColor = "";
    document.getElementById("p5").style.backgroundColor = "";
    document.getElementById("p5").style.border = "";
    document.getElementById("marco").style.backgroundColor = "";
    document.getElementById("marco").style.border = "";
    document.getElementById("marco").style.color = "";
    document.getElementById("p4").style.visibility = "hidden";
    document.getElementById("cont").style.borderLeft = "";
    document.getElementById("cont").style.padding = "";

}