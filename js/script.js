
//smoothscroll
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

//css on scroll
$(document).scroll(function () {
    if (window.scrollY > 50) {
        $('#nav').addClass('past-header');
    } else {
        $('#nav').removeClass('past-header');
    }
});

//animate in viewport
;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));

if ($(window).width() > 600) {
  $(".trigger").inViewport(function(px){
      if(px) $("#compare").css({"opacity": "1"});
      if(px) $(".bar").addClass("animation");
  });
}
else {
  $(".bar").inViewport(function(px){
      if(px) $("#compare").css({"opacity": "1"});
      if(px) $(".bar").addClass("animation");
  });
}


//disable on empty fields
$('#contactForm').submit(function() {
    if ($.trim($("#name").val()) === "" || $.trim($("#email").val()) === "" || $.trim($("#subject").val()) === "" || $.trim($("#message").val()) === "") {
        alert('Please fill out all the fields with *');
        return false;
    }
});
