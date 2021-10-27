//Find all the words that start with 'J'

nombres = ['Juan', 'José', 'Paco', 'David', 'Javi', 'Aarón'];
llevaj = [];

nombres.forEach(element => {
    if (element[0] == 'J'){
        llevaj.push(element);
    }
});
console.log(llevaj);

//Initials

ini = [];

nombres.forEach(element => {
    ini.push(element[0]);
});
console.log(ini);