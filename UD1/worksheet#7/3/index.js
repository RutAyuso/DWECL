//Write a function called countTheArgs that can take any number of arguments, and returns the number of arguments that are
// passed in.

function countTheArgs(...array){
    var contador = 0;
    for (i of array){
        contador+=1;
    }return contador;

}
let numArgumentos = countTheArgs('Rut',1,2,3,4,5,6);
document.write(numArgumentos);