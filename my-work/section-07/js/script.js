$(function () {
  // *** 40 ***
  //   var inputFields = $('input:text, input:password, textarea');
  //   inputFields.focus(function () {
  //     $(this).css('box-shadow', '0 0 7px #000');
  //   });
  //   inputFields.blur(function () {
  //     $(this).css('box-shadow', 'none');
  //   });
  //   mini-challenge: use blur event for textinput field to check if the input is at least 3 characters, add red box shaddow to indicate something needs to be changed
  // add green box shadow if input is correct
  //   inputFields.blur(function () {
  //     console.log('14');
  //     console.log($(this).value);
  //     if ($(this).length < 3) {
  // $(this).css('box-shadow', '0 0 7px #007000');
  //     } else if ($(this).length >= 3) {
  //       console.log('18');
  //       $(this).css('box-shadow', '0 0 7px #ff0000');
  //     } else {
  //       $(this).css('box-shadow', 'none');
  //     }
  //   });
  // I was on the right track
  //   his way
  //   there was something weird here, the code was right but WASN'T working
  // I fixed it by deleting everything and pasting it back in
  //   weird!
  //   $('#name').blur(function () {
  //     var text = $(this).val();
  //     console.log(text.length);
  //     if (text.length < 3) {
  //       $(this).css('box-shadow', '0 0 7px #ff0000');
  //       console.log('31');
  //     } else {
  //       $(this).css('box-shadow', '0 0 7px #007000');
  //     }
  //   });
  // *** 41 ***
  //   $('#checkbox').change(function () {
  //     var isChecked = $(this).is(':checked'); // prop("checked")
  //     if (isChecked) {
  //       $(this)
  //         .add("label[for='checkbox']")
  //         .css('box-shadow', '0 0 4px #181');
  //     } else {
  //       $(this)
  //         .add("label[for='cb']")
  //         // i added this to fix an error where checkbox lable stayed red
  //         .add("label[for='checkbox']")
  //         .css('box-shadow', '0 0 4px #811');
  //     }
  //   });
  //   mini-challenge: add a select element to html for options that will alert the value when the value changes (alert current selection)
  //   $('#selection').change(function () {
  //     let currentSelection = $(this).text();
  // console.log($(this).val());
  // alert($(this).val());
  // console.log(currentSelection);
  //   });
  //   SUCCESS!
  // his way
  //   $('#selection').change(function () {
  //     var selectedOption = $(this).find(':selected').text();
  //     alert(selectedOption);
  //   });
  // *** 42 ***
  //   $('#form').submit(function (event) {
  //     var textarea = $('#message');
  //     if (textarea.val().trim() == '') {
  //       textarea.css('box-shadow', '0 0 4px #811');
  //       event.preventDefault();
  //     } else {
  //       // form will be submitted
  //     }
  //   });
  //   *** 43 ***
  $('#form').submit(function (event) {
    var name = $('#name').val();
    var password = $('#password').val();
    var message = $('#message').val();
    var checked = $('#checkbox').is(':checked');

    validateNameField(name, event);
    validatePasswordField(password, event);
    validateMessageField(message, event);
    validateCheckboxField(checked, event);
    // validatePasswordField(password, event);
    // validateMessageField(message, event);

    // event.preventDefault();
  });
});

// function validateCheckboxField(isChecked, event) {
//   if (!isChecked) {
//     $('#checkbox-feedback').text('Must check checkbox');
//     event.preventDefault();
//   } else {
//     $('#checkbox-feedback').text('');
//   }
// }

// function validateMessageField(message, event) {
//   if (!isValidateMessage(message)) {
//     $('#message-feedback').text(
//       'Message must be at least 10 characters.'
//     );
//     event.preventDefault();
//   } else {
//     $('message-feedback').text('');
//   }
// }

// function isValidateMessage(message) {
//   return message.length >= 10;
// }

// function validatePasswordField(password, event) {
//   if (!isValidPassword(password)) {
//     $('#password-feedback').text(
//       'Password must be longer than 4 characters.'
//     );
//     event.preventDefault();
//   } else {
//     $('password-feedback').text('');
//   }
// }

// function isValidPassword(password) {
//   return password.length >= 4;
// }

function validateNameField(name, event) {
  if (!isValidName(name)) {
    $('#name-feedback').text('Please enter a valid name');
    event.preventDefault();
  } else {
    $('#name-feedback').text('');
  }
}

function isValidName(name) {
  return name.length >= 2;
}
// mini-challenge: add validation for password field, message field, and checkbox field
// SUCCESS!!
// what he did
function validatePasswordField(password, event) {
  if (!isValidPassword(password)) {
    $('#password-feedback').text(
      'The password should have at least 6 characters and contain a number'
    );
    event.preventDefault();
  } else {
    $('#password-feedback').text('');
  }
}

function isValidPassword(password) {
  return password.length >= 6 && /.*[0-9].*/.test(password);
}

function validateMessageField(message, event) {
  if (!isValidMessage(message)) {
    $('#message-feedback').text('Please enter some text');
    event.preventDefault();
  } else {
    $('#message-feedback').text('');
  }
}

function isValidMessage(message) {
  return message.trim() != '';
}

function validateCheckboxField(isChecked, event) {
  if (!isChecked) {
    $('#checkbox-feedback').text('Please agree to this');
    event.preventDefault();
  } else {
    $('#checkbox-feedback').text('');
  }
}
