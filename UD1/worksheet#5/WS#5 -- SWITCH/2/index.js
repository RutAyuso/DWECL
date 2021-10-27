num = prompt("Dime un número");

if ((num % 2)== 0){
    a = "par"
}

else if (num % 3 == 0){
    a = "múltiplo 3"
}

else if (num % 5 == 0){
    a = "múltiplo 5"
}

else {
    a = null
}

switch (a){
    case "par":
        alert("El número es par");
        break;
    case "múltiplo 3":
        alert("El número es múltiplo de 3");
        break;
    case "múltiplo 5":
        alert("El número es múltiplo de 5");
        break;
    default:
        alert("El número no es par, múltiplo de 3 ni múltiplo de 5");

}