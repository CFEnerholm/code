function sendMail(){
    var data = {
        name: $("#name").val(),
        mail: $("#mail").val(),
        phone: $("#phone").val(),
        message: $("#message").val()
    };
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: data,
        success: function(){
            $('#kontaktModal').fadeIn(1000);
        }
    });





}


