$(".openNav").click(function() {
  $("body").toggleClass("navOpen");
  $("nav").toggleClass("open");
  $(".wrapper").toggleClass("open");
  $(this).toggleClass("open");
});

$("#activePage").click(function() {
  $("body").toggleClass("navOpen");
  $("nav").toggleClass("open");
  $(".wrapper").toggleClass("open");
  $(".openNav").toggleClass("open");
});

$(function(){
  $("#typed").typed({
    strings: [
        "<span style='color: #ff1453;'>hammers</span>,",
        "<span style='color: #ff1453;'>contact</span>,",
        "<span style='color: #ff1453;'>conscience</span>,",
        "<span style='color: #ff1453;'>power</span>.",
             ],
    typeSpeed: 50
  });
});

$(document).ready(function() {
    $('img').duotone({
        gradientMap: '#11192D, #FF1453 50%'
    });
    // inizio footergame, nascondo tutti gli altri messaggi e il footer scherzo
    $('#fase2').hide();
    $('#fase3').hide();
    $('#footer').hide();
    // se si clicca vabene il messaggio va via
    $('#vabene').on("click", function(){
      $('#fase1').fadeOut();
    });
    // se si clicca l'altro appare il secondo messaggio, il primo sparisce
    $('#idontcare').on("click", function(){
      $('#fase1').fadeOut();
      $('#fase2').delay(800).fadeIn();
    });
    // vabene dinuovo, sparisce e basta
    $('#vabene2').on("click", function(){
      $('#fase2').fadeOut();
    });
    // se si clicca l'altra opzione appare il terzo messaggio, sparisce il secondo
    $('#idontcare2').on("click", function(){
      $('#fase2').fadeOut();
      $('#fase3').delay(800).fadeIn();
    });
    // ultimo messaggio, poi appare il footer 
    $('#idontcare3').on("click", function(){
      $('#idontcare3').parent().fadeOut();
      $('#footer').delay(800).fadeIn();
    });

});

$("body").on("contextmenu", "img", function(e) {
  return false;
});

$("body").on("click", "img", function(e) { return false; });

$('img').on('dragstart', function(event) { event.preventDefault(); });

