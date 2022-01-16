 
 
window.addEventListener('scroll',()=>{
  if(window.scrollY+window.innerHeight >= $('body').offsetHeight-1000){

    let urlIsValid = lastRequestUrl != siguientePagina && siguientePagina != "finish"

    if (urlIsValid){
      loadDoc(siguientePagina);
      lastRequestUrl = siguientePagina
    }

  }
});

let lastRequestUrl;
var siguientePagina = "";

cont=0;
$(document).ready(
  loadDoc);

function loadDoc() {
    $.get("https://api.disneyapi.dev/characters", maquetar)
  }


  function lista(lista){
    var li = "";
    if(lista.length > 0){
      for(let i = 0; i <lista.length; i++){
         li += lista[i] + ", ";
      }
      return li;

    }else{
      return "-";
    }


  }
  function maquetarCard(json) {
    console.log(json);
    var modal = $("#tvesModal");
    var span = $(".close").eq(0);
    modal.css('display','block');

    $('body').css('position', 'static');
    $('body').css('height' , '100%');

    $("#name").text(json.name);
    $("#peliculas").text("Films: "+lista(json.films));
    $("#peliculasCortas").text("Short films: "+lista(json.shortFilms));
    $("#series").text("shows: "+lista(json.tvShows));
    $("#videoJuegos").text("Video Games: "+lista(json.videoGames));
    $("#atracciones").text("Atractions: "+lista(json.parkAttractions));
    $("#aliados").text("Alies: "+lista(json.allies));
    $("#enemigos").text("Enemies: "+lista(json.enemies));
    span.click(function() {
        modal.css('display','none');

        $('body').css('position','inherit');
        $('body').css('height','auto');
        $('body').css('overflow','visible');
    });
  }
function maquetar(json){

    for(let i=0;i<json.data.length;i++){
        let div= $("<div>");
        div.css('width','10rem');
        div.attr('id',cont);
        div.css('height','10rem');
        div.css('display','inline-block');
        div.css('margin','1rem');
        div.css('borderRadius','10px');
        div.css('paddingBottom','2rem');
        div.css('backgroundColor','rgba(215, 189, 226)');
        div.click(()=>{
            maquetarCard(json.data[i]);
        });

        let img=$("<img>");
        img.attr('src',json.data[i].imageUrl);
        img.css('width','6rem');
        img.css('borderRadius','0px');
        img.css('height','6rem');
        img.css('marginLeft','2rem');
        img.css('marginBottom','rem');

        let nombre= $("<p>");
        nombre.css('text-align','center');
        nombre.css('color', 'white');
        nombre.css('fontSize','18px');
        nombre.text(json.data[i].name);

        $("#card").append(div);
        div.append(nombre);
        div.append(img);

        cont++;
        
}
}

