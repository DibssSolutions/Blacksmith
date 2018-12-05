var header = $('.js-header');
var toggle = $('.js-toggle');
var menu = $('.js-menu');

$(window).ready(() => {

  //toggle
  toggle.click(() => {
    header.toggleClass('header_opened');
  });

  //header
  $(window).resize( () => {
    if ($(window).outerWidth() > 1023 && header.hasClass('header_opened')) {
      header.removeClass('header_opened');
    }
  });

  if($(window).scrollTop() > 0) {
    header.addClass('header_shadow');
  }

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

  $(window).scroll(() => {
    if($(window).scrollTop() > 0) {
      header.addClass('header_shadow');
    }else{
      header.removeClass('header_shadow');
    }
  });
});


