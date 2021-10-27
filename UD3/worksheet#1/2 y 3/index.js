
        /*2- Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.Para ello
        define una función “lanzamiento” que devuelva un nº aleatorio entre 1 y 6. */
        /*3- Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
        modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
        de ocurrencias de cada uno de los valores.*/



        var uno = dos = tres = cuatro = cinco = seis = 0; //contadores
        var numTiradas = 0;
          
        function lanzamiento(){
 //           var aleatorio = parseInt(6*Math.random()+1);
            return parseInt(5*Math.random()+1);
        }
        
        for(i=1; i<=6000; i++){
            tirada = lanzamiento();
            switch(tirada){
                case 1:
                    uno++;
                    break;
                case 2:
                    dos++;
                    break;
                case 3:
                    tres++;
                    break;
                case 4:
                    cuatro++;
                    break;
                case 5:
                    cinco++;
                    break;
                case 6:
                    seis++;
                    break;
            }
        }
        
        numTiradas = uno+dos+tres+cuatro+cinco+seis;
        
        document.write("El 1 :  " + uno + " veces <br> El 2 :  " + dos + " veces <br> El 3 :  " + tres + " veces <br> El 4 :  " + cuatro + " veces <br> El 5 :  " + cinco + " veces <br> El 6 :  " + seis + " veces<br>");
        document.write(" <br> Numero de lanzamientos: " + numTiradas);