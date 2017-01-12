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
        "<span style='color: #ff1453;'>rhythm</span>,",
        "<span style='color: #ff1453;'>sound</span>,",
        "<span style='color: #ff1453;'>creativity</span>,",
        "<span style='color: #ff1453;'>Teamrockets</span>.",
             ],
    typeSpeed: 50
  });
});

$(document).ready(function() {
    $('img').duotone({
        gradientMap: '#11192D, #FF1453 50%'
    });
});

$("body").on("contextmenu", "img", function(e) {
  return false;
});

$("body").on("click", "img", function(e) { return false; });

$('img').on('dragstart', function(event) { event.preventDefault(); });

