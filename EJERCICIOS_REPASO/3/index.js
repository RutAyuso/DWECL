//1

function contarMayusYMinus(cadena){
    var contadorMa = 0;
    var contadorMi = 0;
    var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var minusculas = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < mayusculas.length && minusculas.length ; i++) {
    for (var l = 0; l < cadena.length; l++) {
        if(cadena[l]==mayusculas[i]){
            contadorMa+=1;
        }
        if(cadena[l]==minusculas[i]){
            contadorMi+=1;
        }
    }
    }
    console.log("Se encontraron: "+contadorMa+" Mayusculas y " +contadorMi+" Minusculas");
}

contarMayusYMinus("AAAA iii")

//2
function repeticionCaracter(cadena,caracter){
    contador = 0;
    for (var l = 0; l < cadena.length; l++) {
        if(cadena[l]==caracter){
            contador+=1;
        }
    }
    if(contador == 0){
        console.log("El caracter no aparece en la sentencia");   
    }else{
        console.log("El caracter se repitió: " + contador + " veces");
    }
}
repeticionCaracter("Holb","a");

//3
function palindromo(palabra){
    p = palabra.split("").reverse().join("");
    if(p == palabra){
        console.log("Es palindromo");
    }
    else{
        console.log("No es palindromo");
    }
}
palindromo("alohola");

//4
cad = 'Hola que tal';
x = 'a'

function ponMayus(cad, x){
    cad = cad.replaceAll(x, x.toUpperCase());
    return cad;
}
console.log(ponMayus(cad, x));


//5
function ejercicio5(s){
    console.log(s.replace(/\s+/g, ''));//expresion regular
    
}
ejercicio5("Hola, que tal");
