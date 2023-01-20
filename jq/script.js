$(function () {
  $(".lnb").css("display", "none");
  $(".gnb li,.lnb").hover(
    function () {
      $(".lnb").stop().slideDown(350);
    },
    function () {
      $(".lnb").stop().slideUp(350);
    }
  );
  $(".lnb > li").hover(
    function () {
      let i = $(this).index();
      $(".gnb li a").removeClass("on");
      $(".gnb li a").eq(i).addClass("on");
    },
    function () {
      $(".gnb li a").removeClass("on");
    }
  );
  $(".slide_gallery").bxSlider({
    mode: "horizontal",
    moveSlides: 1,
    slideMargin: 0,
    infiniteLoop: true,
    speed: 500,
    pause: 5000,
    auto: true,
    autoHover: true,
    controls: true,
    pager: true,
    pagerType: "short",
  });
  $(function () {
    $(".select_menu ul li:first-child a").click(function () {
      $(".select_one").css("display", "block");
      $(".select_two").css("display", "none");
      $(".select_three").css("display", "none");
      $(".select ul li:nth-child(2) a")
        .css("color", "#AFAFAF")
        .css("textDecoration", "none");
      $(".select ul li:nth-child(3) a")
        .css("color", "#AFAFAF")
        .css("textDecoration", "none");
      $(".select ul li:first-child a")
        .css("color", "#fff")
        .css("textDecoration", "underline");
      return false;
    });
    $(".select_menu ul li:nth-child(2) a").click(function () {
      $(".select_one").css("display", "none");
      $(".select_two").css("display", "block");
      $(".select_three").css("display", "none");
      $(".select ul li:first-child a")
        .css("color", "#AFAFAF")
        .css("textDecoration", "none");
      $(".select ul li:nth-child(3) a")
        .css("color", "#AFAFAF")
        .css("textDecoration", "none");
      $(".select ul li:nth-child(2) a")
        .css("color", "#fff")
        .css("textDecoration", "underline");
      return false;
    });
    $(".select_menu ul li:nth-child(3) a").click(function () {
      $(".select_one").css("display", "none");
      $(".select_two").css("display", "none");
      $(".select_three").css("display", "block");
      $(".select ul li:first-child a")
        .css("color", "#AFAFAF")
        .css("textDecoration", "none");
      $(".select ul li:nth-child(2) a")
        .css("color", "#AFAFAF")
        .css("textDecoration", "none");
      $(".select ul li:nth-child(3) a")
        .css("color", "#fff")
        .css("textDecoration", "underline");
      return false;
    });
  });

  $(function () {
    var $slider = $(".slide_sidebanner ul");
    $firstSlide = $slider
      .find("li")
      .first()
      .stop()
      .animate({ opacity: 1 }, 200);
    function PrevSlide() {
      stopSlide();
      startSlide();
      var $lastSlide = $slider.find("li").last().stop().prependTo($slider);
      $secondSlide = $slider
        .find("li")
        .eq(1)
        .stop()
        .animate({ opacity: 0 }, 400);
      $firstSlide = $slider
        .find("li")
        .first()
        .stop()
        .animate({ opacity: 1 }, 400);
    }
    function NextSlide() {
      stopSlide();
      startSlide();
      var $firstSlide = $slider.find("li").first().stop().appendTo($slider);
      $lastSlide = $slider
        .find("li")
        .last()
        .stop()
        .animate({ opacity: 0 }, 400);
      $firstSlide = $slider
        .find("li")
        .first()
        .stop()
        .animate({ opacity: 1 }, 400);
    }
    $(".btn_prev").on("click", function () {
      PrevSlide();
    });
    $(".btn_next").on("click", function () {
      NextSlide();
    });
    var theInterval;
    startSlide();
    function startSlide() {
      theInterval = setInterval(NextSlide, 4000);
    }
    function stopSlide() {
      clearInterval(theInterval);
    }
    $(".slide_sidebanner ul").hover(
      function () {
        stopSlide();
      },
      function () {
        startSlide();
      }
    );
  });

  $(function () {
    var $slider = $(".turkey_slide ul");
    $firstSlide = $slider
      .find("li")
      .first()
      .stop()
      .animate({ opacity: 1 }, 200);
    function NextSlide() {
      stopSlide();
      startSlide();
      var $firstSlide = $slider.find("li").first().stop().appendTo($slider);
      $lastSlide = $slider
        .find("li")
        .last()
        .stop()
        .animate({ opacity: 0 }, 400);
      $firstSlide = $slider
        .find("li")
        .first()
        .stop()
        .animate({ opacity: 1 }, 400);
    }
    var theInterval;
    startSlide();
    function startSlide() {
      theInterval = setInterval(NextSlide, 3000);
    }
    function stopSlide() {
      clearInterval(theInterval);
    }
  });

  $(function () {
    $(".main_two ul li:first-child").click(function () {
      $(".main_in_one").css("display", "block");
      $(".main_in_two").css("display", "none");
      $(".main_in_three").css("display", "none");
      $(".main_in_four").css("display", "none");
      $(".main_in_five").css("display", "none");
      $(".main_two ul li:first-child")
        .css("color", "rgb(37, 37, 37)")
        .css("font-weight", "bold")
        .css("border", "2px solid rgb(32, 169, 32)");
      $(".main_two ul li:nth-child(2)")
        .css("color", "rgb(150, 150, 150)")
        .css("font-weight", "100")
        .css("border", "1px solid rgb(101, 212, 101");
      $(".main_two ul li:nth-child(3)")
        .css("color", "rgb(150, 150, 150)")
        .css("font-weight", "100")
        .css("border", "1px solid rgb(101, 212, 101");
      $(".main_two ul li:nth-child(4)")
        .css("color", "rgb(150, 150, 150)")
        .css("font-weight", "100")
        .css("border", "1px solid rgb(101, 212, 101");
      $(".main_two ul li:nth-child(5)")
        .css("color", "rgb(150, 150, 150)")
        .css("font-weight", "100")
        .css("border", "1px solid rgb(101, 212, 101");
      return false;
    });
    $(".main_two ul li:nth-child(2)").click(function () {
      $(".main_in_two").css("display", "block");
      $(".main_in_one").css("display", "none");
      $(".main_in_three").css("display", "none");
      $(".main_in_four").css("display", "none");
      $(".main_in_five").css("display", "none");
      $(".main_two ul li:nth-child(2)")
        .css("color", "rgb(37, 37, 37)")
        .css("font-weight", "bold")
        .css("border", "2px solid rgb(32, 169, 32)");
      $(".main_two ul li:first-child")
        .css("color", "rgb(150, 150, 150)")
        .css("font-weight", "100")
        .css("border", "1px solid rgb(101, 212, 101");
      $(".main_two ul li:nth-child(3)")
        .css("color", "rgb(150, 150, 150)")
        .css("font-weight", "100")
        .css("border", "1px solid rgb(101, 212, 101");
      $(".main_two ul li:nth-child(4)")
        .css("color", "rgb(150, 150, 150)")
        .css("font-weight", "100")
        .css("border", "1px solid rgb(101, 212, 101");
      $(".main_two ul li:nth-child(5)")
        .css("color", "rgb(150, 150, 150)")
        .css("font-weight", "100")
        .css("border", "1px solid rgb(101, 212, 101");
      return false;
    });
    $(".main_two ul li:nth-child(3)").click(function () {
      $(".main_in_three").css("display", "block");
      $(".main_in_one").css("display", "none");
      $(".main_in_two").css("display", "none");
      $(".main_in_four").css("display", "none");
      $(".main_in_five").css("display", "none");
      $(".main_two ul li:nth-child(3)")
        .css("color", "rgb(37, 37, 37)")
        .css("font-weight", "bold")
        .css("border", "2px solid rgb(32, 169, 32)");
      $(".main_two ul li:first-child")
        .css("color", "rgb(150, 150, 150)")
        .css("font-weight", "100")
        .css("border", "1px solid rgb(101, 212, 101");
      $(".main_two ul li:nth-child(2)")
        .css("color", "rgb(150, 150, 150)")
        .css("font-weight", "100")
        .css("border", "1px solid rgb(101, 212, 101");
      $(".main_two ul li:nth-child(4)")
        .css("color", "rgb(150, 150, 150)")
        .css("font-weight", "100")
        .css("border", "1px solid rgb(101, 212, 101");
      $(".main_two ul li:nth-child(5)")
        .css("color", "rgb(150, 150, 150)")
        .css("font-weight", "100")
        .css("border", "1px solid rgb(101, 212, 101");
      return false;
    });
    $(".main_two ul li:nth-child(4)").click(function () {
      $(".main_in_four").css("display", "block");
      $(".main_in_one").css("display", "none");
      $(".main_in_two").css("display", "none");
      $(".main_in_three").css("display", "none");
      $(".main_in_five").css("display", "none");
      $(".main_two ul li:nth-child(4)")
        .css("color", "rgb(37, 37, 37)")
        .css("font-weight", "bold")
        .css("border", "2px solid rgb(32, 169, 32)");
      $(".main_two ul li:first-child")
        .css("color", "rgb(150, 150, 150)")
        .css("font-weight", "100")
        .css("border", "1px solid rgb(101, 212, 101");
      $(".main_two ul li:nth-child(2)")
        .css("color", "rgb(150, 150, 150)")
        .css("font-weight", "100")
        .css("border", "1px solid rgb(101, 212, 101");
      $(".main_two ul li:nth-child(3)")
        .css("color", "rgb(150, 150, 150)")
        .css("font-weight", "100")
        .css("border", "1px solid rgb(101, 212, 101");
      $(".main_two ul li:nth-child(5)")
        .css("color", "rgb(150, 150, 150)")
        .css("font-weight", "100")
        .css("border", "1px solid rgb(101, 212, 101");
      return false;
    });
    $(".main_two ul li:nth-child(5)").click(function () {
      $(".main_in_five").css("display", "block");
      $(".main_in_one").css("display", "none");
      $(".main_in_two").css("display", "none");
      $(".main_in_four").css("display", "none");
      $(".main_in_three").css("display", "none");
      $(".main_two ul li:nth-child(5)")
        .css("color", "rgb(37, 37, 37)")
        .css("font-weight", "bold")
        .css("border", "2px solid rgb(32, 169, 32)");
      $(".main_two ul li:first-child")
        .css("color", "rgb(150, 150, 150)")
        .css("font-weight", "100")
        .css("border", "1px solid rgb(101, 212, 101");
      $(".main_two ul li:nth-child(2)")
        .css("color", "rgb(150, 150, 150)")
        .css("font-weight", "100")
        .css("border", "1px solid rgb(101, 212, 101");
      $(".main_two ul li:nth-child(4)")
        .css("color", "rgb(150, 150, 150)")
        .css("font-weight", "100")
        .css("border", "1px solid rgb(101, 212, 101");
      $(".main_two ul li:nth-child(3)")
        .css("color", "rgb(150, 150, 150)")
        .css("font-weight", "100")
        .css("border", "1px solid rgb(101, 212, 101");
      return false;
    });
  });

  $(function () {
    $("#side_banner_right li:first-child").click(function () {
      $("html,body").animate({ scrollTop: 0 }, 500, "swing");
    });
  });

  $(function () {
    var $slider = $(".search_right ul");
    $firstSlide = $slider
      .find("li")
      .first()
      .stop()
      .animate({ opacity: 1 }, 500);
    function NextSlide() {
      stopSlide();
      startSlide();
      var $firstSlide = $slider.find("li").first().stop().appendTo($slider);
      $lastSlide = $slider
        .find("li")
        .last()
        .stop()
        .animate({ opacity: 0 }, 400);
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
    function stopSlide() {
      clearInterval(theInterval);
    }
  });
});
