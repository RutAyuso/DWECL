//Crea una web en la que cada vez que se accede se muestre una imagen
//(de modo aleatorio) de entre 3 posibles.

numero = parseInt(Math.random()*3+1);
switch(numero){
    case 1 :
        document.write('<img src="https://www.okchicas.com/wp-content/uploads/2019/05/Fondos-de-pantalla-Disney-2.jpg"');
        break;
    case 2 :
        document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScPptZdgBZQDSTF9z5GtWgyIsC4aZmVfwBbA&usqp=CAU"');
        break;
    case 3:
        document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtcdihs4PdHM9lbSVel-LjtSOXRSK1B13cA&usqp=CAU"');
        break;
    default:
        document.write('Ha ocurrido un problema');
}