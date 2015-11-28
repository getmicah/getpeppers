<?php

  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = "micahcowell99@gmail.com";
  $subject = $_POST['subject'];

  mail ($to,
        $subject,
        $message . " \n" . " \n" . "email: " . $email,
        "From: " . $name);

  echo nl2br("Email sent, we will get back to you shortly!\nYou Will be redirected back to GetPeppers shortly.");
  echo "<script>setTimeout(\"location.href = 'http://getpeppers.com';\",3000);</script>";
?>
