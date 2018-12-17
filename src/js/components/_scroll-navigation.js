import {SCROLL_TO} from '../utils';

var links = $('.js-scroll-navigation-link');

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

  let elemTop = elem.offset().top;
  // let elemBottom = elemTop + elem.height();
  // return (((elemBottom - yOffset) <= docViewBottom) && ((elemTop - yOffset) >= docViewTop));
  return (elemTop <= docViewTop);
}

function isScrollOnTop() {
  const docViewTop = $(window).scrollTop();

  return (docViewTop < $(window).height());
}

function updateScrollNavigationActiveItem(item) {
  links.each(function() {
    if (item.is($(this))) {
      $(this).parent('.scroll-navigation__item').addClass('scroll-navigation__item_active');
    } else {
      $(this).parent('.scroll-navigation__item').removeClass('scroll-navigation__item_active');
    }
  });
}

function clearScrollNavigationItems() {
  links.each(function() {
    $(this).parent('.scroll-navigation__item').removeClass('scroll-navigation__item_active');
  });
}

function initScrollNavigation() {
  links.each(function() {
    let item = $(this);
    if (isScrollOnTop()) {
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


