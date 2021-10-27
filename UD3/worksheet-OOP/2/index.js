class Car{
    constructor(model, millesPerGallon){
        this.model = model;
        this.millesPerGallon = millesPerGallon;
        this.tank = 0;
        this.odometer = 0;
        
    }
    fill(galons){
        this.tank += galons;
    }
    
    
    drive(distance){
        distan = this.tank/this.millesPerGallon
        if (distan < distance){
            this.odometer += distance;
            this.tank -= (distance * this.millesPerGallon);
            return `I ran aout of fuel at ${this.odometer} milles!`
        }
        else{
            this.odometer += distance;
            this.tank -= (distance * this.millesPerGallon);
        }
        
    }
    
}