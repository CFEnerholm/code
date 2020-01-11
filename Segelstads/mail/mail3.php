<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';




$mail = new PHPMailer();
$mail->CharSet = "UTF-8";


$mail->SetFrom($_POST["mail"], $_POST["name"]);
$mail->AddReplyTo($_POST["mail"], $_POST["name"]);
$mail->AddAddress("carlfredrik@newsab.se");
$mail->Subject = "Mail från segelstads.se - Kontakt";
$mail->WordWrap   = 80;
//$mail->MsgHTML($_POST["message"]);

$mail->Body = <<<EOT
Namn: {$_POST['name']}
Email: {$_POST['mail']}
Telefon: {$_POST['phone']}

Meddelande: 
{$_POST['message']}

{$_POST['name']} har markerat att Segelstads Rehab ABs integretetspolicy har lästs och godkänts

EOT;

if(is_array($_FILES)) {
	$mail->AddAttachment($_FILES['file']['tmp_name'],$_FILES['file']['name']); 
}

$mail->IsHTML(false);
if(!$mail->Send()) {
	echo "Problem in Sending Mail.";
} else {
	echo "Contact Mail Sent.";
}