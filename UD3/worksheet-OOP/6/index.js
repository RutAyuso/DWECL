//6
class Lambdasian {
    constructor(parametros) {
        this.name = parametros.name;
        this.age = parametros.age;
        this.location = parametros.location;
    }

    speak() {
        return "Hello, my name is " + this.name + ", I am from " + this.location;
    }
}

let l1 = new Lambdasian({name:"Ramón", age:23, location:"Jaén"});
console.log(l1.speak());

class Instructor extends Lambdasian {
    cons
    constructor(valores) {
        // super(parametros, valores);
        this.specialty = valores.specialty;
        this.favLanguage = valores.favLanguage;
        this.cathPhrase = valores.cathPhrase;
    }

    demo(asignatura) {
        return "Today we are learning about " + asignatura;
    }

    grade(estudiante, asignatura) { // Estudiante es un objeto de Lambdasian
        return `${estudiante.name} receives a perfect score on ${asignatura}`;
    }
}

let I1 = new Instructor({name: "Javier", age: 20, location: "Granada"}, {specialty: "TIC", favLanguage:"JavaScript", cathPhrase:"Why are you late?"});
console.log(I1);
console.log(I1.speak());
console.log(I1.demo("Maths"));
console.log(I1.grade(l1, "Lengua"));

class Student extends Lambdasian {
    constructor(datos) {
        this.previousBackground = datos.previousBackground;
        this.className = datos.className;
        this.favSubjects = datos.favSubjects;

    }

    listSubjects(...array_subjects) { // Indicamos con 3 puntos para que coja todos los valores del array

        return `Loving ${array_subjects}`;
    }

    PRAssignment(student, subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }
}

let student1 = new Student({name:"Miguel", age:20, location:"Zaragoza"}, {previousBackground:"Nada", className:"2ºDAW", favSubjects:"TIC"});
console.log(student1.listSubjects("P.E", "Maths", "TIC"));
console.log(student1.PRAssignment(l1, "Ciencias Naturales"));

class ProjetManager extends Instructor{
    constructor(objeto){
        this.gradClassName = objeto.gradClassName;
        this.favInstructor = objeto.favInstructor;
    }
    standUp()


}
