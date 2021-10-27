// En un nueva pagina web, pide al usuario un angulo y calcula su seno,
//coseno y tangente
angulo = prompt("Dime un angulo");
angulo_radianes = (angulo * Math.PI)/180;
document.write("El seno del angulo es"+Math.sin(angulo_radianes));
document.write("<br>");
document.write("El coseno del angulo es"+Math.cos(angulo_radianes));
document.write("<br>");
document.write("La tangente del angulo es"+Math.tan(angulo_radianes));
