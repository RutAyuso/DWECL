//Ejercicio 4

google.charts.load('current', {packages: ['corechart']});
//Libreria que se quiere cargar
google.charts.setOnLoadCallback(drawChart);
var poblacion=
    [
        ["2021", 1, "color:pink; opacity:0.5"],
        ["2020", 2, "color:grey; opacity:0.5"],
        ["2019", 3, "color:blue; opacity:0.8"],
        ["2018", 4, "color:yellow; opacity:0.4"],
    ];
function drawChart() {
    //Crear  dataTable
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Año');
    data.addColumn('number', 'Poblacion');
    data.addColumn({role:"style"});
    data.addRows(poblacion);

    var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {//añado las caracteristicas del grafico
        title: "Evolución de la población de Almendralejo",
        width: 800,
        height: 400,
        backgroundColor: 'green',
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
        animation:{
          duration: 1000,
          easing: 'out',
        },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("poblacion"));
      chart.draw(view, options);//he añadido una animacion
      window.setTimeout(()=>{   
        data.setValue(0,1,3025);
        data.setValue(1,1,2360);
        data.setValue(2,1,4021);
        data.setValue(3,1,1300);
        chart.draw(view, options);
      },1000)


}

//Ejercicio 3

function ejercicio3(id_rect, alto, ancho){

    const SVG_NS = "http://www.w3.org/2000/svg";
    let rectangulo = document.createElementNS(SVG_NS, 'rect');//creo el elemento con las siguientes características: 

    rectangulo.setAttributeNS(null, "x", 25);
    rectangulo.setAttributeNS(null, "y", 25);
    rectangulo.setAttributeNS(null, "width", ancho);
    rectangulo.setAttributeNS(null, "height", alto);

    //le añado el borde y el fondo
    rectangulo.setAttributeNS(null, "fill", "#37d213");
    rectangulo.setAttributeNS(null, "stroke", "#fafa02");

    //añado el id al rectangulo
    rectangulo.id = id_rect;
    document.getElementById("ejercicio2").appendChild(rectangulo);//lo añado al svg 
}
ejercicio3(5,50,70);//llamo a la funcion y le paso los parámetros



//Ejercicio2

var palabra;
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       palabra=this.responseText;
       ejercicio2(10, 3, "red", document.getElementById("ele"))
      }
    };
    xhttp.open("GET", "palabra.txt", true);
    xhttp.send();
}

function ejercicio2(nFilas, nCol, color, div){
    var tabla=document.createElement("table");
    for(let i=0; i<nFilas; i++){
        let tr=document.createElement("tr");
        if(i%2!=0)
            tr.style.backgroundColor=color;
        for(let j=0;j<nCol;j++){
            let td=document.createElement("td");
            td.innerText=palabra;
            td.addEventListener("click", (e)=>{
                e.target.innerText="";
                localStorage.setItem("tabla", e.target.parentNode.parentNode);
            })
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    div.appendChild(tabla);

    var celdas=[];
    var trs=Array.from(tabla.getElementsByTagName("tr"));
    trs.forEach((tr)=>{
        var tds=Array.from(tr.getElementsByTagName("td"))
        tds.forEach((td)=>{
            celdas.push(td.innerText);
        })
    })
    var tablaArray={
        trs:tabla.getElementsByTagName("tr"),
        tds:tabla.getElementsByTagName("td")
    };
    localStorage.setItem("tabla", JSON.stringify(celdas));
}
window.onload=loadDoc;


//ejercicio1

 class Vino{
     constructor(nombre_v,año_c){
         this.nombre = nombre_v;
         this.año = año_c;
         this.tipo = [blanco,rosado,tinto];
         this.tipo_crianza = [joven,crianza,reserva,gran_reserva];
     }
    }
 
 class Bodega{
     contructor(nombre){
        this.nombre = nombre;
        this.bodeguita = [];}
     
     añadirVino(v){
         this.bodeguita.push(v);
     }

     devuelveListadoVinos(ord){

        if (ord){
            this.bodeguita.sort( (a,b) => { return a.año - b.año})
        }
        
            return {
                "lista_vinos":this.bodeguita,
                "num_vinos":this.bodeguita.length
            }
     }
     vinosPorTipo(t){
         
     }

     }