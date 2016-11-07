

$(function () {
    'use strict';

/*--------------------------------------------------
    WOW Effects Animation
    ---------------------------------------------------*/

    var wow = new WOW({
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       false        // trigger animations on mobile devices (true is default)
});
    wow.init();

/*--------------------------------------------------
    Page Scroll Features 
    ---------------------------------------------------*/
    smoothScroll.init({
        speed: 1000,
        updateURL: true,
        offset: 50
    });

/*--------------------------------------------------
    Menu Features 
    ---------------------------------------------------*/

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').on('click', function () {
    $('.navbar-toggle:visible').trigger('click');
});

   

/*--------------------------------------------------
    Initialize portfolio filter
    ---------------------------------------------------*/

    $('#filter-controls').mixItUp();



/*--------------------------------------------------
    Set main image height.
    ---------------------------------------------------*/


//What happen on window resize
$(window).resize(function () {
    homeFullScreen();
});


function stickyMenu() {

    var scrollTop = $(window).scrollTop();
    var offset = 0;

    if (scrollTop > offset) {
        $('.navbar-default').addClass('navbar-small');
    } else {
        $('.navbar-default').removeClass('navbar-small');
    }
}

//What happen on window scroll  
$(window).on("scroll", function (e) {
    setTimeout(function () {
        stickyMenu();
    }, 300)
});

});