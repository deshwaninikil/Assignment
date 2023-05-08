var counter;
// ----------------------Start function for form validation ------------------------

var formValid = 1,
  dataInput = {},
  hashId = "";
function validateForm(thisId) {
  var txtVal = $.trim(thisId.val());
  var txtName = thisId.attr("name");
  var txtRel = thisId.attr("rel");
  var dataLabel = thisId.attr("data-label");
  var placeHolderVal = thisId.attr("placeholder");
  thisId.closest(".form-group").find(".errormsg").hide();
  if (txtVal && txtVal != "0" && txtVal != placeHolderVal) {
    thisId.css("color", "#000");
    switch (txtRel) {
      case "email":
        var reg4 =
          /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+/gi;
        var regZero = /^[0]+$/gi;
        if (
          txtVal &&
          txtVal != placeHolderVal &&
          (!reg4.test(txtVal) || regZero.test(txtVal))
        ) {
          errMsg = dataLabel + " is not in valid format.";
          thisId.closest(".form-group").find(".errormsg").html(errMsg).show();
          formValid = 0;
        }
        break;
      case "phoneno":
        var reg6 = /^[6789]\d{9}$/;
        var regZero = /^[0]+$/gi;
        if (
          txtVal &&
          txtVal != placeHolderVal &&
          (!reg6.test(txtVal) || regZero.test(txtVal))
        ) {
          errMsg = dataLabel + " is not in valid format.";
          thisId.closest(".form-group").find(".errormsg").html(errMsg).show();
          formValid = 0;
        }
        break;
      default:
        if (txtVal && txtVal != placeHolderVal) {
          thisId.closest(".form-group").find(".errormsg").html(errMsg).hide();
        }
        break;

      case "where":
      case "when":
        break;
    }
  } else {
    if (thisId.attr("data-rel") == "required") {
      if (thisId.is("select")) {
        errMsg = dataLabel;
      } else {
        errMsg = dataLabel + " cannot be blank.";
      }
      thisId.closest(".form-group").find(".errormsg").html(errMsg).show();
      formValid = 0;
    }
  }
  return false;
}
// ----------------------End function for form validation -----------------------
// -------------------------Start Register Form js -----------------------------
$(".registerBtn0").click(function () {
  console.log("click");
  var formNameInput = $(this)
    .closest(".dpLocation")
    .find('input[type="text"],select, textarea');
  errMsg = "";
  formValid = 1;
  $(formNameInput).each(function () {
    validateForm($(this));
  });
});

// -------------------------End Register Form js -----------------------------
// ----------------------Start video tab ------------------------------------------------

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// ----------------------End video tab --------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------Start Document Ready Func ----------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------

