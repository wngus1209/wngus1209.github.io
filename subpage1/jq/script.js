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

  $(function () {
    var $slider = $(".mainbanner ul");
    $firstSlide = $slider
      .find("li")
      .first()
      .stop()
      .animate({ opacity: 1 }, 200);
    function NextSlide() {
      var $firstSlide = $slider.find("li").first().stop().appendTo($slider);
      $lastSlide = $slider
        .find("li")
        .last()
        .stop()
        .animate({ opacity: 0 }, 600, "linear");
      $firstSlide = $slider
        .find("li")
        .first()
        .stop()
        .animate({ opacity: 1 }, 600, "linear");
    }
    var theInterval;
    startSlide();
    function startSlide() {
      theInterval = setInterval(NextSlide, 4000);
    }
  });
});
