$(document).ready(function () {
    $(window).ready(function () {

        $('.swipeInFromTop').each(function (i) {

            $(this).delay(1800).animate({ "bottom": "0px" }, 2000);

        });

        $('.swipeInFromBottom').each(function (i) {

            $(this).delay(1000).animate({ "bottom": "0px" }, 2000);

        });

        $('.fadeIn').each(function (i) {

            $(this).delay(3800).animate({ 'opacity': '1' }, 1000);

        });
        $('.fadeIn2').each(function (i) {

            $(this).delay(4200).animate({ 'opacity': '1' }, 1000);

        });

        $('.swipeInFromTop').each( function(i){
       
                $(this).delay(3200).animate({'opacity':'1'},1000); 
                   
        }); 

        $('.swipeInFromBottom').each( function(i){
       
            $(this).delay(4000).animate({'opacity':'1'},1000); 
               
    }); 
    });
});