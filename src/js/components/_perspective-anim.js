var items = $('.js-perspective-anim');

$(window).ready(() => {
  items.each(function(index) {

    let timerId;
    const item = $(this);

    $(this).mousemove((e) => {

      const target = $(e.target);
      const transformX = (-20 * e.offsetY + (-target.outerHeight() * -10)) / -target.outerHeight();
      const transformY = (-20 * e.offsetX + (-target.outerWidth() * -10)) / target.outerWidth();

      const style = `perspective(1000px) rotateX(${transformX.toFixed(1)}deg) rotateY(${transformY.toFixed(1)}deg) scale3d(1, 1, 1)`;
      $(this).css('transform', `${style}`);
    });

    $(this).mouseenter((e) => {
      timerId = setTimeout(function() {
        item.addClass('project_active');
      }, 150);
    });

    $(this).mouseleave((e) => {
      item.removeClass('project_active');
      clearTimeout(timerId);
      $(this).css('transform', 'perspective(1000px) rotateX(0deg) rotateY(0deg)');
    });
  });
});


