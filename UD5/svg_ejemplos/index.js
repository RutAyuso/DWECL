var svgNS = "http://www.w3.org/2000/svg";

window.onload = () =>{
    document.getElementById("btn").addEventListener("click",cambiarColor);     
        
}

function cambiarColor(){

    for(i=0;i<10;i++){
            
        this.tagCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.tagCircle.setAttribute("fill", "red");
        this.tagCircle.setAttribute("cx", i*(1.01));
        this.tagCircle.setAttribute("cy", i*(1.2));
        this.tagCircle.setAttribute("r", i*10);
        //this.tagCircle.setAttribute("id", "bolita");
        document.getElementById("panelPrincipal").appendChild(this.tagCircle);

    }
}