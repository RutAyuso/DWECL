

var fotos=["1.jpg","2.jpg","3.jpg"]

document.getElementById("derecha").addEventListener("click",function(){
    var fotoActual=document.getElementById("img").getAttribute("src");
    var cont=0;
    for(i=0;i<fotos.length-1;i++){
        cont++;
        if(fotos[i]==fotoActual){
            document.getElementById("img").setAttribute("src",fotos[cont++] )
            
        }
    }
    
})
document.getElementById("izquierda").addEventListener("click",function(){
    var fotoActual=document.getElementById("img").getAttribute("src");
    var cont=fotos.length;
    for(i=fotos.length;i>0;i--){
        cont--;
        if(fotos[i]==fotoActual){
            document.getElementById("img").setAttribute("src",fotos[cont--] );
        }
    }
})