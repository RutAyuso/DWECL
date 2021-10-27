//2

var fechaHoy = new Date();
document.write('<b>La fecha de hoy es:</b> '+fechaHoy+'<br>');

var fecha85 = new Date();
fecha85.setDate(fecha85.getDate() + 85);
document.write('<b>La fecha de hoy más 85 días es : </b> ' + fecha85+ '<br>');

var fecha187 = new Date();
fecha187.setDate(fecha187.getDate() - 187);
document.write('<b>La fecha de hoy menos 187 días es : </b>'+ fecha187+'<br>');

fecha85.setFullYear(fecha85.getFullYear()+2);
document.write('<b>Sumamos 2 años a la variable:</b> '+fecha85+'<br>');

fecha187.setDate(fecha187.getDate() - 1);
document.write('<b>Restar 24 horas:</b> ' + fecha187+'<br>');

var fechaResto = fecha85 - fecha187;
document.write('<b>La resta de las fechas da como resultado:</b>' +
fechaResto);

