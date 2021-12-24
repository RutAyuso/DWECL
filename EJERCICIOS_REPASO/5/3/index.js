window.onload = ()=>{
    div1=document.getElementById("uno");
    div2=document.getElementById("dos");
    div3=document.getElementById("tres");
    div4=document.getElementById("cuatro");


    div1.addEventListener("click", texto);
    div2.addEventListener("click", texto);
    div3.addEventListener("click", texto);
    div4.addEventListener("click", texto);

}
contador = 0;
function texto(){
    
    if(contador % 2 == 0 || contador == 0){
        this.innerHTML = "<center><p>MIRA QUE BONITO TEXTO JAJA</p></center>";
    }
    else{
        this.innerHTML = "";
    }
    contador +=1;
}