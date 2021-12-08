class Bola{
    constructor(radio, posicionX, posicionY, velocidadX, velocidadY) {
        this.x = posicionX;
        this.y = posicionY;
        this.radio = radio;
        this.vX = velocidadX;
        this.vY = velocidadY;  
    }

    mueve(ancho_contenedor, alto_contenedor)
    {
        this.x += this.vX;
        this.y += this.vY;

        if((this.x-this.radio)<0 || (this.x+ this.radio)>ancho_contenedor)
            this.vX *=-1;
        if((this.y-this.radio)<0  || (this.y+ this.radio)>alto_contenedor)
            this.vY *=-1;
}
}

class interfazBola{
    constructor(bola, svg, color){
        this.bola = bola;
        this.tag = document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.tag.setAttribute("fill", color);
        this.tag.setAttribute("cx", bola.x);
        this.tag.setAttribute("cy", bola.y);
        this.tag.setAttribute("r", bola.radio);
        svg.appendChild(this.tag);

    }

    dibuja(){
        this.tag.setAttribute("cx", this.bola.x);
        this.tag.setAttribute("cy", this.bola.y);
    }
}

class Barra{
    constructor(anchoB, altoB, posX, posY){

        this.ancho = anchoB;
        this.alto = altoB;
        this.x = posX;
        this.y = posY;
        this.velocidad = 10;
    }
    mueve(alto_cont){
        this.y += this.velocidad;

        if((this.y < 0) || (this.y + this.alto)>alto_cont){
            this.velocidad *= -1;
        }

    }
}
class interfazBarra{
    constructor(barra, svg, color){
        this.barra = barra;
        this.tag = document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.tag.setAttribute("fill", color);
        this.tag.setAttribute("x", barra.x);
        this.tag.setAttribute("y", barra.y);
        this.tag.setAttribute("width", barra.ancho);
        this.tag.setAttribute("height", barra.alto);
        svg.appendChild(this.tag);

    }

    dibuja(){
        this.tag.setAttribute("x", this.barra.x);
        this.tag.setAttribute("y", this.barra.y);
    }
}

export{Bola,interfazBola, Barra, interfazBarra};