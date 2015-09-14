//disable submit
jQuery("#submit").prop('disabled', true);

  var toValidate = jQuery('#name, #email'),
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
