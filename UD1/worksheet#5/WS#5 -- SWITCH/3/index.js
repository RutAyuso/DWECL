numero1 = parseInt(prompt("Dime el primer número de la operación"));
numero2 = parseInt(prompt("Dime el segundo número de la operación"));
operacion = prompt("Dime el tipo de operación que deseas (+,-,/,*)");

switch (operacion){
    case "+":
        alert(numero1+numero2);
    case "-":
        alert(numero1-numero2);
    case "/":
        alert(numero1/numero2);
    case "*":
        alert(numero1*numero2);
    
}

