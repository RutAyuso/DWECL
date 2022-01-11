$( document ).ready(function() {
    console.log( "ready!" );
    $('#btn').click(function(){
        $('body').hide();
    })

    //5
    $('ol li').eq(0).hide();

    //8a
    $('div p').eq(0).css('font-size', '10px');
    $('div p').eq(1).css('font-size', '20px');
    $('div p').eq(2).css('font-size', '25px');


    //8b
    $('h1').click(function(){
         $(this).siblings(0).toggle(2000);

    });

    //8c
    $('div p').on('mouseenter',darColor);
    
    function darColor(){
        $(this).css('background-color','red');
    }

    //8d
    $('div p').on('mouseout',despintar);

    function despintar(){
        $(this).css('background-color','white');
    }



    
    
});