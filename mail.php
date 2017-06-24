<?php
$to      = 'umdevclub@gmail.com';
$subject = $_POST['your-subject'];
$message = $_POST['your-message'];
$headers = 'From: '. $_POST['your-email'] . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>