$(document).ready(function(){$(".light-box-image").click(function(t){t.preventDefault();var i=$(this).attr("href"),e=$(this).attr("title");$(".lightbox img").attr("src",i),void 0!=e&&$(".lightbox figcaption").html("<div class='desc'>"+e+"</div>"),$(".lightbox").fadeIn(1e3)}),$(".lightbox").click(function(){$(this).fadeOut(1e3)})}),$(document).ready(function(){$(".lightbox").hide()});