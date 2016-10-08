$(".openNav").click(function() {
  $("body").toggleClass("navOpen");
  $("nav").toggleClass("open");
  $(".wrapper").toggleClass("open");
  $(this).toggleClass("open");
});

$(function(){
  $("#typed").typed({
    strings: ["hammers,", "power."],
    typeSpeed: 20
  });
});