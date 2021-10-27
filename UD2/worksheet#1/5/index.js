//

function clock()
{
    let horaactual = new Date();
    document.body.innerHTML =`Hora: ${horaactual.getHours()}:${horaactual.getMinutes()}:${horaactual.getSeconds()}`;
    setTimeout(clock,1000);
}
setTimeout(clock,1000);