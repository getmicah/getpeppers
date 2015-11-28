$('#purchaseForm').submit(function() {
  if ($.trim($("#name").val()) === "" || $.trim($("#email").val()) === "" || $.trim($("#address").val()) === "" || $.trim($("#city").val()) === "" || $.trim($("#state").val()) === "" ) {
        alert('Please fill out all the fields with *');
        return false;
    }
});
