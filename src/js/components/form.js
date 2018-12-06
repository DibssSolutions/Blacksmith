let name = $('#name');
let phone = $('#phone');
let mail = $('#mail');
let file = $('#file');
let label = $('.js-file-label');
let submit = $('#submit');

const phoneReg = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
const mailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function nameIsValid() {
  if (name.val().length > 4) {
    name.removeClass('cta__input_invalid');
    return true;
  } else {
    runShakeInit(name);
    name.addClass('cta__input_invalid');
    return false;
  }
}

function phoneIsValid() {
  if (phoneReg.test(phone.val())) {
    phone.removeClass('cta__input_invalid');
    return true;
  } else {
    runShakeInit(phone);
    phone.addClass('cta__input_invalid');
    return false;
  }
}

function mailIsValid() {
  if (mailReg.test(mail.val())) {
    mail.removeClass('cta__input_invalid');
    return true;
  } else {
    runShakeInit(mail);
    mail.addClass('cta__input_invalid');
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

function isValidForm() {
  let isValid = true;

  isValid = (nameIsValid() ? isValid : false);
  isValid = (phoneIsValid() ? isValid : false);
  isValid = (mailIsValid() ? isValid : false);


  return isValid;
}

$(window).ready(() => {

  file.change(() => {
    label.text(file.val().replace(/C:\\fakepath\\/i, ''));
  });

  submit.click(() => {
    if (isValidForm()) {
      console.log('done');
    }
  });
});


