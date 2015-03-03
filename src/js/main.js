//Contextual page nav highlighting from Stack Overflow.
$(document).ready(function()
{
    var url = window.location.pathname;
	var filename = url.match(/[^\/]+$/);
    if(filename != null)
    {
        filename = filename[0];
	   $("#subnav a").removeClass('active');
	   $("#subnav a[href='" + filename + "']").addClass('active');
    }
});

//Using the JQuery scrollTo() plugin to scroll back to top.
$(document).ready(function() {
    $(".backToTop a").click(function() {
        $("body").scrollTo("body", 1000);
    })
});

// Using fluid-width youtube videos: http://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php
$(document).ready( function() {
    $("iframe[src^='https://www.youtube.com']").each(function() {
        $(this).data('aspectRatio', $(this).attr('height') / $(this).attr('width'));
        $(this).data('maxWidth', $(this).attr('width'));
    });
})

// When the window is resized
$(window).resize(function() {
  // Resize all videos according to their own aspect ratio
  $("iframe[src^='https://www.youtube.com']").each(function() {

    var $el = $(this);
    var newWidth = $(this).data('maxWidth') < $("main").width() ? $(this).data('maxWidth') : $("main").width();
    $el.attr('width', newWidth).attr('height', newWidth * $el.data('aspectRatio'));

  });
}).resize();

//Scrolling on Table of Contents Click
$(document).ready(function() {
    $(".toc li").click(function() {
        var cl = $(this).attr('class');
        var selector = "section." + cl;
        $("body").scrollTo(selector, 1000);
    });
});

//Show more/less
$(document).ready(function() {
    $(".more").click(function() {
        $(".entire").show();
        $(".more").parent().hide();
        $(".less").show();
    });

    $(".less").click(function() {
        $(".entire").hide();
        $(".less").hide();
        $(".more").parent().show();
    });
});

$(document).ready(function() {
    $(".less").hide();
    $(".entire").hide();
});




