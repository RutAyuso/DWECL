import{Barra, Bola,interfazBola, interfazBarra} from "./objetos.js";

window.onload=()=>{

    const svg = document.getElementById("panel");
    var bola = new Bola(10,10,10,10,10);
    var interfazB = new interfazBola(bola,svg,color_aleatorio());
    var tam = svg.getBoundingClientRect();

    var barra = new Barra(20,100,10,10);
    var interfazBarr = new interfazBarra(barra, svg, color_aleatorio());   
    
    var barra2 = new Barra(20,100,tam.width-9,tam.height/2);
    var interfazBarr2 = new interfazBarra(barra2, svg, color_aleatorio());

    setInterval(()=>{
        bola.mueve(tam.width,tam.height);
        interfazB.dibuja();

        barra.mueve(tam.height);
        interfazBarr.dibuja();

        barra2.mueve(tam.height);
        interfazBarr2.dibuja();

    },30);
}

function color_aleatorio(){
    return "#"+Math.floor(Math.random()*16777215).toString(16);
}