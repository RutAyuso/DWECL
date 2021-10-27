//Develop a function wich be able to create a random treasure hunt like the previous one. 
//As arguments it will recibe the dimensions of the array (at least 5x5)
// and must return a valid treasure hunt array.

function matriz(f,c){
    arrBid = new Array(f);
    for (i=0; i<f;i++){
        arrBid[i] = new Array(c);
        arrBid[i].fill(0);
    }
    fTesoro = Math.trunc(Math.random() * f + 1);
    cTesoro = Math.trunc(Math.random() * c + 1);
    arrBid[fTesoro-1][cTesoro-1]=toString(fTesoro)+toString(cTesoro);
}

matriz(5,5);