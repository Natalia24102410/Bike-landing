$(document).ready(function(){

  //Sliders
  var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
            delay: 3000,
            disableOnInteraction: false
  },
 });


var mySwiper = new Swiper('.reviews-container', {
  // Optional parameters
  loop: true,
  pagination: {
    el: '.swiper-pagination',
	clickable: true
  },
    autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
 });

    // Mobile menu

    $('.header .menu-button').on('click', function () {
        $('.header').toggleClass('menu-opened');
    });

    //Anchor links

    $( ".js-anchor" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
    });
});