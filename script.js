$(".openNav").click(function() {
  $("body").toggleClass("navOpen");
  $("nav").toggleClass("open");
  $(".wrapper").toggleClass("open");
  $(this).toggleClass("open");
});

$(function(){
  $("#typed").typed({
    strings: ["<span style='color: #ff1453;'>hammers</span>,",
              "<span style='color: #ff1453;'>power</span>,",
              "<span style='color: #ff1453;'>progress</span>,",
              "<span style='color: #ff1453;'>knowledge</span>."],
    typeSpeed: 50
  });
});