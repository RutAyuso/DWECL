document.getElementById("entrada").addEventListener("click",function(){
    var liañadido = document.createElement("li");
    var textoli = document.createTextNode("nueva entrada");
    
    liañadido.appendChild(textoli);
    document.getElementsByTagName("ul")[0].appendChild(liañadido);})