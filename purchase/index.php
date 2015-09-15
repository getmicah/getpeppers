<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $item = $_POST['item'];
  $shipping = $_POST['shipping'];
  $quantity = $_POST['quantity'];
  $address = $_POST['address'];
  $city = $_POST['city'];
  $state = $_POST['state'];
  $zip = $_POST['zip'];

  $to = "micahcowell99@gmail.com";
  $subject = "PURCHASE";

  mail ($to,
        $subject,
        $item .
        " \n" . "Shipping: " . $shipping .
        " \n" . "Quantity: " . $quantity .
        " \n" . " \n" . $address .
        " \n" .  $city .
        " \n" .  $state .
        " \n" .  $zip .
        " \n" . " \n" . "email: " . $email,
        "From: " . $name);

  echo "<script>window.location = 'http://getpeppers.com/purchase/thanks.html'</script>";
?>