$(document).ready(function () {
  // ----------------------Start Registration Form Js inside document ready------------------------

  $(".closereg").click(function () {
    $("#refformmodel").hide().removeClass("in");
    $(".modal-backdrop").remove();
    $("#webinarRegistration").show();
    $("input,select,textarea").val("");
    $("body").removeClass("overflowhide");
  });

  $(document).on("blur", 'input[type="text"],textarea,select', function (e) {
    errMsg = "";
    validateForm($(this));
  });

  // ----------------------End Registration Form Js inside document ready------------------------

  try {
    // ----------------------Start key video Homepage ------------------------
    var numSlick = 0;
    $(".keySlider").each(function () {
      numSlick++;
      $(this)
        .addClass("slider-" + numSlick)
        .slick({
          arrows: true,
          dots: true,
          appendDots: $(this)
            .siblings(".keySliderbutton")
            .find(".keySliderDots"),
          appendArrows: $(this).siblings(".keyLeftRightIcons"),
          autoplay: false,
          infinite: true,
          slidesToShow: 5.3,
          slidesToScroll: 1,
          // centerPadding: '30px',
          responsive: [
            {
              breakpoint: 900,
              settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1.8,
                slidesToScroll: 1,
                centerMode: false,
              },
            },
            {
              breakpoint: 569,
              settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1.8,
                slidesToScroll: 1,
              },
            },
          ],
        });
    });

    // ----------------------End key video Homepage ------------------------------------------

    // -------------------------Start Smooth Scrolling to #id js -----------------------------
    $('.scrollnavTo[href^="#"]').on("click", function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      $(this).parent().siblings().removeClass("active");
      $(this).parent().addClass("active");
      $(".collesped_menu").removeClass("open_menu");
      $(".menubtn").removeClass("open");
      $("body").removeClass("overflowhide");
      var target = this.hash;
      var $target = $(target);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top - 70,
          },
          900,
          "swing",
          function () {}
        );
    });

    // -------------------------End Smooth Scrolling to #id js --------------------------------

    // ----------------------start Video popup js ------------------------
    $(".vidPop, .video-btn").click(function () {
      $(".videoContainer")
        .find("iframe")
        .attr(
          "src",
          "/spotlight/videodash.cms?channel=10001&videosection=videoshow&autoplay=1&audio=1&skipAd=true&kalstream=PROGRESSIVE&msid=" +
            $(this).attr("data-src")
        );
      $(".videoContainer").find("p").text($(this).attr("data-title"));
      $(".background,.videoContainer").show();
      $("body").addClass("overflowhide");
    });
    $(".background .closePop").click(function (e) {
      e.preventDefault();
      $(".background,.popupQuery,.videoContainer").hide();
      $(".videoContainer").find("iframe").attr("src", "");
      $(".videoContainer").find("p").text("");
      $("body").removeClass("overflowhide");
    });

    // ----------------------End Video popup js ------------------------

    // ----------------------Start Social Share js ------------------------

    $(".popupopen").click(function (event) {
      event.preventDefault();
      window.open(
        $(this).attr("href"),
        "mypopup",
        "toolbar=0,status=0,width=548,height=325"
      );
    });
    //Tiny URL for twitter
    $(".TwitterBtn").each(function (c, obj) {
      $.getJSON(
        "https://etsearch.indiatimes.com/etspeeds/tiny.ep?outputtype=json&callback=?&url=" +
          $(obj).attr("data-url"),
        function (data) {
          $(obj).attr(
            "href",
            "https://twitter.com/intent/tweet?text=" +
              escape($(obj).attr("data-text")) +
              "&url=" +
              data.output +
              "&counturl=" +
              $(obj).attr("data-url")
          );
        }
      );
    });

    $(".whatsap").click(function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      window.open(
        "https://api.whatsapp.com//send?text=" +
          encodeURIComponent(
            $(this).attr("data-text") + " " + $(this).attr("data-url")
          ),
        "mypopup",
        "toolbar=0,status=0,width=548,height=325"
      );
    });
    if ($(window).width() > 769) {
      $(".ytVideo iframe").height($(window).height() - 90);
      $(".ytVideo").height($(window).height() - 80);
    }

    // ----------------------End Social Share js ------------------------
  } catch (e) {
    console.log("Window Error: ", e);
  }

  // ----------------------Start Fixed Nav ------------------------
  if (window.innerWidth < 960) {
    if ($(".fixednav").length) {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 236) {
          $(".fixednav").addClass("navbgwht");
        } else {
          $(".fixednav").removeClass("navbgwht");
        }
      });
    }
  } else {
    if ($(".fixednav").length) {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 66) {
          $(".fixednav").addClass("navbgwht");
        } else {
          $(".fixednav").removeClass("navbgwht");
        }
      });
    }
  }

  // --------------------------End Fixed Nav ----------------------------
  // -------------------------Start On scroll add class to Main Nav -----------------------------
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll >= 95) {
      // If page is scrolled more than 108px
      $(".fixednav").addClass("sticky");
    } else {
      $(".fixednav").removeClass("sticky");
    }
  });
  // -------------------------End On scroll add class to Main Nav -----------------------------
  // ----------------------Start Menu slide from right ------------------------
  $(".menubtn").click(function () {
    $(this).toggleClass("open");
    $(".collesped_menu").toggleClass("open_menu");
    $("body").toggleClass("overflowhide");
  });
  $(".toggle_menu").click(function (e) {
    e.stopImmediatePropagation();
    if ($(this).hasClass("menu_active")) {
      $(this).removeClass("menu_active");
      $(this).find(">ul").slideUp();
    } else {
      $(this).addClass("menu_active");
      $(this).find(">ul").slideDown();
    }
  });
  $(".mainmenu > li").click(function (e) {
    e.stopImmediatePropagation();
    if (
      $(".toggle_menu").hasClass("menu_active") &&
      !$(this).closest(".mainmenu li").hasClass("menu_active_sub")
    ) {
      $(this).closest(".mainmenu li").addClass("menu_active_sub");
      $(this).find(".submenu").slideDown();
    } else if (
      $(".toggle_menu").hasClass("menu_active") &&
      $(this).closest(".mainmenu li").hasClass("menu_active_sub")
    ) {
      $(this).closest(".mainmenu li").removeClass("menu_active_sub");
      $(this).find(".submenu").slideUp();
    }
  });
  $(".collesped_menu").mouseup(function (e) {
    var container = $(".mobbg");

    if (
      !$(".menubtn").is(e.target) &&
      !container.is(e.target) &&
      container.has(e.target).length === 0
    ) {
      console.log(1);
      $(".menubtn").removeClass("open");
      $(".collesped_menu").removeClass("open_menu");
      $("body").removeClass("overflowhide");
    }
  });

  // ----------------------End Menu slide from right ------------------------

  // ----------------------End Menu slide from right ------------------------

  $(".open-button").click(function () {
    $(".registerFormPopUp")
      .addClass("in")
      .append('<div class="modal-backdrop fade in"></div>')
      .show();
    $("body").addClass("overflowhide");
  });

  $(".closeregpop").click(function () {
    $(".registerFormPopUp").hide().removeClass("in");
    $(".modal-backdrop").remove();
    $(".resiterationElements .form-group input").val("");
    $(".errormsg").html("").hide();
    $("body").removeClass("overflowhide");
    $(".expressIntrstMain").show();
    // location.reload();
  });

  //-------------------------------------------------------------------------------------------------------------------------------------------------------
});
// ------------------------------------------------------------------------End Document Ready Func -------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------
