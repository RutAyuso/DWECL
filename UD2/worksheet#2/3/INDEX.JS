//Crea una web que e calcula la hipotenusa de un triangulo rectangulo
//(pidiendo al usuario el tamaño de los dos catetos).


function sacar_hipotenusa(c1,c2) {
	let hipotenusa = Math.sqrt((c1**2)+(c2**2))
	return hipotenusa
}

document.write(sacar_hipotenusa((parseInt(prompt('Primer cateto: '))),
	(parseInt(prompt('Segundo cateto: ')))))