let penOpen = $('.js-pen-open');
let penClose = $('.js-pen-close');
let penContent = $('.js-pen-content');
let penBackground = $('.js-pen-background');

function getRadius() {
  let width = $(window).outerWidth() + 100;
  let height = $(window).outerHeight() + 100;
  return Math.sqrt((width * width) + (height * height));
}

$(window).ready(() => {
  penOpen.click(() => {
    let radius = getRadius();
    $('body').css('overflow','hidden');

    penBackground.animate({
      width: radius * 2,
      height: radius * 2
    }, 400);
    setTimeout(() => {
      penContent.addClass('pen__content_opened');
    }, 400);
  });


  penClose.click(() => {
    $('body').css('overflow','');
    penBackground.animate({
      width: 0,
      height: 0
    });
    penContent.removeClass('pen__content_opened');
  });

  $(window).resize(() => {
    if (penContent.hasClass('pen__content_opened')) {
      penBackground.css({
        width: getRadius() * 2,
        height: getRadius() * 2
      });
    }
  });
});


