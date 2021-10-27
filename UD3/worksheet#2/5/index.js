//5

function paresImpares() {
    let a = [];
    for (i = 0; i < 100; i++){
        a.push(Math.round(Math.random() * 999 + 1));
    }
    a.sort((a, b)=> a - b); 

    let pares = a.filter(function(num){
        return num % 2 == 0;
    })
    let impares = a.filter(function(num){
        return num % 2 !== 0;
    })

    a = pares.concat(impares);

    a.forEach((numero)=>{
        console.log(numero)
    });
}

console.log(paresImpares());