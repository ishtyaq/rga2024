(function ($) {
  var lastScrollTop = 0;
  $(window).scroll(function (e) {
    var scrollY = $(window).scrollTop();

    scrollY > 10
      ? $("body").addClass("scrolled")
      : $("body").removeClass("scrolled");

    if (scrollY > lastScrollTop) {
      $("body").removeClass("scrolling_top");
    } else {
      $("body").addClass("scrolling_top");
    }
    lastScrollTop = scrollY;
  });

  var off_ = $(window).width() > 1024 ? "20%" : "10%";
  $(".footer").viewportChecker({
    classToAdd: "inView",
    offset: off_,
  });

  $(document).ready(function () {
    //Link click
    pgs_.hash_scroll();

    // Menu link smooth scroll click
    pgs_.menuscrollToDiv();

    // Scroll Menu active
    pgs_.scroll_menu_active();

    // Burger menu click
    pgs_.burgger_menu();

    // Input word counter
    //pgs_.word_lenght();

    //Scroll back to top
    pgs_.scroll_progress();
    pgs_.scroll_progressTwo();

    pgs_.window_hash_smooth_scroll();

    // // mobile menu animation
    // if ($(window).width() <= 767) {
    //   setInterval(function () {
    //     $("header").toggleClass("logo_swap");
    //   }, 5000);
    // }

    $("[data-fancybox-modal]").fancybox({
      modal: true,
      showCloseButton: true,
      // afterLoad: function () {
      //   // check scroll
      //   pgs_.popupscrollFade();
      // },
      beforeShow: function () {
        $("body").css({ "overflow-y": "hidden" });
      },
      afterClose: function () {
        $("body").css({ "overflow-y": "visible" });
      },
    });

    $("[data-fancybox-modal-v2]").fancybox({
      toolbar: true,
      buttons: ["close"],
      beforeShow: function () {
        $("body").css({ "overflow-y": "hidden" });
      },
      afterClose: function () {
        $("body").css({ "overflow-y": "visible" });
      },
    });

    // check page load scroll position
    var scrollY = $(window).scrollTop();
    scrollY > 10
      ? $("body").addClass("scrolled")
      : $("body").removeClass("scrolled");

    // body variable
    pgs_.bodyVariable();
    window.addEventListener("resize", function () {
      pgs_.bodyVariable();
    });

    //Signature
    console.log(
      "%c Developed by PGS (http://pgsuae.com/)",
      "background: #45d98e; color: #fff;"
    );
  });
})(jQuery);

