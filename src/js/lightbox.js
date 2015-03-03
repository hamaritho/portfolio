//Lightbox code
$(document).ready(function() {
    $(".light-box-image").click(function (e) {

        e.preventDefault();

        var pic = $(this).attr('href');
        var desc = $(this).attr('title');

        $(".lightbox img").attr('src', pic);
        $(".lightbox .desc").html(desc);

        $(".lightbox").fadeIn(1000);
    });

    $(".lightbox").click(function () {
        $(this).fadeOut(1000);
    })
});

$(document).ready(function() {
    $(".lightbox").hide();
});