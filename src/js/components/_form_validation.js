import validate from 'jquery-validation';

// $.validator.messages.required = $('.form__validation-message');
// $.validator.messages.number = 'Необходимо ввести целое число';

// $.validator.setDefaults({
//   debug: true
// });
let file = $('.js-form-file');
file.each(function() {
  $(this).change((event) => {
    let label = $(event.target).parents('.js-form').find('.js-file-label');
    label.text($(this).val().replace(/C:\\fakepath\\/i, ''));
  });
});

var form = $('.js-form');
var modal = $('[data-modal]');
// jQuery.validator.addMethod('mask', function(value, element) {
//   // allow any non-whitespace characters as the host part
//   return this.optional( element ) || /^(\+([0-9]{1,3}))?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test( value );
// }, 'Пожалуйста, введите правильный номер телефона');
// jQuery.validator.addMethod('email', function(value, element) {
//   // allow any non-whitespace characters as the host part
//   return this.optional( element ) || /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( value );
// }, 'Пожалуйста, введите правильный адрес');
form.each((i, el) => {
  $(el).validate({
    rules: {
      'name': {
        required: true,
        minlength: 2
      },
      'email': {
        required: true,
        email: true
      },
      'phone': {
        required: true,
        number: true,
        minlength: 6
        // mask: true
      }
    },
    messages: {
      name: 'Имя должно быть не менее двух символов',
      email: 'Пожалуйста, введите правильный адрес',
      phone: 'Пожалуйста, введите правильный номер телефона'
    },
    errorLabelContainer: '.form__validation-hidden',
    errorClass: 'form__input_invalid'
  });
});

var formSubmit = $('.js-form-submit');

formSubmit.each((i, submit) => {
  $(submit).on('click', function(e) {
    var form = $(submit).parents('.js-form');
    form.valid();
    if (!form.valid()) {
      e.preventDefault();
    }
    else {
      setTimeout(() => {
        modal.removeClass('is-open');
      }, 3000);
    }
  });
});
