/**


//if($_POST){
    //$to = "info@nilssonenerholm.se"; // this is your Email address
    //$from = $_POST['mail']; // this is the sender's Email address
    //$first_name = $_POST['name'];
    //$phone = $_POST['phone'];
    //$subject = "Medelande från nilssonenerholm.se";
    //$subject2 = "Kopia på det formulär du skicka på nilssonenerholm.se";
    //$message = $first_name .  " wrote the following:" . "\n\n" . $_POST['message'];
    //$message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    //$headers = "From:" . $from;
    //$headers2 = "From:" . $to;
    //mail($to,$subject,$message,$headers);
    //mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
   
    //header('Location: startsida.html/');
    // You cannot use header and echo together. It's one or the other.
  //  }

 

<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

?>