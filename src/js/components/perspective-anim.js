var items = $('.js-perspective-anim');

function toZeroStep(number) {
  if (number >= -1 && number <= 1) {
    return 0;
  } else if (number < 0) {
    return (+number + 1).toFixed(1);
  } else
    return (+number - 1).toFixed(1);

}

function toValueStep(value, current) {
  if (current < value) {
    return (+current + 1).toFixed(1);
  } else
    return (+current - 1).toFixed(1);
}

$(window).ready(() => {
  items.each(function(index) {
    let timerId;
    $(this).mousemove((event) => {

      const target = $(event.target);
      const transformX = (-20 * event.offsetY + (-target.outerHeight() * -10)) / -target.outerHeight();
      const transformY = (-20 * event.offsetX + (-target.outerWidth() * -10)) / target.outerWidth();

      const style = `perspective(1000px) rotateX(${transformX.toFixed(1)}deg) rotateY(${transformY.toFixed(1)}deg) scale3d(1, 1, 1)`;
      $(this).css('transform', `${style}`);
    });

    $(this).mouseenter((event) => {
      const item = $(this);
      timerId = setTimeout(function() {
        item.addClass('project_active');
      }, 300);

      $(this).css('transform', 'perspective(1000px) rotateX(0deg) rotateY(0deg)');
    });

    $(this).mouseleave((event) => {
      const item = $(this);
      item.removeClass('project_active');
      clearTimeout(timerId);

      $(this).css('transform', 'perspective(1000px) rotateX(0deg) rotateY(0deg)');
    });
  });
});


