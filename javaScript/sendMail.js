//93890fd2-bf02-457d-8945-564547ff9e0a 
//https://smtpjs.com/

function send(){

  
    alert("HEj");
    
  
Email.send({

   // SecureToken : "93890fd2-bf02-457d-8945-564547ff9e0a",
   Host : "mail.nilssonenerholm.se",
    Username : "visitor@nilssonenerholm.se",
    Password : "ContactForm",
    To : "info@nilssonenerholm.se",
    From : "visitor@nilssonenerholm.se",
    Subject : "Från nilssonenerholm.se",
    Body :  "TEsT!!"
    
}).then(
  message => alert(message)
);
};
