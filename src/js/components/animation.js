//Header
let headerItems = $('.js-header-anim');
//Hero
let heroImage = $('.main-hero__image');
let heroItems = $('.js-main-hero-anim');
let counterItems = $('.js-counter-animation');
//Process
let processItems = $('.js-process-anim');
//Projects
let portfolioTitle = $('.portfolio-list__title');
let projects = $('.project');
//Estimation
let valueItems = $('.js-value-anim');
//cta
let ctaItems = $('.cta__animate');
//Footer
let footerBlocks = $('.footer__block');

function isScrolledIntoView(elem, yOffset = 0) {
  const docViewTop = $(window).scrollTop();
  let docViewBottom = docViewTop + $(window).height();

  let elemTop = elem.offset().top;
  // let elemBottom = elemTop + elem.height();
  // return (((elemBottom - yOffset) <= docViewBottom) && ((elemTop - yOffset) >= docViewTop));
  return ((((elemTop + (elem.outerHeight() / 2)) - yOffset) <= docViewBottom));
}

function startBlockAnimation(items, className, func, yOffset = 0) {
  items.each(function(index) {
    if (isScrolledIntoView($(this), yOffset) && $(this).hasClass(className)) {
      func();
      return false;
    }
  });
}

function initAnimation() {

  /** header */
  function triggerHeaderAnimation() {
    headerItems.each(function(index) {
      let item = $(this);

      setTimeout(() => {
        item.removeClass('js-header-anim');
      }, 100 * index);
    });
  }

  /** hero */
  function startCounterAnimation() {
    counterItems.each(function() {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).attr('data-counter')
      }, {
        duration: 1500,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  }

  function triggerMainHeroAnimation() {
    let reverseSequence = $(heroItems.get().reverse());
    reverseSequence.each(function(index) {
      let item = $(this);

      setTimeout(() => {
        item.removeClass('js-main-hero-anim');
      }, 100 * index);
    }).promise().done(() => {
      setTimeout(() => {
        startBlockAnimation(headerItems, 'js-header-anim', triggerHeaderAnimation);
        startCounterAnimation();
        heroImage.removeClass('main-hero__image_animate');
      }, (reverseSequence.length + 1) * 100);
    });
  }

  startBlockAnimation(heroItems, 'js-main-hero-anim', triggerMainHeroAnimation);

  /** process */

  function triggerProcessAnimation() {

    processItems.each(function(index) {

      let subItem = $(this);
      setTimeout(() => {
        subItem.removeClass('js-process-anim');
      }, index * 150);

    });
  }

  startBlockAnimation(processItems, 'js-process-anim', triggerProcessAnimation, 100);

  /** Projects */
  if (isScrolledIntoView(portfolioTitle, 100) && portfolioTitle.hasClass('portfolio-list__title_animate')) {
    portfolioTitle.removeClass('portfolio-list__title_animate');
  }

  /** Estimation */

  valueItems.each(function() {
    if (isScrolledIntoView($(this), 100) && $(this).hasClass('js-value-anim')) {
      $(this).removeClass('js-value-anim');
    }
  });
  // function triggerValueAnimation() {
  //   valueItems.each(function(index) {
  //     let item = $(this);
  //     setTimeout(() => {
  //       item.removeClass('js-value-anim');
  //     }, 300 * index);
  //   });
  // }
  // startBlockAnimation(valueItems, 'js-value-anim', triggerValueAnimation, 100);


  /** Cta */
  function triggerCascadeCtaAnimation() {
    ctaItems.each(function(index) {
      let item = $(this);

      setTimeout(() => {
        item.removeClass('cta__animate');
      }, 100 * index);
    });
  }

  startBlockAnimation(ctaItems, 'cta__animate', triggerCascadeCtaAnimation, -100);

  /** Footer */
  footerBlocks.each(function() {
    let item = $(this);

    if (isScrolledIntoView(item, 300) && item.hasClass('footer__block_animate')) {
      item.removeClass('footer__block_animate');
    }
  });
}

$(window).ready(() => {
  initAnimation();
  $(window).scroll(function() {
    initAnimation();
  });
});


