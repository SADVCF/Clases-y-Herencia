class Animal{
    constructor(nombre, peso, edad){
        this.nombre=nombre;
        this.peso=peso;
        this.edad=edad;

        
    }
    informacion(){
        return `[${this.nombre}] - [${this.peso}kg] - [${this.edad}] años`;
    }
}

class Perro extends Animal{
    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this.raza=raza;

        
    }
    informacion(){
        return `Perro - [${this.nombre}] - [${this.peso}kg] - [${this.edad}] años - [${this.raza}]`;
    }
}

class Gato extends Animal{
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad);
        this.sexo=sexo;

        

    }
    informacion(){
        return `Gato - [${this.nombre}] - [${this.peso}kg] - [${this.edad}] años - [${this.sexo}]`;
    }
}

class Conejo extends Animal{
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad);
        this.color=color;

        
    }
    informacion(){
        return `Conejo - [${this.nombre}] - [${this.peso}kg] - [${this.edad}] años - Color: [${this.color}]`;
    }
}

let perro1=new Perro("Chucho",1,40,"Sabueso");
let gato1=new Gato("Gatorro",35,19,"mujer");
let conejo1=new Conejo("Conejo gordo",4,5,"gris");

let animales=[perro1,gato1,conejo1];

function mostrar(){
    let elementoLista=document.getElementById("animales");

    for(let animal of animales){
        let animalLista=document.createElement("li");
        animalLista.innerHTML=animal.informacion();
        elementoLista.appendChild(animalLista);

    }

}