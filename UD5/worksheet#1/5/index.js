var nueva_lista=document.createElement("ul");
document.body.appendChild(nueva_lista);

document.getElementById("enviar").addEventListener("click",function(){

    var liañadido = document.createElement("li");
    var texto = document.createTextNode(document.getElementById("input").value);
    liañadido.appendChild(texto);
    document.getElementsByTagName("ul")[0].appendChild(liañadido);
    });

document.getElementById("añadir").addEventListener("click",function(){
    var input=document.createElement("input");
    input.type="file";
    input.id="input";
    document.body.appendChild(input);
});