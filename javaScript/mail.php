
<?php
if($_POST){
    $to = "info@nilssonenerholm.se";
    $subject = "Medelande från nilssonenerholm.se";
    $subject2 = "Kopia på det formulär du skicka på nilssonenerholm.se";
    $name = $_POST['name'];
    $from = $_POST['mail'];
    $phone = $_POST['phone'];
    $message = $name .  " skrev:" . "\n\n" . $_POST['message'] . "\n\n"  . $_POST['name'] . "\n\n" . $_POST['mail'] . "\n\n" . $_POST['phone'];
    $message2 = "Här är en kopia på ditt meddelande " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;

    mail($to,$subject,$message,$headers); //send email
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
}
?>