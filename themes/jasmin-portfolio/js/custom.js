// NAVIGATION //
function toggleHamburger() {
    // finding hamburger element
    var hamburger = document.getElementsByClassName('hamburger');
    var sideNav = document.getElementById('navigation');
    // add click event
    hamburger[0].addEventListener('click', function() {

      // toggle hamburger style
      hamburger[0].classList.toggle('is-active');

      // toggle sidebar Navigation
      if (sideNav.style.display === "block") {
        $('#navigation').fadeOut('slow');
        $('#sub-nav').fadeOut('slow');
      } else {
        $('#navigation').fadeIn('slow'), function() {
          sideNav.style.display = "block";
        }
      }

      // toggle sub-pages navigation
      $('#sub-nav').parent().hover(function() {
        $('#sub-nav').fadeIn();
      });

      // click anywhere to hide navigation
      // if (hamburger[0].classList.contains('is-active')) {
      //   event.stopPropagation();
      //   $(document).click(function() {
      //     $('#navigation').fadeOut('slow');
      //   })
      // }
    })
};

// Fire functions

jQuery(document).ready(function($){
  toggleHamburger();
});
