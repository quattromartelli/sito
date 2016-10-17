$(document).ready(function() {

    // inizio footergame, nascondo tutti gli altri messaggi e il footer scherzo
    $('#fase2').hide();
    $('#fase3').hide();
    $('#footer').hide();
    
    // se si clicca vabene il messaggio va via
    $('#vabene').on("click", function(){
      $('#fase1').fadeOut(800);
    });
    
    // se si clicca l'altro appare il secondo messaggio, il primo sparisce
    $('#idontcare').on("click", function(){
      $('#fase1').fadeOut(200);
      $('#fase2').delay(800).fadeIn(200);
    });
    
    // vabene dinuovo, sparisce e basta
    $('#vabene2').on("click", function(){
      $('#fase2').fadeOut(800);
    });
    
    // se si clicca l'altra opzione appare il terzo messaggio, sparisce il secondo
    $('#idontcare2').on("click", function(){
      $('#fase2').fadeOut(200);
      $('#fase3').delay(800).fadeIn(200);
    });
    
    // ultimo messaggio, poi appare il footer 
    $('#idontcare3').on("click", function(){
      $('#footergamecontainer').fadeOut(200);
      $('#footer').delay(0).fadeIn(200);
      $("html, body").animate({ 
          scrollTop: $(document).height() 
      }, 800);
        
    });
    // fine footergame

});
