'use strict';

if (typeof(Storage)) {

    console.log('Disponible');
    
}else{

    console.log('No disponible');
}

localStorage.setItem('clave', 'Valor de esta clave');
localStorage.setItem('edad', 37);

var valor = localStorage.getItem('clave');
console.log(valor);

var persona = {

    edad:37,
    nombre:'Miguel',
}

localStorage.setItem('persona', JSON.stringify(persona));
var per = JSON.parse(localStorage.getItem('persona'));
console.log(per.nombre);