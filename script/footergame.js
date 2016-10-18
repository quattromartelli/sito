$(document).ready(function() {
    var fadeSpeed = 200;
    var delayAmount = 500;

    // inizio footergame, nascondo tutti gli altri messaggi e il footer scherzo
    $('#fase2').hide();
    $('#fase3').hide();
    $('#footer').hide();
    
    // se si clicca vabene il messaggio va via
    $('#vabene').on("click", function(){
      $('#fase1').fadeOut(delayAmount);
    });
    
    // se si clicca l'altro appare il secondo messaggio, il primo sparisce
    $('#idontcare').on("click", function(){
      $('#fase1').fadeOut(fadeSpeed);
      $('#fase2').delay(delayAmount).fadeIn(fadeSpeed);
    });
    
    // vabene dinuovo, sparisce e basta
    $('#vabene2').on("click", function(){
      $('#fase2').fadeOut(delayAmount);
    });
    
    // se si clicca l'altra opzione appare il terzo messaggio, sparisce il secondo
    $('#idontcare2').on("click", function(){
      $('#fase2').fadeOut(fadeSpeed);
      $('#fase3').delay(delayAmount).fadeIn(fadeSpeed);
    });
    
    // ultimo messaggio, poi appare il footer 
    $('#idontcare3').on("click", function(){
      $('#footergamecontainer').fadeOut(fadeSpeed);
      $('#footer').delay(0).fadeIn(1000);
      $("html, body").animate({ scrollTop: $(footer).offset().bottom }, delayAmount);
        
    });
    // fine footergame

});
