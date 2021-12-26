class Instancia{
    constructor(nombre,direccion,telef,email){
        this.nom = nombre;
        this.direc = direccion;
        this.telefono = telef;
        this.email = email;
        this.agenda = [];
    }
}
export{Instancia};

class Agenda{
    constructor(nombre,direccion,telef,email){
        this.agenda = [];
    }

    introducirContacto(instancia){
        this.agenda.push(instancia);       
    }

    mostrarContacto(nombre){
        for(let instancia of this.agenda){
            if(instancia.nombre === nombre){
                return instancia;
            }
        }
    }

    mostrarTodos(){
        this.agenda.sort((a,b) => a.nombre.localeCompare(b.nombre));

        return this.agenda;
    }

    borrarContacto(nombre){
        for(let instancia of this.agenda){
            if(instancia.nombre === nombre){
                this.agenda.splice(instancia,1);
            }
        }
    }

}

export{Agenda};

var instancia1 = new Instancia('Antonio', 'Calle Marimorena', '123456789', 'a@gmail.com');
var instancia2 = new Instancia('Pepe', 'Calle Malavista', '012345678', 'p@gmail.com');
var instancia3 = new Instancia('Manuel', 'Calle Ronda', '987654321', 'm@gmail.com');
var instancia4 = new Instancia('Manuel', 'Calle Ronda', '987654321', 'm@gmail.com');


var agenda = new Agenda();

agenda.introducirContacto(instancia1);
console.log(agenda.mostrarContacto(instancia1.nombre));
agenda.introducirContacto(instancia2);
agenda.introducirContacto(instancia3);
console.log(agenda.mostrarTodos());
//agenda.borrarContacto(instancia4.nombre);
console.log(agenda.mostrarTodos());