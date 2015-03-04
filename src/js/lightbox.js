//Lightbox code
$(document).ready(function() {
    $(".light-box-image").click(function (e) {

        e.preventDefault();

        var pic = $(this).attr('href');
        var desc = $(this).attr('title');

        $(".lightbox img").attr('src', pic);
        if(desc != undefined)
        {
            $(".lightbox figcaption").html("<div class='desc'>" + desc + "</div>");
        }
        $(".lightbox").fadeIn(1000);
    });

    $(".lightbox").click(function () {
        $(this).fadeOut(1000);
    })
});

$(document).ready(function() {
    $(".lightbox").hide();
});