<?php

  $name = $_POST['name'];
  $email = $_POST['email'];
  $product = $_POST['product'];
  $quantity = $_POST['quantity'];

  $to = "micahcowell99@gmail.com";
  $subject = "PURCHASE";

  mail ($to,
        $subject,
        $product .
        " \n" . "quantity: " . $quantity .
        " \n" . " \n" . "email: " . $email,
        "From: " . $name);

  echo "<script>window.location = 'http://getpeppers.com/purchase/thanks.html'</script>";
?>
