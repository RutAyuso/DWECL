//1

function max(n1,n2){
    return Math.max(n1,n2);
}

console.log(max(15,10));

//2
function max2(n1,n2,n3){
    return Math.max(n1,n2,n3);
}

console.log(max2(20,10,5));

//3
function max_array(a){
    return Math.max(...a);//usando el spread operator
}

console.log(max_array([1,2,56,3]));

//4
function suma_array(a){
    var suma = (actual, anterior) => actual+anterior;//funcion suma
    return a.reduce(suma);//usando reduce para aplicarle la funcion suma
}

console.log(suma_array([1,2,56,3]));

//5
function multiplica_array(a){
    var multi = (actual, anterior) => actual*anterior;//funcion de la multiplicacion
    return a.reduce(multi);//usando reduce para aplicarle la funcion multi
}

console.log(multiplica_array([1,2,3,4]));

//6
function invertir(frase){
    return frase.split("").reverse().join("");
    //1-separar todas las letras-SPLIT
    //2-darles la vuleta-REVERSE
    //3-volverlas a unir-JOIN
}
console.log(invertir("Hola"));

//7
function encuentraPalabraMayor(a){
    var maximo = 0;
    //console.log(a);
    
    for(i=0;i<a.length;i++){//cada elemento hasta el largo del array
    
        if (a[i].length > a[maximo].length){//si el largo del elemento es mayor que el largo del maximo anotado
            maximo = i; 
            }
    }
    return a[maximo];
    }
console.log(encuentraPalabraMayor(["hola","Adiosssssssssssssssssss","mu","m"]));

//8
function filtraPalabrasMayores(a,n){
    nuevo_array = [];
    for(i=0;i<a.length;i++){//cada elemento hasta el largo del array
    
        if (a[i].length > n){//si el largo del elemento es mayor que n
            nuevo_array.push(a[i]); //añaimos al nuevo array los valores
            }
    }
    return nuevo_array;
}
console.log(filtraPalabrasMayores(["hola","Adiosssssssssssssssssss","mu","m"],4));