/*! project-name v0.0.1 | (c) 2019 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
function setupMasonry(){var t=$(".masonry, .gallery");t.length&&(t.each((function(t,o){if(refreshMasonry(),$(o).imagesLoaded((function(){$(o).isotope({layoutMode:$(o).data("layout")?$(o).data("layout"):"masonry"}),refreshMasonry()})),!$(o).data("isotope")){var a=$(o).siblings(".filters");a.length&&a.find("a").on("click",(function(){var t=$(this).attr("data-filter");return $(o).isotope({filter:t}),$(this).parent().addClass("current").siblings().removeClass("current"),!1}))}})),$(window).on("resize debouncedresize",(function(){setTimeout((function(){refreshMasonry()}),100)})))}function refreshMasonry(){var t=$(".masonry");t.length&&t.each((function(t,o){if($(o).data("isotope")){var a=$(o).data("item-width"),e=$(o).width(),n=$(o).children(".hentry"),r=Math.round(e/a);n.each((function(t,o){var a=$(this).hasClass("x2")&&1<r?2:1,n=100*Math.floor(e/r)/e*a;$(this).css("width",n+"%")}));var i=Math.floor(e/r);$(o).isotope("option",{masonry:{columnWidth:i}}),$(o).isotope("layout")}}))}