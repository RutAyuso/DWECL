 
 
window.addEventListener('scroll',()=>{
  if(window.scrollY+window.innerHeight >= document.body.offsetHeight-1000){

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
window.onload =inicio;

function loadDoc(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

            const response = JSON.parse(this.responseText);
            if (response.data != []){
                maquetar(response);
                siguientePagina = response.nextPage ? response.nextPage : "finish";
            }
            
        }
    };
    xhttp.open("GET",url, true);//DISNEY API
    xhttp.send();
  }
  function inicio(){
    loadDoc("https://api.disneyapi.dev/characters");
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
    var modal = document.getElementById("tvesModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";

    document.body.style.position = "static";
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";

    document.getElementById("name").textContent = json.name;
    document.getElementById("peliculas").textContent="Films: "+lista(json.films);
    document.getElementById("peliculasCortas").textContent="Short films: "+lista(json.shortFilms);
    document.getElementById("series").textContent="shows: "+lista(json.tvShows);
    document.getElementById("videoJuegos").textContent="Video Games: "+lista(json.videoGames);
    document.getElementById("atracciones").textContent="Atractions: "+lista(json.parkAttractions);
    document.getElementById("aliados").textContent="Alies: "+lista(json.allies);
    document.getElementById("enemigos").textContent="Enemies: "+lista(json.enemies);
    span.onclick = function() {
        modal.style.display = "none";

        document.body.style.position = "inherit";
        document.body.style.height = "auto";
        document.body.style.overflow = "visible";
    }
  }
function maquetar(json){

    for(let i=0;i<json.data.length;i++){
        console.log(json.data[i].name);
        var div= document.createElement("div");
        div.style.width="10rem";
        div.id = cont;
        div.style.height="10rem";
        div.style.display="inline-block";
        div.style.margin="1rem";
        div.style.borderRadius="10px";
        div.style.paddingBottom= "2rem";
        div.style.backgroundColor="rgba(215, 189, 226)";
        div.onclick=()=>{
            maquetarCard(json.data[i]);
        }

        var img=document.createElement("img");
        img.src=json.data[i].imageUrl;
        img.style.width="6rem";
        img.style.borderRadius="0px";
        img.style.height="6rem";
        img.style.marginLeft="2rem";
        img.style.marginBottom="4rem";

        var nombre= document.createElement("p");
        nombre.style.textAlign="center";
        nombre.style.color="white";
        nombre.style.fontSize="18px"
        nombre.textContent=json.data[i].name;

        document.getElementById("card").appendChild(div);
        div.appendChild(nombre);
        div.appendChild(img);

        cont++;
        
}
}

