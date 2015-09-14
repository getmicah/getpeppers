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

$(".bar").inViewport(function(px){
    if(px) $(this).addClass("animation") ;
});

//disable submit
jQuery("#submit").prop('disabled', true);

  var toValidate = jQuery('#name, #email, #subject, #message'),
      valid = false;
  toValidate.keyup(function () {
      if (jQuery(this).val().length > 0) {
          jQuery(this).data('valid', true);
      } else {
          jQuery(this).data('valid', false);
      }
      toValidate.each(function () {
          if (jQuery(this).data('valid') == true) {
              valid = true;
          } else {
              valid = false;
          }
      });
      if (valid === true) {
          jQuery("#submit").prop('disabled', false);
      } else {
          jQuery("#submit").prop('disabled', true);
      }
  });
