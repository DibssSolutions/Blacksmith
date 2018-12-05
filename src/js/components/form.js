let name = $('#name');
let phone = $('#phone');
let mail = $('#mail');
let file = $('#file');
let label = $('.js-file-label');
let submit = $('#submit');

const phoneReg = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
const mailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function nameIsValid() {
  if (name.val().length > 5) {
    name.removeClass('cta__input_invalid');
    return true;
  } else {
    name.addClass('cta__input_invalid');
    return false;
  }
}

function phoneIsValid() {
  if (phoneReg.test(phone.val())) {
    phone.removeClass('cta__input_invalid');
    return true;
  } else {
    phone.addClass('cta__input_invalid');
    return false;
  }
}

function mailIsValid() {
  if (mailReg.test(mail.val())) {
    mail.removeClass('cta__input_invalid');
    return true;
  } else {
    mail.addClass('cta__input_invalid');
    return false;
  }
}

$(window).ready(() => {

  file.change(() => {
    label.text(file.val().replace(/C:\\fakepath\\/i, ''));
  });

  submit.click(() => {
    if (nameIsValid() && phoneIsValid() && mailIsValid()) {
      console.log('done');
    }
  });


});


