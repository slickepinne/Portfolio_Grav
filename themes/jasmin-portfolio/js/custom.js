// NAVIGATION //
function toggleHamburger() {
    // declaring elements
    var hamburger = document.getElementsByClassName('hamburger');
    var sideNav = document.getElementById('navigation');
    var subNav = document.getElementById('sub-nav');

    // add click event on hamburger element
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
      if (hamburger[0].classList.contains('is-active')) {
        event.stopPropagation();
        $(document).click(function() {
          $('#navigation').fadeOut('50');
          // sideNav.style.width = "0";
          // bodyMove[0].style.marginLeft = "80px";
          // hamburger[0].style.marginLeft = "0";
          // document.body.style.backgroundColor = "#fafafa";
          $('#sub-nav').fadeOut('50');
          hamburger[0].classList.remove('is-active');
        });
      }
    });
};

function photoPreview() {
  $('.photo-item').click(function() {
    console.log(this);
  })
}


// Fire functions

jQuery(document).ready(function($){
  toggleHamburger();
  photoPreview();
});


//
// // NAVIGATION //
// function toggleHamburger() {
//     // declaring used elements
//     var hamburger = document.getElementsByClassName('hamburger');
//     var bodyMove = document.getElementsByClassName("layer");
//     var nav = document.getElementsByClassName('navigation');
//     var moveRight = document.getElementsByClassName('navigation');
//     var sideNav = document.getElementById('navigation');
//     var subNav = document.getElementById('sub-nav');
//     var mainNav = document.getElementById('main-nav');
//     // add click event
//     hamburger[0].addEventListener('click', function() {
//
//       // toggle hamburger style
//       hamburger[0].classList.toggle('is-active');
//
//       // toggle sidebar Navigation
//       if (sideNav.style.display === "block") {
//         sideNav.style.width = "0";
//         hamburger[0].style.marginLeft = "0";
//         bodyMove[0].style.marginLeft = "80px";
//         document.body.style.backgroundColor = "#fafafa";
//       } else {
//         hamburger[0].style.marginLeft = "-220px";
//         hamburger[0].style.zIndex = "3050";
//         nav[0].style.visibility = "visible";
//         nav[0].style.zIndex = "3000";
//         sideNav.style.zIndex = "3001";
//         sideNav.style.width = "300px";
//         bodyMove[0].style.marginLeft = "300px";
//         document.body.style.opacity = "0.5";
//         document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
//         mainNav.style.opacity = "1";
//         sideNav.style.display = "block";
//       }
//
//       // toggle sub-pages navigation
//       $('#sub-nav').parent().hover(function() {
//         $('#sub-nav').fadeIn();
//       });
//
//
// // Fire functions
//
// jQuery(document).ready(function($){
//   toggleHamburger();
//   photoPreview();
// });
