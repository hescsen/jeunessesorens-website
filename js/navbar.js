
$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('nav').addClass('nav-white');
    }
    else {
        $('nav').removeClass('nav-white');
    }
})