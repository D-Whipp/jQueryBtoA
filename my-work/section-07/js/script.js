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
});
