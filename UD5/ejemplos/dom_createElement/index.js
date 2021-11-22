window.onload=()=>{
    document.getElementById("crea_imagen").addEventListener("click", crear_imagen);
    document.getElementById("crea_li").addEventListener("click", crear_li);

    document.getElementById("borrar_img").addEventListener("click", borrar_img);
    
}

function borrar_li(e){

    document.getElementById("lista").removeChild(e.target);
}

function crear_imagen(){
    let imagen_nueva = document.createElement("img");
    imagen_nueva.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fempresas.blogthinkbig.com%2Fwp-content%2Fuploads%2F2019%2F11%2FImagen3-245003649.jpg%3Fw%3D800&imgrefurl=https%3A%2F%2Fempresas.blogthinkbig.com%2Fcomo-obtener-imagenes-para-textos%2F&tbnid=Gb3Ccmz9XfrryM&vet=12ahUKEwiThoepvqv0AhUB-YUKHZrCD_cQMygAegUIARDKAQ..i&docid=9BxeIMNbtBvcfM&w=800&h=600&q=imagen&ved=2ahUKEwiThoepvqv0AhUB-YUKHZrCD_cQMygAegUIARDKAQ";
    imagen_nueva.style.border = '1px solid black';
    imagen_nueva.addEventListener("click", borrar_img)
    document.body.appendChild(imagen_nueva);
}

function crear_li(){
    let li_nueva = document.createElement("li");
    let texto = document.getElementById("textoli").value;
    document.getElementById("textoli").value = " ";
    li_nueva.innerHTML= texto;
    li_nueva.addEventListener("click",borrar_li);
    document.getElementById("lista").appendChild(li_nueva);
    

}

function borrar_img(event){
    document.body.removeChild(event.target);
    console.log("borra imagen");

}