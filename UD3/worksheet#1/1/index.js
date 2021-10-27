/*Define una función máximo que dados 4 valores devuelva el máximo de ellos.
Llámala con un ejemplo pidiendo los 4 valores al usuario*/


var num1;
var num2;
var num3;
var num4;

function mayor(a,b){
    if(a >= b){
        return a;
    }else{
        return b;
    }}

num1 = parseInt(prompt("Introduce el numero 1"));
num2 = parseInt(prompt("Introduce el numero 2"));
num3 = parseInt(prompt("Introduce el numero 3"));
num4 = parseInt(prompt("Introduce el numero 4"));

if (mayor(num1,num2) >= mayor(num3,num4)){
    document.write("El mayor de los cuatro numeros es : ", mayor(num1,num2));
}else{
    document.write("El mayor de los cuatro numeros es : ", mayor(num3,num4));
}