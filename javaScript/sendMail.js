//93890fd2-bf02-457d-8945-564547ff9e0a 
//https://smtpjs.com/

{
  Email.send({

   // SecureToken : "93890fd2-bf02-457d-8945-564547ff9e0a",
    Host : "smtp.nilssonenerholm.se",
    Username : "visitor@nilssonenerholm.se",
    Password : "ContactForm",
    To : "info@nilssonenerholm.se",
    From : "visitor@nilssonenerholm.se",
    Subject : "Från nilssonenerholm.se",
    Body :  "TEsT!!"
  }).then( message => alert(message));});
