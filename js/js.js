(function($) {
  $(document).ready(function() {
    // fade in .navbar
    $(function() {
      $(window).scroll(function() {
        // set distance user needs to scroll before we start fadeOut
        if ($(this).scrollTop() > 300) {
          $(".navbar").fadeOut();
        } else {
          $(".navbar").fadeIn();
        }
      });
    });
  });
})(jQuery);
