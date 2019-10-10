$(document).ready(function () {
    $('.sidenav').sidenav();

    $(".card-anime").hover(function () {
        var idC = $(this).data("id");
        $('.banner-image').each(function () {
            var id = $(this).data("id");
            if (idC == id) {
                $(this).css('opacity', '0.1')
            }
        })
    }, function () {
        $('nav').find(".banner-image").css('opacity', '0')
    });
});