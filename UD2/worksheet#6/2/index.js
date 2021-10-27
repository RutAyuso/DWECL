//Crea una página que contenga varios enlaces, imagenes y anclas de ejemplo y áñáde
// una serie de enlaces que realicen lo siguiente: 
//a) Muestra el número de anclas que tiene el documento. 
//document.write(document.getElementsByTagName("a").lenght);
//b) Muestra el texto dentro del tag del primer ancla (innerHTML).
//document.write(" ")
//c) Muestra el número de imagenes del documento 
document.write("numero imagenes: " + document.images.length+"<br><br>");
//d) Muestra el id de la primera imagen
var identificador = document.images.item("0").id+"<br><br>";
document.write("El id de la imagen 1 es : " + identificador + "<br>");
//e) Muestra el número de enlaces del documento
document.write("Numero de enlaces"+ document.links.length+"<br>");
//f) Cambia el título del documento.
document.title= "Ahora si";