$(".openNav").click(function() {
  $("body").toggleClass("navOpen");
  $("nav").toggleClass("open");
  $(".wrapper").toggleClass("open");
  $(this).toggleClass("open");
});

$(function(){
  $(".element").typed({
    strings: ["We are hammers.", "We are power."],
    typeSpeed: 20
  });
});