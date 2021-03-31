'use strict';

function Persona(edad,altura,peso) {

    this.edad = edad;
    this.altura = altura;
    this.peso = peso;

    this.caminar = ()=>{

        console.log('Esta persona esta caminando');
    
    }

    this.sentarse = ()=>{

        console.log('Esta persona esta sentada');
    }
    
}

var Manuel = new Persona(47, 1.75, 98);
var Claudia = new Persona(38, 2.00, 60);

console.log(Manuel.sentarse());
console.log(Claudia.caminar());