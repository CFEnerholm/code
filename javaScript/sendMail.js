//93890fd2-bf02-457d-8945-564547ff9e0a 
//https://smtpjs.com/

function send(){

    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var phone = $("#phone").val();

Email.send({

    SecureToken : "93890fd2-bf02-457d-8945-564547ff9e0a",
    To : 'info@nilssonenerholm.se',
    From : "visitor@nilssonenerholm.se",
    Subject : "Från nilssonenerholm.se",
    Body : name +"<br>"+ email +"<br>"+ phone +"<br>"+ message
    
}).then(
  message => alert(message)
);

}