//Header
let headerLogo = $('.header__logo');
let headerToggle = $('.header__toggle');
let headerMenu = $('.header__menu');
//Hero
let heroImage = $('.main-hero__image');
let heroContent = $('.main-hero__content');
//Process
let processesTitle = $('.processes__title');
let processes = $('.process');
//Projects
let portfolioTitle = $('.portfolio-list__title');
let projects = $('.project');
//Estimation
let estimateHead = $('.estimation__header');
let values = $('.value');
//cta
let ctaItems = $('.cta__animate');
//Footer
let footerBlocks = $('.footer__block');

function isScrolledIntoView(elem, yOffset = 0) {
  const docViewTop = $(window).scrollTop();
  let docViewBottom = docViewTop + $(window).height();

  let elemTop = elem.offset().top;
  let elemBottom = elemTop + elem.height();
  return (((elemBottom - yOffset) <= docViewBottom) && ((elemTop - yOffset) >= docViewTop));
}

function initAnimation() {
  //header
  headerLogo.removeClass('header__logo_animate');
  headerToggle.removeClass('header__toggle_animate');
  headerMenu.removeClass('header__menu_animate');

  //hero
  if (isScrolledIntoView(heroImage) && heroImage.hasClass('main-hero__image_animate')) {
    heroImage.removeClass('main-hero__image_animate');
  }

  if (isScrolledIntoView(heroContent, 500) && heroContent.hasClass('main-hero__content_animate')) {
    heroContent.removeClass('main-hero__content_animate');
  }

  //process
  if (isScrolledIntoView(processesTitle) && processesTitle.hasClass('processes__title_animate')) {
    processesTitle.removeClass('processes__title_animate');
  }

  processes.each(function() {
    let item = $(this);

    if (isScrolledIntoView(item) && item.hasClass('process_animate')) {
      item.removeClass('process_animate');

      item.children('.process__bg-animation')
        .animate({
          height: '100%'
        }, 500)
        .css('top', 'auto')
        .animate({
          height: 0,
          bottom: 0
        }, 500);

      setTimeout(() => {
        item.children('.process__head').removeClass('process__head_animate');
        item.children('.process__descr').removeClass('process__descr_animate');
      }, 500);
    }
  });
  //Projects
  if (isScrolledIntoView(portfolioTitle) && portfolioTitle.hasClass('portfolio-list__title_animate')) {
    portfolioTitle.removeClass('portfolio-list__title_animate');
  }

  projects.each(function() {
    let item = $(this);

    if (isScrolledIntoView(item) && item.hasClass('project_animate')) {
      item.removeClass('project_animate');
    }
  });

  //Estimation
  if (isScrolledIntoView(estimateHead) && estimateHead.hasClass('estimation__header_animate')) {
    estimateHead.removeClass('estimation__header_animate');
  }

  values.each(function() {
    let item = $(this);

    if (isScrolledIntoView(item) && item.hasClass('value_animate')) {
      item.removeClass('value_animate');

      item.children('.value__bg-animation')
        .animate({
          opacity: 1
        }, 500)
        .animate({
          opacity: 0
        }, 500);

      setTimeout(() => {
        item.children('.value__container').removeClass('value__container_animate');
      }, 500);
    }
  });

  function initCascadeCtaAnimation() {
    ctaItems.each(function(index) {
      let item = $(this);

      setTimeout(() => {
        item.removeClass('cta__animate');
      }, 300 * index);
    });
  }

  //Cta
  ctaItems.each(function(index) {
    if (isScrolledIntoView($(this)) && $(this).hasClass('cta__animate')) {
      initCascadeCtaAnimation();
      return false;
    }
  });
  //Footer
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


