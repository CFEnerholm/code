function sendMail(){
    var data = {
        name: $("#name").val(),
        mail: $("#mail").val(),
        phone: $("#phone").val(),
        message: $("#message").val()
    };
    $.ajax({
        type: "POST",
        url: "javaScript/mail.php",
        data: data,
        success: function(){
            
        }
    });
    showModal('kontaktModal');
 $("#formMail").trigger('reset');
    return false;
    
}


function mailSkickat(){

    showModal('kontaktModal');
    $("#formMail").trigger('reset');
}

function showModal(Modal){
    var modal = document.getElementById(Modal);
    modal.style.display = "block";
}