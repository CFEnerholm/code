function visaMeny() {  
        $(".mobilMeny").slideToggle(200);    
}


$(document).ready(function() {
        var headerTop = $('#header').offset().top;
        var headerBottom = headerTop + 100; // Sub-menu should appear after this distance from top.
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop(); // Current vertical scroll position from the top
            if (scrollTop > headerBottom) { // Check to see if we have scrolled more than headerBottom
                if (($("#header").is(":visible") === false)) {
                    $('#header').fadeIn('slow');
                    $('#storLogga').hide();
                }
            } else {
                if ($("#header").is(":visible")) {
                    $('#header').hide();
                    $('#storLogga').fadeIn('slow');
                }
            }
        });
    });

