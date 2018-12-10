let penOpen = $('.js-pen-open');
let penClose = $('.js-pen-close');
let penContent = $('.js-pen-content');

$(window).ready(() => {
  penOpen.click(() => {
    penContent.addClass('pen__content_opened');
    penOpen.addClass('pen__button_closed');
  });

  penClose.click(() => {
    penContent.removeClass('pen__content_opened');
    penOpen.removeClass('pen__button_closed');
  });
});
