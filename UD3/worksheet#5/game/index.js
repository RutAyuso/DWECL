class Dado{
    tirar(){
        return Math.trunc(Math.random()*5+1);
    }
}

class Jugador{
    constructor(nombre){
        this.nombre = nombre;
        this.dados = [new Dado(), new Dado()]
    }

    tirada(){
        return this.dados[0].tirar() + this.dados[1].tirar();
    }
}

class Game{
    constructor(tandas){
        this.tandas = tandas;
        this.jugadores = {};
        this.ganador = none;
    }
    agregar(jugador){
        if (jugador in this.jugadores){
            return `Ese jugador ya existe`;
        }else{
            this.jugadores[jugador] = 0;
            return `Jugador creado con éxito`;
        }
    
    }
    jugar(){
        for (let tanda = 0; tanda < this.tandas; tanda++){
            for (jugador of this.jugadores){
                this.jugadores[jugador] += jugador.tirada();

            }
        }
        //Aquí va un bucle en el que sacamos los valores de los jugadores.
        // No supe sacar el valor de JSON (o sea el valor de las tiradas)



        self.ganador = Math.max(this.jugadores,)
    }
}
