
//css on scroll
$(document).scroll(function () {
    if (window.scrollY > 40) {
        $('.navbar').addClass('navbar__scroll');
    }
    else {
        $('.navbar').removeClass('navbar__scroll');
    }
});
