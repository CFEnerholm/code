function sendMail(){
    var isValid = document.querySelector('form').reportValidity();
    if(!$('#lastName').val()){
    
   
    if (!isValid  ) {
        return false;
    }
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
}



function showModal(Modal){
    var modal = document.getElementById(Modal);
    modal.style.display = "block";
}