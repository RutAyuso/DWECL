numher = parseInt(prompt("Numero de hermanos"));
cant = parseInt(prompt("Introduce una cantidad"));

if (numher >= 3){
    alert(cant * 0.85)  
}else if (numher < 3){
    alert(cant * 0.95 )
}