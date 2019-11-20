
<?php
if($_POST){
    $to = "info@newsab.se";
    $subject = "Medelande från segelstads.se";
    $subject2 = "Kopia på det formulär du skicka på segelstads.se";
    $name = $_POST['name'];
    $from = $_POST['mail'];
    $phone = $_POST['phone'];
    $message = $name .  " skrev:" . "\n\n" . $_POST['message'] . "\n\n"  . $_POST['name'] . "\n" . $_POST['mail'] . "\n" . $_POST['phone'];
    $message2 = "Här är en kopia på ditt meddelande " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;

    $mail->addAttachment($mail_attachment);

    mail($to,$subject,$message,$headers); //send email
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender

    
    
}
?>