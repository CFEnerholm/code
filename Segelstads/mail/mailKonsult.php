<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';




$mail = new PHPMailer();
$mail->CharSet = "UTF-8";


$mail->SetFrom($_POST["mail"], $_POST["name"]);
$mail->AddReplyTo($_POST["mail"], $_POST["name"]);
$mail->AddAddress("info@newsab.se");	
$mail->Subject = "Mail från hemsidan Konsult";
$mail->WordWrap   = 80;
$mail->MsgHTML($_POST["message"]);

if(is_array($_FILES)) {
	$mail->AddAttachment($_FILES['file']['tmp_name'],$_FILES['file']['name']); 
}

$mail->IsHTML(true);
if(!$mail->Send()) {
	echo "Problem in Sending Mail.";
} else {
	echo "Contact Mail Sent.";
}