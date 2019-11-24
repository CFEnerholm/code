$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
})

$(document).ready(function() {
    $(window).ready( function(){
        Go();
    });
    $(window).scroll( function(){
        Go();
    });  
});


function Go(){
            /* Check the location of each desired element */
            $('.fadeIn').each( function(i){
            
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                /* If the object is completely visible in the window, fade it it */
                if( bottom_of_window > bottom_of_object ){
                    
                    $(this).animate({'opacity':'1'},1000);
                        
                }             
            }); 
    
            $('.fadeInDelay500').each( function(i){          
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if( bottom_of_window > bottom_of_object ){
                    $(this).delay(500).animate({'opacity':'1'},1000); 
                }        
            }); 
    
            $('.fadeInDelay1000').each( function(i){
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if( bottom_of_window > bottom_of_object ){         
                    $(this).delay(1000).animate({'opacity':'1'},1000); 
                }         
            }); 

            $('.fadeInDelay1500').each( function(i){
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if( bottom_of_window > bottom_of_object ){         
                    $(this).delay(1500).animate({'opacity':'1'},1000); 
                }         
            }); 
    
            $('.swipeInFromLeft').each( function(i){
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if( bottom_of_window > bottom_of_object ){         
                    $(this).animate({"left":"0px"}, "slow");
                }         
            }); 
    
            $('.swipeInFromRight').each( function(i){
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if( bottom_of_window > bottom_of_object ){         
                    $(this).animate({"left":"0px"}, "slow");
                }         
            }); 

            $('.swipeInFromRightDelay500').each( function(i){
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if( bottom_of_window > bottom_of_object ){         
                    $(this).delay(500).animate({"left":"0px"}, "slow");
                }         
            }); 

            $('.swipeInFromRightDelay1000').each( function(i){
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if( bottom_of_window > bottom_of_object ){         
                    $(this).delay(1000).animate({"left":"0px"}, "slow");
                }         
            }); 

            $('.swipeInFromRightDelay1500').each( function(i){
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if( bottom_of_window > bottom_of_object ){         
                    $(this).delay(1500).animate({"left":"0px"}, "slow");
                }         
            }); 
}