var viewport = window.innerWidth;
var pgs_ = {
  // popupscrollFade: function () {
  //   var parentH = $(".bio-popup .mItem").height();
  //   var childH = 0;
  //   var child = $(".bio-popup .mItem").children();

  //   child.each(function (index) {
  //     childH += $(this).height();
  //   });

  //   $(".bio-popup .mItem").bind("scroll", function () {
  //     if (
  //       $(this).scrollTop() + $(this).innerHeight() >=
  //       $(this)[0].scrollHeight
  //     ) {
  //       $(".bio-popup .mItem").addClass("removeGradiant");
  //     } else {
  //       $(".bio-popup .mItem").removeClass("removeGradiant");
  //     }
  //   });

  //   if (parentH >= childH) {
  //     $(".bio-popup .mItem").addClass("removeGradiant");
  //   } else {
  //     $(".bio-popup .mItem").removeClass("removeGradiant");
  //   }

  //   // if ($(".bio-popup").height() < 600) {
  //   //   $(".bio-popup .mItem").addClass("removeGradiant");
  //   // } else {
  //   //   $(".bio-popup .mItem").removeClass("removeGradiant");
  //   // }
  // },
  bodyVariable: function (el) {
    // header offest

    setTimeout(function () {
      $("body").css("--top_off", $("header").outerHeight() + "px");
      $("body").css("--logo_h", $(".navbar-brand").outerHeight() + "px");
      $("body").css("--footer_h", $("footer").outerHeight() + "px");

      pgs_.window_hash_smooth_scroll();
    }, 350);
  },
  number_counter: function (el) {
    var current = 0,
      range = el.dataset.number,
      increment = 1,
      step = Math.abs(Math.floor(3000 / range));

    var timer = setInterval(function () {
      current += increment;
      el.textContent = current;

      if (current == el.dataset.number) {
        clearInterval(timer);
      }
    }, step);
  },
  hash_scroll: function () {
    $("[data-scroll]").on("click", function (e) {
      var this_ = $(this),
        target_ = this_.data("scroll");

      if ($(target_).length) {
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $(target_).offset().top,
            },
            500
          );
        e.preventDefault();
      }
    });
  },
  burgger_menu: function () {
    // Bugger Menu click
    $("body").on("click", ".menu_trigger", function (e) {
      var this_ = $(this),
        target_ = this_.data("traget");

      this_.toggleClass("active_");
      $("body").toggleClass("menu_open");
      $("#" + target_).toggleClass("show");
    });
  },
  menuscrollToDiv: function () {
    $("body").on("click", ".nav-link.scroll", function (e) {
      e.preventDefault();
      $(document).off("scroll");
      $("body").toggleClass("menu_open");
      $(".nav_box_wrapper").toggleClass("show");
      $(".menu_trigger").toggleClass("active_");
      if ($(this).closest(".navbar-nav").length) {
        $(".navbar-nav a.scroll").each(function () {
          $(this).parent().removeClass("active");
        });
        $(this).parent().addClass("active");
      }

      //  new scripts
      var target = $(this).attr("data-href");
      var $target = $(target);

      if (!$(target).length) {
        window.location.href = $(this).attr("href");
      } else {
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $target.offset().top,
            },
            500,
            "swing",
            function () {
              $(document).on("scroll");
              // remove the menu active
              if ($("body").hasClass("menu_open")) {
                $(".menu_trigger").trigger("click");
              }
            }
          );
      }
    });
  },
  scroll_menu_active: function () {
    var lastId,
      topMenu = $(".navbar-nav"),
      menuItems = topMenu.find("a"),
      scrollItems = menuItems.map(function () {
        var item = $($(this).attr("data-href"));
        if (item.length) {
          return item;
        }
      });
    var offset = 100;
    if (viewport > 1024) {
      offset = 100;
    } else if (viewport < 1024) {
      offset = $("header").outerHeight();
    }

    $(window).scroll(function () {
      var fromTop = $(this).scrollTop() + offset;
      var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop) return this;
      });
      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : "";
      if (lastId !== id) {
        lastId = id;
        menuItems
          .parent()
          .removeClass("active")
          .end()
          .filter("[data-href='#" + id + "']")
          .parent()
          .addClass("active");
      }
    });
  },
  scroll_progress: function () {
    // if (progressPath) {
    //   var pathLength = progressPath.getTotalLength();
    //   progressPath.style.transition = progressPath.style.WebkitTransition =
    //     "none";
    //   progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    //   progressPath.style.strokeDashoffset = pathLength;
    //   progressPath.getBoundingClientRect();
    //   progressPath.style.transition = progressPath.style.WebkitTransition =
    //     "stroke-dashoffset 10ms linear";
    //   var updateProgress = function () {
    //     var scroll = $(window).scrollTop();
    //     var height = $(document).height() - $(window).height();
    //     var progress = pathLength - (scroll * pathLength) / height;
    //     progressPath.style.strokeDashoffset = progress;
    //   };
    //   updateProgress();
    //   $(window).scroll(updateProgress);
    //   var offset = 50;
    //   var duration = 550;
    //   jQuery(window).on("scroll", function () {
    //     if (jQuery(this).scrollTop() > offset) {
    //       jQuery(".progress-wrap").addClass("active-progress");
    //     } else {
    //       jQuery(".progress-wrap").removeClass("active-progress");
    //     }
    //   });
    //   jQuery(".progress-wrap-v2").on("click", function (event) {
    //     event.preventDefault();
    //     jQuery("html, body").animate(
    //       {
    //         scrollTop: 0,
    //       },
    //       duration
    //     );
    //     return false;
    //   });
    // }

    var duration = 550;
    jQuery(".progress-wrap-v2").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate(
        {
          scrollTop: 0,
        },
        duration
      );
      return false;
    });
  },

  scroll_progressTwo: function () {
    var scrollWrap = document.querySelector(".scroll-wrap");
    var socialWrap = document.querySelector(".social-wrap");
    if (scrollWrap || socialWrap) {
      var updateScrollWrap = function () {
        var offset = 50;
        var duration = 550;
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        offsetTwo = scroll - height;
        if (Math.round(scroll) >= height) {
          jQuery(".scroll-wrap").removeClass("active-scroll");
          jQuery(".social-wrap").addClass("active-height");
        } else {
          jQuery(".scroll-wrap").addClass("active-scroll");
          jQuery(".social-wrap").removeClass("active-height");
        }
      };
      updateScrollWrap();
      $(window).scroll(updateScrollWrap);
    }
  },

  progress_circle: function () {
    $(".footer_box")
      .find("[data-percentage]")
      .each(function () {
        var this_ = $(this),
          circle_limit = 185,
          val = parseFloat(this_.attr("data-percentage")),
          number_place = this_.find(".number_ span"),
          calc_per = (circle_limit - (circle_limit * val) / 100).toFixed(2);

        if (this_.hasClass("anim_done")) return;

        this_.find(".progress_").removeAttr("style");
        setTimeout(function () {
          this_.find(".progress_").css("stroke-dashoffset", calc_per);
        }, 800);
        // Number animation
        number_place.empty();

        $({ percentage: 0 })
          .stop(true)
          .animate(
            { percentage: val },
            {
              duration: 2000,
              step: function () {
                var percentageVal = Math.round(this.percentage * 10) / 10;
                number_place.text(percentageVal);
              },
            }
          )
          .promise()
          .done(function () {
            number_place.text(val);
            this_.addClass("anim_done");
          });
      });
  },
  word_count: function (val) {
    var wom = val.match(/\S+/g);

    return {
      charactersNoSpaces: val.replace(/\s+/g, "").length,
      characters: val.length,
      words: wom ? wom.length : 0,
      lines: val.split(/\r*\n/).length,
    };
  },
  word_lenght: function () {
    $("[data-length]").each(function () {
      var this_ = $(this),
        max_ch = this_.data("length");
      this_.on("change paste keyup", function () {
        var v = pgs_.word_count(this.value);
        this_
          .closest(".input-field")
          .find(".character-counter")
          .text(v.words + "/" + max_ch);

        if (max_ch < v.words) {
          this_.addClass("invalid");
        } else {
          this_.removeClass("invalid");
        }
      });
    });
  },
  height_into_width: function () {
    $("[data-h_into_w]").each(function () {
      var this_ = $(this),
        h_ = this_.height();
      this_.css("width", h_);
    });
  },
  window_hash_smooth_scroll: function () {
    setTimeout(function () {
      var hash = window.location.hash,
        this_ = $(hash);
      if (this_.length) {
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: this_.offset().top,
            },
            500,
            function () {
              $("body").removeClass("scrolling_top");
            }
          );
      }
    }, 50);
  },
};
