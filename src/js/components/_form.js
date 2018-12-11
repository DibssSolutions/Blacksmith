let file = $('.js-form-file');
let submit = $('.js-form-submit');
let container = $('.js-form');

const phoneReg = /^(\+([0-9]{1,3}))?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
const mailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function nameIsValid(item) {
  if (item.val().length >= 2) {
    item.removeClass('form__input_invalid');
    return true;
  } else {
    runShakeInit(item);
    item.addClass('form__input_invalid');
    return false;
  }
}

function phoneIsValid(item) {
  if (phoneReg.test(item.val())) {
    item.removeClass('form__input_invalid');
    return true;
  } else {
    runShakeInit(item);
    item.addClass('form__input_invalid');
    return false;
  }
}

function mailIsValid(item) {
  if (mailReg.test(item.val())) {
    item.removeClass('form__input_invalid');
    return true;
  } else {
    runShakeInit(item);
    item.addClass('form__input_invalid');
    return false;
  }
}

function runShakeInit(item) {
  item.css('transition', 'none');
  item.animate({
    left: -8
  }, 50).animate({
    left: 8
  }, 50).animate({
    left: -3
  }, 50).animate({
    left: 3
  }, 50).animate({
    left: 0
  }, 50);
}

function isValidForm(container) {
  let isValid = true;
  let name = container.find('.js-form-name');
  let phone = container.find('.js-form-phone');
  let mail = container.find('.js-form-mail');

  isValid = (nameIsValid(name) ? isValid : false);
  isValid = (phoneIsValid(phone) ? isValid : false);
  isValid = (mailIsValid(mail) ? isValid : false);

  return isValid;
}

$(window).ready(() => {


  file.each(function() {
    $(this).change((event) => {
      let label = $(event.target).parents('.js-form').find('.js-file-label');
      label.text($(this).val().replace(/C:\\fakepath\\/i, ''));
    });
  });

  submit.click((event) => {
    if (isValidForm($(event.target).parent('.js-form'))) {
      console.log('done');
    }

  });
});


