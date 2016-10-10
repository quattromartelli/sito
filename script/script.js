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
        "<span style='color: #ff1453;'>sharing</span>,",
        "<span style='color: #ff1453;'>growth</span>,",
        "<span style='color: #ff1453;'>endurance</span>.",
             ],
    typeSpeed: 50
  });
});