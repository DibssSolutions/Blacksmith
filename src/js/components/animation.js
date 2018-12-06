//Header
let headerItems = $('.js-header-anim');
//Hero
let heroImage = $('.main-hero__image');
let heroItems = $('.js-main-hero-anim');
let counterItems = $('.js-counter-animation');
//Process
let processesTitle = $('.processes__title');
//Projects
let portfolioTitle = $('.portfolio-list__title');
let projects = $('.project');
//Estimation
let estimateHead = $('.estimation__header');
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
  return ((((elemTop + (elem.outerHeight()/2)) - yOffset) <= docViewBottom));
}

function initAnimation() {
  /** header */
  function initHeaderAnimation() {
    headerItems.each(function(index) {
      let item = $(this);

      setTimeout(() => {
        item.removeClass('js-header-anim');
      }, 100 * index);
    });
  }

  headerItems.each(function(index) {
    if (isScrolledIntoView($(this)) && $(this).hasClass('js-header-anim')) {
      initHeaderAnimation();
      return false;
    }
  });

  /** hero */
  function initCounterAnimation() {
    counterItems.each(function() {
      $(this).prop('Counter',0).animate({
        Counter: $(this).text()
      }, {
        duration: 1500,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  }

  if (isScrolledIntoView(heroImage) && heroImage.hasClass('main-hero__image_animate')) {
    heroImage.removeClass('main-hero__image_animate');
  }

  function initMainHeroAnimation() {
    heroItems.each(function(index) {
      let item = $(this);

      setTimeout(() => {
        item.removeClass('js-main-hero-anim');
        if(item.hasClass('main-hero__table')) {
          initCounterAnimation();
        }
      }, 100 * index);
    });
  }

  heroItems.each(function(index) {
    if (isScrolledIntoView($(this)) && $(this).hasClass('js-main-hero-anim')) {
      initMainHeroAnimation();
      return false;
    }
  });



  /** process */
  if (isScrolledIntoView(processesTitle) && processesTitle.hasClass('processes__title_animate')) {
    processesTitle.removeClass('processes__title_animate');
  }

  /** Projects */
  if (isScrolledIntoView(portfolioTitle) && portfolioTitle.hasClass('portfolio-list__title_animate')) {
    portfolioTitle.removeClass('portfolio-list__title_animate');
  }

  function initProjectsAnim() {
    projects.each(function(index) {
      let item = $(this);

      setTimeout(() => {
        item.removeClass('project_animate');
        setTimeout(() => {
          item.find('.js-project-anim').each(function() {
            $(this).removeClass('js-project-anim');
          });
        }, 750);
      }, 200 * index);
    });
  }

  projects.each(function() {
    let item = $(this);

    if (isScrolledIntoView(item) && item.hasClass('project_animate')) {
      initProjectsAnim();
      return false;
    }
  });

  /** Estimation */
  if (isScrolledIntoView(estimateHead) && estimateHead.hasClass('estimation__header_animate')) {
    estimateHead.removeClass('estimation__header_animate');
  }

  /** Cta */
  function initCascadeCtaAnimation() {
    ctaItems.each(function(index) {
      let item = $(this);

      setTimeout(() => {
        item.removeClass('cta__animate');
      }, 100 * index);
    });
  }


  ctaItems.each(function(index) {
    if (isScrolledIntoView($(this)) && $(this).hasClass('cta__animate')) {
      initCascadeCtaAnimation();
      return false;
    }
  });
  /** Footer */
  footerBlocks.each(function() {
    let item = $(this);

    if (isScrolledIntoView(item,300) && item.hasClass('footer__block_animate')) {
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


