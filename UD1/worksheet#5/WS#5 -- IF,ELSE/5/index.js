examen1 = prompt("Dime la nota de tu primer examen");
examen2 = prompt("Dime la nota de tu segundo examen");
trabajo1 = prompt("Dime la nota de tu primer examen");
trabajo2 = prompt("Dime la nota de tu segundo examen");

if ((examen1 >=4.5) && (examen2 >= 4.5)){
    mediaE = (examen1 + examen2) / 2
    mediaT = (trabajo1 + trabajo2) /2
    media = (mediaE * 0.75) + (mediaT * 0.25)
    if (media>=5){
        alert('aprobado')
    }else{
        alert('suspenso')
    }
}
else{
    alert('suspenso')
}