  $(".topInfo").stop().delay(1000).animate({opacity: '1'}, 3000);
  $(".topBtn").stop().delay(4000).animate({opacity: '1'}, 3000).delay;

  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
})
