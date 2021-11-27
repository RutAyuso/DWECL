class bola
{
      constructor(radio, posicionX, posicionY, velocidadX, velocidadY, color, svgContenedor) {
        this.x = posicionX;
        this.y = posicionY;
        this.color = color;
        this.radio = radio;
        this.vX = velocidadX;
        this.vY = velocidadY;

        // Creación del tag
        this.tagCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.tagCircle.setAttribute("fill", this.color);
        this.tagCircle.setAttribute("cx", this.x);
        this.tagCircle.setAttribute("cy", this.y);
        this.tagCircle.setAttribute("r", this.radio);
        svgContenedor.appendChild(this.tagCircle);
    }
    
    mueve(anchoContenedor, altoContenedor)
    {
        this.posAnteriorX = this.x;
        this.posAnteriorY = this.y;

        this.x += this.vX;
        this.y += this.vY;    
        
        // Comprobamos ahora si está fuera de los límites
        // Eje X
        if (this.x-this.radio<=0 || this.x+this.radio >= anchoContenedor ){
            this.vX *= -1;
            this.x  = (this.x-this.radio<=0) ? this.radio: anchoContenedor-this.radio;
        }
        // Eje Y
        if (this.y-this.radio <=0 || this.y+this.radio >= altoContenedor ){
            this.vY *= -1;
            this.y  = (this.y-this.radio<=0) ? this.radio: altoContenedor-this.radio;
        }
    }
    
    dibuja(){
        this.tagCircle.setAttribute("cx", this.x);
        this.tagCircle.setAttribute("cy", this.y);
    }
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function colorAleatorio(){
    return "#"+ Math.floor(Math.random()*16777215).toString(16);
}

var bolas = new Array();
var svg; 

 window.onload = () =>{
        svg = document.getElementById("panel");
        bolas.push(new bola(aleatorio(4,50), aleatorio(70,900), aleatorio(70,900), aleatorio(1,15),aleatorio(1,15),colorAleatorio(),svg));
        elId = window.requestAnimationFrame(loop);
  }

  function loop(){
      tamanoSVG = svg.getBoundingClientRect();
      for (let i=0; i<bolas.length; i++){
        bolas[i].mueve(tamanoSVG.width, tamanoSVG.height);        
        bolas[i].dibuja();}
      elId = window.requestAnimationFrame(loop);
  }
