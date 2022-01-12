$( document ).ready(function() {
    //1
    $('td:gt(2)').css('background-color','blue');
    $('td:lt(2)').css('background-color','red');
    //2
    $( "p:contains('eu')" ).css( 'background-color','red' );
    //3
    $("td:empty")
    .text( "Was empty!")
    .css( "background", "rgb(204, 255, 0)" );
    //7
    $("#btn1").click(function(){
        $("p").animate({height: "200px", width: "200px"},5000);
        });

    $("#btn2").click(function(){
        $("p").stop(true);
    });

    $("#btn3").click(function(){
        $("p").animate({height: "100%", width: "100%"},5000);
    });
    //8
     $(document.body ).click(function() {
         $( "#one" ).first().fadeIn( "slow" );
         $( "#two" ).first().fadeIn( "fast" );
         $( "#three" ).first().fadeIn( 800 );
         $( "#four" ).first().fadeIn( 2000 );
         $( "#five" ).first().fadeIn( 4000 );
       });
    
    //9
    
    $('#btn4').click(function(){
        let div = $('<div>');
        div.width(40);
        div.height(40);
        div.css('background-color','red');
        div.css('display','block')
        $('body').append(div);
        div.animate({marginLeft:'+=200'},2000,()=>{div.css('background-color','blue');});
        div.animate({height:'0'},2000,()=>{div.remove()});
    })

    $("#btn5").click(function(){
        $("div").stop(true);
    });

    //10
    $(function(){
        var mayus = new RegExp("^(?=.*[A-Z])");
        var special = new RegExp("^(?=.*[!@#$%&*])");
        var numbers = new RegExp("^(?=.*[0-9])");
        var lower = new RegExp("^(?=.*[a-z])");
        var len = new RegExp("^(?=.{8,})");

        $("#password").on("keyup",function(){
            var pass = $("#password").val();

            if(mayus.test(pass) && special.test(pass) &&numbers.test(pass) && lower.test(pass) && len.test(pass)){
                $('#mensaje').text("SEGURA").css("color", "green");

            }else{
                $('#mensaje').text("INSEGURA").css("color", "red");
            }
        })
    });
    






    })