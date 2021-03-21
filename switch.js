var edad = 20;
var texto = '';

switch (edad) {
    case 18:
        texto = 'No tienes 18 años';
        break;
    
    case 20:
        texto = 'Eres mayor de edad';
        break;

    default:
        texto = 'Al parecer no tienes edad';
        break;
}
console.log(texto);