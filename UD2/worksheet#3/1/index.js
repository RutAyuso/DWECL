/*1. Crea las siguientes funciones y llamalas desde una pagina XHTML para mostrar su funcionamiento:
a) invierteCadena(cad_arg): 
devuelve invertida una cadena dada por el usuario*/
cadena= prompt('Introduce una cadena')
document.write(`La cadena introducida es: "${cadena}" <br> `)

function invierteCadena(cadena){
    invertida = cadena.split('').reverse().join('')
    return invertida
}

document.write(`La cadena invertida es: "${invierteCadena(cadena)}"  <br>`)

// /*
// b) inviertePalabras(cad_arg): 
// devuelve invertidas las palabras contenidas en la cadena.*/
function inviertePalabras(cadena){
    invertida = cadena.split(' ').reverse().join().replaceAll(',',' ')
    return invertida
}

document.write(`Las palabras de la cadena invertidas seria: "${inviertePalabras(cadena)}" <br>`)


/*
c) encuentraPalabraMasLarga(cad_arg): 
para una cadena de caracteres dada devuelve la longitud de la palabra mas larga en ella contenida
*/


function encuentraPalabraMasLarga(cadena){
    maslarga = ""
    lista = cadena.split(' ')
    for (i=0 ; i<lista.length ; i++){
        if (lista[i].length > maslarga.length ){
            maslarga=lista[i]
        }
    }
    return ('La palabra mas larga es ' + maslarga +  ' y tiene una longitud de ' + maslarga.length + ' caracteres')

}
document.write(encuentraPalabraMasLarga(cadena) + "<br>")


/*
d) fltraPalabrasMasLargas(cad_arg, i): 
para una cadena de caracteres y un valor numerico (i), devuelva el numero de palabras cuya longitud es mayor a i.*/

minimo = 3 //Numero minimo de letras 
function FiltraPalabrasMasLargas(cadena,minimo){
    listafiltrada = []
    lista = cadena.split(' ')
    for (i=0 ; i<lista.length ; i++){
        if (lista[i].length > minimo ){
            listafiltrada. push(lista[i])  //Push = append en python, para añadir elementos a un array
        }
    }
    return ('Hay ' + listafiltrada.length + ' palabras que tienen mas de ' + minimo + ' caracteres')
    
}
document.write(FiltraPalabrasMasLargas(cadena,minimo))

/*
e) cadenaBienFormada(cad_arg): 
formatea correctamente la cadena pasada,de tal modo que solo aparece en mayuscula la primera letra y el resto en minuscula*/

function cadenaBienFormada(cadena){
    return (cadena.charAt(0).toUpperCase() + cadena.slice(1))  //Con charAt cogemos el caracter que está en la posicion entre parentesis
}          //Con toUpperCase lo ponemos en mayuscula y con slice() cortamos la cadena a partir de la posicion entre parentesis (incluida)

document.write('<br> La cadena con la primera letra en mayuscula sería: ' + cadenaBienFormada(cadena))
