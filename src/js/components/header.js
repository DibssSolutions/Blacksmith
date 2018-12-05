var header = $('.js-header');
var toggle = $('.js-toggle');
var menu = $('.js-menu');

$(window).ready(() => {


  toggle.click(() => {
    header.toggleClass('header_opened');
  });

  $(window).resize( () => {
    if ($(window).outerWidth() > 1023 && header.hasClass('header_opened')) {
      header.removeClass('header_opened');
    }
  });



  if ($(window).outerWidth() < 1023) {
    menu.css({
      transition : 'transform 300ms linear'
    });
  }

  $(window).resize( () => {
    if ($(window).outerWidth() > 1023) {
      menu.css('transition', '');
    } else {
      menu.css({
        transition : 'transform 300ms linear'
      });
    }
  });




});


