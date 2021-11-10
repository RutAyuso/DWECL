// document.getElementById('imagen').src="2.jpg"
variableNum = 1;

boton_uno = document.getElementById('atras');
boton_dos = document.getElementById('delante');



function delante(){
    variableNum +=1;
    document.getElementById('imagen').src=variableNum + ".jpg";
    if (variableNum == 3){
        document.getElementById('delante').style.display="None";
    }else{
        document.getElementById('atras').style.display="Inline";

    }
}

function atras(){
    variableNum -=1;
    document.getElementById('imagen').src=variableNum + ".jpg";
    if (variableNum == 1){
        document.getElementById('atras').style.display="None";
    }else{
        document.getElementById('delante').style.display="Inline";

    }
}

boton_uno.addEventListener('click', atras);
boton_dos.addEventListener('click', delante);

var mc = Hammer(imagen);
mc.on("panleft", delante);
mc.on("panright",atras);
