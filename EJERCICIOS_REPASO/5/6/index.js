window.onload = () => {
    arr = [[1,1,1,1,1,1], [2,2,2,2,2,2], [3,3,3,3,3,3]];
    crearTabla(arr);
}

function crearTabla(array){
    var tabla = document.createElement('table');
    document.body.appendChild(tabla);
    tabla.setAttribute("border", "1");
    tabla.setAttribute("borderColor", "black");
    for (fila of array){
        var tr = document.createElement('tr');
        tabla.appendChild(tr);
        for(celda of fila){
            var td = document.createElement('td');
            td.innerHTML = celda;
            tr.appendChild(td);
        }
    }
}