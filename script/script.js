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
});