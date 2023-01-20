$(function () {
  var $slider = $(".search_right ul");
  $firstSlide = $slider.find("li").first().stop().animate({ opacity: 1 }, 500);
  function NextSlide() {
    var $firstSlide = $slider.find("li").first().stop().appendTo($slider);
    $lastSlide = $slider.find("li").last().stop().animate({ opacity: 0 }, 400);
    $firstSlide = $slider
      .find("li")
      .first()
      .stop()
      .animate({ opacity: 1 }, 400);
  }
  var theInterval;
  startSlide();
  function startSlide() {
    theInterval = setInterval(NextSlide, 4000);
  }

  $("#login_one").click(function () {
    $("#login_one").css("border", "1px solid #009942");
    $("#login_two").css("border", "1px solid #9A9A9A");
  });
  $("#login_two").click(function () {
    $("#login_two").css("border", "1px solid #009942");
    $("#login_one").css("border", "1px solid #9A9A9A");
  });
  $(".llogin").click(function () {
    $(".llogin").css("border", "1px solid #009942").css("color", "#009942");
    $(".rlogin").css("border", "1px solid #9a9a9a").css("color", "#9a9a9a");
    $(".member").css("display", "block");
    $(".non_member").css("display", "none");
  });
  $(".rlogin").click(function () {
    $(".rlogin").css("border", "1px solid #009942").css("color", "#009942");
    $(".llogin").css("border", "1px solid #9a9a9a").css("color", "#9a9a9a");
    $(".non_member").css("display", "block");
    $(".member").css("display", "none");
  });

  $("#search_one").click(function () {
    $("#search_one").css("border", "1px solid #009942");
    $("#search_two").css("border", "1px solid #9A9A9A");
    $("#search_three").css("border", "1px solid #9A9A9A");
    $("#search_four").css("border", "1px solid #9A9A9A");
  });
  $("#search_two").click(function () {
    $("#search_one").css("border", "1px solid #9A9A9A");
    $("#search_two").css("border", "1px solid #009942");
    $("#search_three").css("border", "1px solid #9A9A9A");
    $("#search_four").css("border", "1px solid #9A9A9A");
  });
  $("#search_three").click(function () {
    $("#search_one").css("border", "1px solid #9A9A9A");
    $("#search_two").css("border", "1px solid #9A9A9A");
    $("#search_three").css("border", "1px solid #009942");
    $("#search_four").css("border", "1px solid #9A9A9A");
  });
  $("#search_four").click(function () {
    $("#search_one").css("border", "1px solid #9A9A9A");
    $("#search_two").css("border", "1px solid #9A9A9A");
    $("#search_three").css("border", "1px solid #9A9A9A");
    $("#search_four").css("border", "1px solid #009942");
  });
});
