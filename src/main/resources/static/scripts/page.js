!function($) {
    var lastScrollTop = 0;
    $(window).scroll(function(e) {
        var scrollY = $(window).scrollTop();
        10 < scrollY ? $("body").addClass("scrolled") : $("body").removeClass("scrolled"), 
        lastScrollTop < scrollY ? $("body").removeClass("scrolling_top") : $("body").addClass("scrolling_top"), 
        lastScrollTop = scrollY;
    });
    var off_ = 1024 < $(window).width() ? "20%" : "10%";
    $(".footer").viewportChecker({
        classToAdd: "inView",
        offset: off_
    }), $(document).ready(function() {
        pgs_.hash_scroll(), pgs_.menuscrollToDiv(), pgs_.scroll_menu_active(), pgs_.burgger_menu(), 
        pgs_.scroll_progress(), pgs_.scroll_progressTwo(), pgs_.window_hash_smooth_scroll(), 
        $("[data-fancybox-modal]").fancybox({
            modal: !0,
            showCloseButton: !0,
            beforeShow: function() {
                $("body").css({
                    "overflow-y": "hidden"
                });
            },
            afterClose: function() {
                $("body").css({
                    "overflow-y": "visible"
                });
            }
        }), $("[data-fancybox-modal-v2]").fancybox({
            toolbar: !0,
            buttons: [ "close" ],
            beforeShow: function() {
                $("body").css({
                    "overflow-y": "hidden"
                });
            },
            afterClose: function() {
                $("body").css({
                    "overflow-y": "visible"
                });
            }
        }), 10 < $(window).scrollTop() ? $("body").addClass("scrolled") : $("body").removeClass("scrolled"), 
        pgs_.bodyVariable(), window.addEventListener("resize", function() {
            pgs_.bodyVariable();
        }), console.log("%c Developed by PGS (http://pgsuae.com/)", "background: #45d98e; color: #fff;");
    });
}(jQuery);

