/*! project-name v0.0.1 | (c) 2019 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
function setupForms(){$("#commentform").length&&($("#commentform").addClass("validate-form"),$("#commentform").find("input,textarea").each((function(a,t){"true"==$(this).attr("aria-required")&&$(this).addClass("required"),"email"==$(this).attr("name")&&$(this).addClass("email")})));var a=$(".mc4wp-form form");a.length&&a.addClass("validate-form"),$(".validate-form").length&&$(".validate-form").each((function(){$(this).validate()}))}