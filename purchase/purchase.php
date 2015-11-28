<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $item = $_POST['item'];
  $shipping = $_POST['shipping'];
  $quantity = $_POST['quantity'];
  $address = $_POST['address'];
  $city = $_POST['city'];
  $state = $_POST['state'];
  $comments = $_POST['comments'];

  $to = "micahcowell99@gmail.com";
  $subject = "PURCHASE";

  mail ($to,
        $subject,
        $item .
        " \n" . "Shipping: " . $shipping .
        " \n" . "Quantity: " . $quantity .
        " \n" . " \n" . "Address: " . $address .
        " \n" .  "City: " . $city .
        " \n" .  "State: " . $state .
        " \n" .  "Comments: " . $comments .
        " \n" . " \n" . "email: " . $email,
        "From: " . $name);

  echo nl2br("Your purchase is on the way, enjoy your GetPeppers!\nYou Will be redirected back to GetPeppers shortly.");
  echo "<script>setTimeout(\"location.href = 'http://getpeppers.com';\",3000);</script>";
?>
