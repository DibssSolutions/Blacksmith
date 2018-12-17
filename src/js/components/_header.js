import {SCROLL_TO} from '../utils';
var header = $('.js-header');
var toggle = $('.js-toggle');
var menu = $('.js-menu');
var links = $('.js-header-link');

function getScrollValue(toScrollItem) {
  let offsetString = toScrollItem.css('transform');
  let yOffset = (offsetString === 'none') ?
    0 :
    +offsetString.slice(6,offsetString.length - 1).split(',')[5];
  let position = toScrollItem.offset().top;
  return position - yOffset;
}

$(window).ready(() => {

  //toggle
  toggle.click(() => {
    header.toggleClass('header_opened');
  });

  //header
  $(window).resize(() => {
    if ($(window).outerWidth() > 1023 && header.hasClass('header_opened')) {
      header.removeClass('header_opened');
    }
  });

  // if ($(window).scrollTop() > 0) {
  //   header.addClass('header_scrolled');
  // }

  if ($(window).outerWidth() < 1023) {
    menu.css({
      transition: 'transform 300ms linear'
    });
  }

  $(window).resize(() => {
    if ($(window).outerWidth() > 1023) {
      menu.css('transition', '');
    } else {
      menu.css({
        transition: 'transform 300ms linear'
      });
    }
  });

  // $(window).scroll(() => {
  //   if ($(window).scrollTop() > 0) {
  //     header.addClass('header_scrolled');
  //   } else {
  //     header.removeClass('header_scrolled');
  //   }
  // });

  $(window).click(function(event) {
    let target = $(event.target);
    if (!target.parents('.js-header').length) {
      header.removeClass('header_opened');
    }
  });

  links.each(function() {

    $(this).click((event) => {
      event.preventDefault();
      let item = $(this);
      let toScrollItem = $(item.attr('href'));
      SCROLL_TO(getScrollValue(toScrollItem));
    });
  });

});


