 
cont=0

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            maquetar(JSON.parse(this.responseText));
            //search(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET","https://api.disneyapi.dev/characters", true);//DISNEY API
    xhttp.send();
  }
  

  function maquetarCard(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
           // maquetar(JSON.parse(this.responseText));
            //search(JSON.parse(this.responseText));
            console.log(this.responseText);
        }
    };
    xhttp.open("GET","https://api.disneyapi.dev/characters/"+id, true);//DISNEY API
    xhttp.send();
  }
function maquetar(json){

    for(let i=cont;i<json.data.length;i++){
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
            maquetarCard(json.data[i]._id);
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




window.onload =loadDoc;
