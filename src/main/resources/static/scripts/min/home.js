!function(t){var n=0;t(window).scroll(function(o){var e=t(window).scrollTop();10<e?t("body").addClass("scrolled"):t("body").removeClass("scrolled"),n<e?t("body").removeClass("scrolling_top"):t("body").addClass("scrolling_top"),n=e});var o=1024<t(window).width()?"20%":"10%";t(".footer").viewportChecker({classToAdd:"inView",offset:o}),t(document).ready(function(){pgs_.hash_scroll(),pgs_.menuscrollToDiv(),pgs_.scroll_menu_active(),pgs_.burgger_menu(),pgs_.scroll_progress(),pgs_.scroll_progressTwo(),pgs_.window_hash_smooth_scroll(),t("[data-fancybox-modal]").fancybox({modal:!0,showCloseButton:!0,beforeShow:function(){t("body").css({"overflow-y":"hidden"})},afterClose:function(){t("body").css({"overflow-y":"visible"})}}),t("[data-fancybox-modal-v2]").fancybox({toolbar:!0,buttons:["close"],beforeShow:function(){t("body").css({"overflow-y":"hidden"})},afterClose:function(){t("body").css({"overflow-y":"visible"})}}),10<t(window).scrollTop()?t("body").addClass("scrolled"):t("body").removeClass("scrolled"),pgs_.bodyVariable(),window.addEventListener("resize",function(){pgs_.bodyVariable()}),console.log("%c Developed by PGS (http://pgsuae.com/)","background: #45d98e; color: #fff;")})}(jQuery);var viewport=window.innerWidth,pgs_={bodyVariable:function(o){setTimeout(function(){$("body").css("--top_off",$("header").outerHeight()+"px"),$("body").css("--logo_h",$(".navbar-brand").outerHeight()+"px"),$("body").css("--footer_h",$("footer").outerHeight()+"px"),pgs_.window_hash_smooth_scroll()},350)},number_counter:function(o){var e=0,t=o.dataset.number,n=Math.abs(Math.floor(3e3/t)),s=setInterval(function(){e+=1,(o.textContent=e)==o.dataset.number&&clearInterval(s)},n)},hash_scroll:function(){$("[data-scroll]").on("click",function(o){var e=$(this).data("scroll");$(e).length&&($("html, body").stop().animate({scrollTop:$(e).offset().top},500),o.preventDefault())})},burgger_menu:function(){$("body").on("click",".menu_trigger",function(o){var e=$(this),t=e.data("traget");e.toggleClass("active_"),$("body").toggleClass("menu_open"),$("#"+t).toggleClass("show")})},menuscrollToDiv:function(){$("body").on("click",".nav-link.scroll",function(o){o.preventDefault(),$(document).off("scroll"),$("body").toggleClass("menu_open"),$(".nav_box_wrapper").toggleClass("show"),$(".menu_trigger").toggleClass("active_"),$(this).closest(".navbar-nav").length&&($(".navbar-nav a.scroll").each(function(){$(this).parent().removeClass("active")}),$(this).parent().addClass("active"));var e=$(this).attr("data-href"),t=$(e);$(e).length?$("html, body").stop().animate({scrollTop:t.offset().top},500,"swing",function(){$(document).on("scroll"),$("body").hasClass("menu_open")&&$(".menu_trigger").trigger("click")}):window.location.href=$(this).attr("href")})},scroll_menu_active:function(){var n,s=$(".navbar-nav").find("a"),a=s.map(function(){var o=$($(this).attr("data-href"));if(o.length)return o}),r=100;1024<viewport?r=100:viewport<1024&&(r=$("header").outerHeight()),$(window).scroll(function(){var o=$(this).scrollTop()+r,e=a.map(function(){if($(this).offset().top<o)return this}),t=(e=e[e.length-1])&&e.length?e[0].id:"";n!==t&&(n=t,s.parent().removeClass("active").end().filter("[data-href='#"+t+"']").parent().addClass("active"))})},scroll_progress:function(){jQuery(".progress-wrap-v2").on("click",function(o){return o.preventDefault(),jQuery("html, body").animate({scrollTop:0},550),!1})},scroll_progressTwo:function(){var o=document.querySelector(".scroll-wrap"),e=document.querySelector(".social-wrap");if(o||e){var t=function(){var o=$(window).scrollTop(),e=$(document).height()-$(window).height();offsetTwo=o-e,Math.round(o)>=e?(jQuery(".scroll-wrap").removeClass("active-scroll"),jQuery(".social-wrap").addClass("active-height")):(jQuery(".scroll-wrap").addClass("active-scroll"),jQuery(".social-wrap").removeClass("active-height"))};t(),$(window).scroll(t)}},progress_circle:function(){$(".footer_box").find("[data-percentage]").each(function(){var o=$(this),e=parseFloat(o.attr("data-percentage")),t=o.find(".number_ span"),n=(185-185*e/100).toFixed(2);o.hasClass("anim_done")||(o.find(".progress_").removeAttr("style"),setTimeout(function(){o.find(".progress_").css("stroke-dashoffset",n)},800),t.empty(),$({percentage:0}).stop(!0).animate({percentage:e},{duration:2e3,step:function(){var o=Math.round(10*this.percentage)/10;t.text(o)}}).promise().done(function(){t.text(e),o.addClass("anim_done")}))})},word_count:function(o){var e=o.match(/\S+/g);return{charactersNoSpaces:o.replace(/\s+/g,"").length,characters:o.length,words:e?e.length:0,lines:o.split(/\r*\n/).length}},word_lenght:function(){$("[data-length]").each(function(){var e=$(this),t=e.data("length");e.on("change paste keyup",function(){var o=pgs_.word_count(this.value);e.closest(".input-field").find(".character-counter").text(o.words+"/"+t),t<o.words?e.addClass("invalid"):e.removeClass("invalid")})})},height_into_width:function(){$("[data-h_into_w]").each(function(){var o=$(this),e=o.height();o.css("width",e)})},window_hash_smooth_scroll:function(){setTimeout(function(){var o=window.location.hash,e=$(o);e.length&&$("html, body").stop().animate({scrollTop:e.offset().top},500,function(){$("body").removeClass("scrolling_top")})},50)}};!function(o){o(function(){setTimeout(function(){o("body").addClass("loadScale"),setTimeout(function(){o("body").addClass("is-loaded"),setTimeout(function(){o(".loader").remove()},600)},600)},100)})}(jQuery);