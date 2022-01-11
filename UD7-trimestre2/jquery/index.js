$(document).ready(function(){
    /*$('p').click(function(){
        //$(this).html('Clicado');
        $('p').on('click',function(){
            $(this).html('Clicado');
        }) 
    })*/

    //coordenadas
   /* $('p').on('click',function(eventObjet){
        $(this).html(eventObjet.pageX);
    })*/

    //dos eventos a la vez, con JSON
    $('p').on({
        click:function(){
        $(this).html('Clicado')
        //animacion lenta
        $(this).hide('slow');},
        //raton sobre texto 
        mouseenter:function(){
        console.log($(this).html());
        }
    })




    })

