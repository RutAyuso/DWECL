// Write a function called addOnlyNums that can take in any number of arguments (including numbers or 
//strings), and returns the sum of only the numbers.

function addOnlyNums(...array){
    var total = 0;
    for (i of array){
        if (typeof i == 'number'){
            total+=i;
        }
    }return total;
}

let sumaNumeros = addOnlyNums('hola',5,6,8,'adios');
document.write(sumaNumeros);