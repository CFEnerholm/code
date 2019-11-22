$(document).ready(function(){
    $("h2").css({"left":"2000px"}).animate({"left":"0px"}, "slow");
    $("h6").css({"left":"-2000px"}).animate({"left":"0px"}, "slow");

    $(".project1").css({"right":"2000px"}).stop().delay(500).animate({"right":"0px"}, "slow");
    $(".project2").css({"top":"2000px"}).stop().delay(1000).animate({"top":"0px"}, "slow");
    $(".project3").css({"left":"2000px"}).stop().delay(1500).animate({"left":"0px"}, "slow");

  });

  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
})
