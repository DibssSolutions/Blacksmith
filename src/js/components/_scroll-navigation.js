import {SCROLL_TO} from '../utils';

var links = $('.js-scroll-navigation-link');
var scrollItem = $('.js-scroll-navigation');

function getScrollValue(toScrollItem) {
  let offsetString = toScrollItem.css('transform');
  let yOffset = (offsetString === 'none') ?
    0 :
    +offsetString.slice(6, offsetString.length - 1).split(',')[5];
  let position = toScrollItem.offset().top;
  return position - yOffset;
}

function isScrolledTo(elem) {
  const docViewTop = $(window).scrollTop();
  const halfWindowHeight = ~~($(window).height() / 2);

  let elemTop = ~~(elem.offset().top);
  let elemBottom = ~~(elemTop + elem.outerHeight());
  // return (((elemBottom - yOffset) <= docViewBottom) && ((elemTop - yOffset) >= docViewTop));
  return ((elemTop <= (docViewTop + halfWindowHeight) && (elemBottom > (docViewTop + halfWindowHeight))));
}

function isScrollOnTop() {
  const docViewTop = $(window).scrollTop();

  return (docViewTop < ($(window).height() * 0.6));
}

function updateScrollNavigationActiveItem(item) {
  scrollItem.removeClass('scroll-navigation_hided');
  links.each(function() {
    if (item.is($(this))) {
      $(this).parent('.scroll-navigation__item').addClass('scroll-navigation__item_active');
    } else {
      $(this).parent('.scroll-navigation__item').removeClass('scroll-navigation__item_active');
    }
  });
}

function clearScrollNavigationItems() {
  scrollItem.addClass('scroll-navigation_hided');
  links.each(function() {
    $(this).parent('.scroll-navigation__item').removeClass('scroll-navigation__item_active');
  });
}

function initScrollNavigation() {
  links.each(function() {
    let item = $(this);
    if (isScrollOnTop()) {
      if(!scrollItem.hasClass('scroll-navigation_hided'))
        clearScrollNavigationItems();
    } else if (isScrolledTo($(item.attr('href')))) {
      if (!item.parent('.scroll-navigation__item').hasClass('scroll-navigation__item_active')) {
        updateScrollNavigationActiveItem(item);
      }
    }
  });
}

$(window).ready(() => {
  initScrollNavigation();

  links.each(function() {
    let toScrollItem = $($(this).attr('href'));
    $(this).click((event) => {
      event.preventDefault();
      SCROLL_TO(getScrollValue(toScrollItem));
    });
  });

  $(window).scroll(() => {
    initScrollNavigation();
  });

});


