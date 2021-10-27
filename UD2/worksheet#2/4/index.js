//Mejora el ejercicio anterior para que continúe realizando el mismo cálculo
//hasta que el usuario decida que no quiere continuar.


do{
    c1 = parseFloat(prompt('Introduzca el valor del primer cateto'));
    c2 = parseFloat(prompt('Introduzca el valor del segundo cateto'));

    let hipotenusa = Math.sqrt((c1**2)+(c2**2));
    document.write(hipotenusa);
    salir = prompt('¿Deseas continuar? (Y / N)');
}while (salir == 'Y');

