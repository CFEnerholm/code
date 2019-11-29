
$(document).ready(function () {
  $(window).ready(function () {
    Go();
  });
  $(window).scroll(function () {
    Go();
  });
});

function Go() {

    $('.fadeIn').each(function (i) {
      var bottom_of_object = $(this).offset().top + ($(this).outerHeight() / 7);
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ 'opacity': '1' }, 1000);
      }
    });

    $('.swipeInFromLeft').each(function (i) {
      var bottom_of_object = $(this).offset().top + ($(this).outerHeight() / 7);
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ "left": "0px" }, "slow");
      }
    });

    $('.swipeInFromRight').each(function (i) {
      var bottom_of_object = $(this).offset().top + ($(this).outerHeight() / 7);
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ "left": "0px" }, "slow");
      }
    });
  
}