function sendMail(num){
    var n = num;
    var isValid = document.querySelector('form').reportValidity();
    if(!$('#lastName').val()){

    if (!isValid  ) {
        return false;
    }

    var formData = new FormData($('#formMail')[0]);

    };

    if(n==1){
        $.ajax({         
            type: "POST",
            url: "mail/mail.php",
            data: formData,
            contentType: false,
            cache: false,
            processData:false,
            success: function () {     
            },
         
        });
    }
    if(n==2){
        $.ajax({
            type: "POST",
            url: "mail/mail2.php",
            data: formData,
            contentType: false,
            cache: false,
            processData:false,
            success: function () {     
            },
         
        });
    }
    if(n==3){
        $.ajax({
            type: "POST",
            url: "mail/mail3.php",
            data: formData,
            contentType: false,
            cache: false,
            processData:false,
            success: function () {     
            },
         
        });
    }
    

    showModal('kontaktModal');
    $("#formMail").trigger('reset');
    return false;
}

function showModal(Modal){
    var modal = document.getElementById(Modal);
    modal.style.display = "block";
}