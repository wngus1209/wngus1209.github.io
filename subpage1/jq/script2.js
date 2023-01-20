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
});

$(function () {
  $(".mainbanner ul li:gt(0)").fadeOut();
  function NextSlide() {
    $(".mainbanner ul li:first")
      .fadeOut(500)
      .next()
      .fadeIn(500)
      .end()
      .appendTo(".mainbanner ul");
  }
  var theInterval = setInterval(NextSlide, 4000);
});

$(function () {
  $(".tag li:first-child").css("color", " rgb(20, 58, 53)");
  $(".back li:nth-child(2)").css("display", "none");
  $(".back li:nth-child(3)").css("display", "none");
  $(".back li:nth-child(4)").css("display", "none");
  $(".back li:nth-child(5)").css("display", "none");
  $(".tag li:first-child").click(function () {
    $(".back li:first-child").fadeIn(500);
    $(".back li:nth-child(2)").fadeOut(200);
    $(".back li:nth-child(3)").fadeOut(200);
    $(".back li:nth-child(4)").fadeOut(200);
    $(".back li:nth-child(5)").fadeOut(200);
    $(".tag li:first-child").css("color", " rgb(20, 58, 53)");
    $(".tag li:nth-child(2)").css("color", " #fff");
    $(".tag li:nth-child(3)").css("color", " #fff");
    $(".tag li:nth-child(4)").css("color", " #fff");
    $(".tag li:nth-child(5)").css("color", " #fff");
    $(".test").css("height", "2440px").css("backgroundColor", "#E5EFEC");
    return false;
  });
  $(".tag li:nth-child(2)").click(function () {
    $(".back li:first-child").fadeOut(200);
    $(".back li:nth-child(2)").fadeIn(500);
    $(".back li:nth-child(3)").fadeOut(200);
    $(".back li:nth-child(4)").fadeOut(200);
    $(".back li:nth-child(5)").fadeOut(200);
    $(".tag li:first-child").css("color", " #fff");
    $(".tag li:nth-child(2)").css("color", " rgb(20, 58, 53)");
    $(".tag li:nth-child(3)").css("color", " #fff");
    $(".tag li:nth-child(4)").css("color", " #fff");
    $(".tag li:nth-child(5)").css("color", " #fff");
    $(".test").css("height", "2172px").css("backgroundColor", "#F5F6E7");
    return false;
  });
  $(".tag li:nth-child(3)").click(function () {
    $(".back li:first-child").fadeOut(200);
    $(".back li:nth-child(2)").fadeOut(200);
    $(".back li:nth-child(3)").fadeIn(500);
    $(".back li:nth-child(4)").fadeOut(200);
    $(".back li:nth-child(5)").fadeOut(200);
    $(".tag li:first-child").css("color", " #fff");
    $(".tag li:nth-child(2)").css("color", "#fff");
    $(".tag li:nth-child(3)").css("color", " rgb(20, 58, 53)");
    $(".tag li:nth-child(4)").css("color", " #fff");
    $(".tag li:nth-child(5)").css("color", " #fff");
    $(".test").css("height", "2215px").css("backgroundColor", "#F3EFF3");
    return false;
  });
  $(".tag li:nth-child(4)").click(function () {
    $(".back li:first-child").fadeOut(200);
    $(".back li:nth-child(2)").fadeOut(200);
    $(".back li:nth-child(3)").fadeOut(200);
    $(".back li:nth-child(4)").fadeIn(500);
    $(".back li:nth-child(5)").fadeOut(200);
    $(".tag li:first-child").css("color", " #fff");
    $(".tag li:nth-child(2)").css("color", " #fff");
    $(".tag li:nth-child(3)").css("color", " #fff");
    $(".tag li:nth-child(4)").css("color", " rgb(20, 58, 53)");
    $(".tag li:nth-child(5)").css("color", " #fff");
    $(".test").css("height", "2404px").css("backgroundColor", "#EFEFEF");
    return false;
  });
  $(".tag li:nth-child(5)").click(function () {
    $(".back li:first-child").fadeOut(200);
    $(".back li:nth-child(2)").fadeOut(200);
    $(".back li:nth-child(3)").fadeOut(200);
    $(".back li:nth-child(4)").fadeOut(200);
    $(".back li:nth-child(5)").fadeIn(500);
    $(".tag li:first-child").css("color", " #fff");
    $(".tag li:nth-child(2)").css("color", " #fff");
    $(".tag li:nth-child(3)").css("color", " #fff");
    $(".tag li:nth-child(4)").css("color", " #fff");
    $(".tag li:nth-child(5)").css("color", " rgb(20, 58, 53)");
    $(".test").css("height", "2378px").css("backgroundColor", "#F5E1CC");
    return false;
  });
});
