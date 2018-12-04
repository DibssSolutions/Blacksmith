var items = $('.js-perspective-anim');

$(window).ready(() => {
  items.each(function(index) {
    $(this).mousemove((event) => {
      const target = $(event.target);

      const transformX = (-20*event.offsetY + (-target.outerHeight() * -10)) / target.outerHeight();
      const transformY = (-20*event.offsetX + (-target.outerWidth() * -10)) / target.outerWidth();

      const style = `perspective(1000px) rotateX(${transformX.toFixed(2)}deg) rotateY(${transformY}deg) scale3d(1, 1, 1)`;
      $(this).css('transform', `${style}`);
    });

    $(this).mouseleave( (event) => {
      $(this).css('transform', 'perspective(1000px) rotateX(0deg) rotateY(0deg)');
    });
  });
});