var viewport = window.innerWidth, pgs_ = {
    bodyVariable: function(el) {
        setTimeout(function() {
            $("body").css("--top_off", $("header").outerHeight() + "px"), $("body").css("--logo_h", $(".navbar-brand").outerHeight() + "px"), 
            $("body").css("--footer_h", $("footer").outerHeight() + "px"), pgs_.window_hash_smooth_scroll();
        }, 350);
    },
    number_counter: function(el) {
        var current = 0, range = el.dataset.number, step = Math.abs(Math.floor(3e3 / range)), timer = setInterval(function() {
            current += 1, (el.textContent = current) == el.dataset.number && clearInterval(timer);
        }, step);
    },
    hash_scroll: function() {
        $("[data-scroll]").on("click", function(e) {
            var target_ = $(this).data("scroll");
            $(target_).length && ($("html, body").stop().animate({
                scrollTop: $(target_).offset().top
            }, 500), e.preventDefault());
        });
    },
    burgger_menu: function() {
        $("body").on("click", ".menu_trigger", function(e) {
            var this_ = $(this), target_ = this_.data("traget");
            this_.toggleClass("active_"), $("body").toggleClass("menu_open"), $("#" + target_).toggleClass("show");
        });
    },
    menuscrollToDiv: function() {
        $("body").on("click", ".nav-link.scroll", function(e) {
            e.preventDefault(), $(document).off("scroll"), $(this).closest(".navbar-nav").length && ($(".navbar-nav a.scroll").each(function() {
                $(this).parent().removeClass("active");
            }), $(this).parent().addClass("active"));
            var target = $(this).attr("data-href"), $target = $(target);
            $(target).length ? $("html, body").stop().animate({
                scrollTop: $target.offset().top
            }, 500, "swing", function() {
                $(document).on("scroll"), $("body").hasClass("menu_open") && $(".menu_trigger").trigger("click");
            }) : window.location.href = $(this).attr("href");
        });
    },
    scroll_menu_active: function() {
        var lastId, menuItems = $(".navbar-nav").find("a"), scrollItems = menuItems.map(function() {
            var item = $($(this).attr("data-href"));
            if (item.length) return item;
        }), offset = 100;
        1024 < viewport ? offset = 100 : viewport < 1024 && (offset = $("header").outerHeight()), 
        $(window).scroll(function() {
            var fromTop = $(this).scrollTop() + offset, cur = scrollItems.map(function() {
                if ($(this).offset().top < fromTop) return this;
            }), id = (cur = cur[cur.length - 1]) && cur.length ? cur[0].id : "";
            lastId !== id && (lastId = id, menuItems.parent().removeClass("active").end().filter("[data-href='#" + id + "']").parent().addClass("active"));
        });
    },
    scroll_progress: function() {
        jQuery(".progress-wrap-v2").on("click", function(event) {
            return event.preventDefault(), jQuery("html, body").animate({
                scrollTop: 0
            }, 550), !1;
        });
    },
    scroll_progressTwo: function() {
        var scrollWrap = document.querySelector(".scroll-wrap"), socialWrap = document.querySelector(".social-wrap");
        if (scrollWrap || socialWrap) {
            var updateScrollWrap = function() {
                var scroll = $(window).scrollTop(), height = $(document).height() - $(window).height();
                offsetTwo = scroll - height, Math.round(scroll) >= height ? (jQuery(".scroll-wrap").removeClass("active-scroll"), 
                jQuery(".social-wrap").addClass("active-height")) : (jQuery(".scroll-wrap").addClass("active-scroll"), 
                jQuery(".social-wrap").removeClass("active-height"));
            };
            updateScrollWrap(), $(window).scroll(updateScrollWrap);
        }
    },
    progress_circle: function() {
        $(".footer_box").find("[data-percentage]").each(function() {
            var this_ = $(this), val = parseFloat(this_.attr("data-percentage")), number_place = this_.find(".number_ span"), calc_per = (185 - 185 * val / 100).toFixed(2);
            this_.hasClass("anim_done") || (this_.find(".progress_").removeAttr("style"), setTimeout(function() {
                this_.find(".progress_").css("stroke-dashoffset", calc_per);
            }, 800), number_place.empty(), $({
                percentage: 0
            }).stop(!0).animate({
                percentage: val
            }, {
                duration: 2e3,
                step: function() {
                    var percentageVal = Math.round(10 * this.percentage) / 10;
                    number_place.text(percentageVal);
                }
            }).promise().done(function() {
                number_place.text(val), this_.addClass("anim_done");
            }));
        });
    },
    word_count: function(val) {
        var wom = val.match(/\S+/g);
        return {
            charactersNoSpaces: val.replace(/\s+/g, "").length,
            characters: val.length,
            words: wom ? wom.length : 0,
            lines: val.split(/\r*\n/).length
        };
    },
    word_lenght: function() {
        $("[data-length]").each(function() {
            var this_ = $(this), max_ch = this_.data("length");
            this_.on("change paste keyup", function() {
                var v = pgs_.word_count(this.value);
                this_.closest(".input-field").find(".character-counter").text(v.words + "/" + max_ch), 
                max_ch < v.words ? this_.addClass("invalid") : this_.removeClass("invalid");
            });
        });
    },
    height_into_width: function() {
        $("[data-h_into_w]").each(function() {
            var this_ = $(this), h_ = this_.height();
            this_.css("width", h_);
        });
    },
    window_hash_smooth_scroll: function() {
        setTimeout(function() {
            var hash = window.location.hash, this_ = $(hash);
            this_.length && $("html, body").stop().animate({
                scrollTop: this_.offset().top
            }, 500, function() {
                $("body").removeClass("scrolling_top");
            });
        }, 50);
    }
};

!function($) {
    $(function() {
        $(window).width();
        $(".pageSection").viewportChecker({
            classToAdd: "inView"
        }), $(".pageBanner").viewportChecker({
            classToAdd: "inView"
        }), setTimeout(function() {
            $("body").addClass("loadScale"), setTimeout(function() {
                $("body").addClass("is-loaded"), setTimeout(function() {
                    $(".loader").remove();
                }, 600);
            }, 600);
        }, 100);
    });
}(jQuery), $(document).on("click", ".cItem.v2", function() {
    var numberIndex = $(this).index();
    $(this).is("active") || ($(".cItem.v2").removeClass("active"), $(".contactAddSectionSec .addInfoSec").removeClass("active"), 
    $(".mapDots").removeClass("active"), $(this).addClass("active"), $(".contactAddSectionSec").find(".addInfoSec:eq(" + numberIndex + ")").addClass("active"), 
    $(".svgMap").find(".mapDots:eq(" + numberIndex + ")").addClass("active"));
});