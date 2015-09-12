<?php

  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = "micahcowell99@gmail.com";
  $subject = $_POST['subject'];

  mail ($to, $subject, $message, "From: " . $name);
  echo "<script>window.location = 'http://getpeppers.com/sent.html'</script>";

?>
