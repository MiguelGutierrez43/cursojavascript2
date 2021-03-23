'use strict';

var n1 = prompt('Dime una palabra' , 'No has dicho nada');
var n2 = prompt('Dime otra palabra' , 'No has dicho nada');

function UnirPalabras(n1,n2) {

    var PalarasUnidas = n1 + '' + n2;
    return PalarasUnidas;
    
}

var resultado = UnirPalabras(n1,n2);
console.log(resultado);
