'use strict';

var fecha  = new Date();
var hora = fecha.getHours().toString();
var minutos = fecha.getMinutes().toString();
var segundos = fecha.setSeconds().toString();
console.log(hora+' : '+minutos+' '+segundos);
