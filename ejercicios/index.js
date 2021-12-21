window.onload=()=>{
    document.getElementById("calcular").addEventListener('click',calcular);
}

function calcular(){
    const valor = document.getElementById('numeros').value;
    const numeros = valor.split(",");
    
    let suma = 0, mayor, media, menor;

    numeros.forEach(numero => {
        suma+= parseInt(numero);
    });
    media=suma/numeros.length;
    numeros.sort();
    menor=numeros[0];
    mayor=numeros[numeros.length-1];
    
    console.log("suma: ",suma);
    console.log("media: ",media);
    console.log("menor: ",menor);
    console.log("mayor: ",mayor);

}