/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
!(function(i){"use strict";var t,o="",s=!1;i((function(){if((s=i("html").hasClass("sound-effects"))&&(document.createElement("audio").setAttribute("src",i("html").data("audio-wind")),(t=document.createElement("audio")).setAttribute("src",i("html").data("audio-wind-reverse")),document.createElement("audio").setAttribute("src",i("html").data("audio-tick"))),i(".header-wrap > img").length&&i(".header").css("background-image","url("+i(".header-wrap > img").attr("src")+")"),NProgress.start(),i("html").hasClass("one-page-layout")){var e=i(".cover-media").data("image-url");if(void 0!==e){var a=new Image;a.src=e,a.onload=function(){i("html").addClass("is-card-loaded"),i(".card-3d-right-side, .card-3d-bottom-side").css("background-image","url("+e+")"),i(".cover-media").css("background-image","url("+e+")").addClass("is-image-loaded")}}isMobile()&&(i(".one-page-layout .cover-media").height(i(window).height()),i(window).on("resize",(function(){i(".one-page-layout .cover-media").height(i(window).height())}))),i("#card-open, .cover-link").on("click",(function(e){e.preventDefault(),showCard()})),i(".close-card").on("click",(function(){return i("html").removeClass("is-card-open is-card-opened"),i(".close-card").removeClass("is-visible"),s&&t.play(),closePage(),!1})),i(".card-nav li").each((function(e,a){var t=i(this).find("a"),o=t.attr("href"),s=t.data("slug");t.attr("href","#/"+s),t.data("file-url",o)})),o=i("#portfolio-link").data("slug"),setActivePage(),i.address.change((function(){setActivePage();var e=giveDetailUrl();-1!==e?showProjectDetails(e):i.address.path().indexOf("/"+o)}))}i(".search-toggle").on("click",(function(){i("html").toggleClass("is-search-toggled-on"),i(".header-search input").trigger("focus")})),FastClick.attach(document.body),i("a[href='#card']").on("click",(function(){return i("html, body").animate({scrollTop:0},800,"easeInOutExpo"),!1})),"ontouchstart"in window||navigator.msMaxTouchPoints?i("html").addClass("touch"):i("html").addClass("no-touch"),i("html").removeClass("no-js"),i("html").addClass("ready"),setup()}))})(jQuery);