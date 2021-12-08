class interfazComoRectangulo{
    constructor(bola, svg){
        this.bola = bola;
        this.tag = document.createElementNS("http://www.w3.org/2000/svg","rectangle");
        this.tagCircle.setAttribute("cx", bola.x);
        this.tagCircle.setAttribute("cy", bola.y);
        this.tagCircle.setAttribute("width", bola.radio);
        this.tagCircle.setAttribute("height", bola.radio);
        this.tagCircle.setAttribute("fill", "red");
        svg.appendChild(this.tag);
        
    }
    dibuja(){
        this.tagCircle.setAttribute("x", this.bola.x);
        this.tagCircle.setAttribute("y", this.bola.y);
    }
}

class interfazTexto{
    constructor(bola, svg){
        this.bola = bola;
        this.tag = document.createElementNS("http://www.w3.org/2000/svg","text");
        this.tagCircle.setAttribute("x", bola.x);
        this.tagCircle.setAttribute("y", bola.y);
        this.tagCircle.setAttribute("fill", "blue");
        
        svg.appendChild(this.tag);

    }

    dibuja(){
        this.tagCircle.setAttribute("cx", this.bola.x);
        this.tagCircle.setAttribute("cy", this.bola.y);
    }
}