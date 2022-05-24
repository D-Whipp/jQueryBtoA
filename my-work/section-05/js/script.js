$(function () {
  // text(), html()
  let firstPara = $('p:first');
  console.log(firstPara.text());
  console.log(firstPara.html());
  console.log($('p').html());

  // firstPara.text("<strong>Hello World!</strong>")
  // firstPara.html("<strong>Hello World!</strong>")
  // mini challenge: append some text to first paragraph
  // my way
  // firstPara.append('<p>this was just appended.</p>');
  // his way
  firstPara.html(firstPara.html() + ' This was just appended.');
});
