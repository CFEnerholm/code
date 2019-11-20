function sendMail(){
    var isValid = document.querySelector('form').reportValidity();
    if(!$('#lastName').val()){
    
   
    if (!isValid  ) {
        return false;
    }
    // var data = {
    //     name: $("#name").val(),
    //     mail: $("#mail").val(),
    //     phone: $("#phone").val(),
    //     message: $("#message").val()
    var formData = new FormData($(this)[0]);

    };
    $.ajax({
        type: "POST",
        url: "javascript/mail.php",
        // data: data,
        data:formData,
        async: false,
        success: function(){  
        },

            cache: false,
            contentType: false,
            processData: false
    });

    showModal('kontaktModal');
    $("#formMail").trigger('reset');
    return false;
}


$(document).ready(function() {
    $('#contact-form').submit( function( e ) {
    var formData = new FormData($(this)[0]);
    
        $.ajax({
            url: window.location.pathname,
            type: 'POST',
            data: formData,
            async: false,
            success: function (data) {
                alert(data)
            },
            cache: false,
            contentType: false,
            processData: false
        });
        return false; 
        });
    });



function showModal(Modal){
    var modal = document.getElementById(Modal);
    modal.style.display = "block";
}