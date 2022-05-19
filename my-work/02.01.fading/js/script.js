$(function () {
  // $('ul ul:first').append(
  //   "<li>I'm the last item in the first sub-list</li>"
  // );
  // $('<li>I am the last item in the last sub-list</li>').appendTo(
  //   $('ul ul:last')
  // );
  // $('ul ul:first').prepend(
  //   '<li>I am the first item in the first sub-list</li>'
  // );
  // $('ul ul').prepend(
  //   '<li>I am everywhere!</li>'
  // );
  // $('<li>I am the new first place</li>').prependTo('ul ul:first');
  // $('<h4>David W.</h4>').prependTo('#content');
  // $('.red-box').after("<div class='red-box'>I'm a sibling</div>");
  // $('.blue-box').before("<div class='blue-box'>I'm a sibling</div>");
  // $('.green-box').before(function() {
  //   return "<div class='blue-box'>Blue Two</div>";
  // });

  // $('p').before($(".red-box"));
  // $('p').after($(".red-box"));
  // mini challenge add a new box for each color as the NEXT sibling
  $('.red-box').after("<div class='red-box'>I'm a sibling</div>");
  $('.blue-box').after("<div class='blue-box'>I'm a sibling</div>");
  $('.green-box').after("<div class='green-box'>I'm a sibling</div>");

  // me playing around
  $('p').after('<h5>Hi from after!</h5>');
  $('p').before('<h5>Hi from before!</h5>');
  $('<li>appendTo</li>').appendTo($('ul ul:first'));
  $('ul ul:first').append('<li>append</li>');
  $('ul ul:first').prepend('<li>prepend</li>');
  $('ul ul').prepend('<li>ul ul</li>');
  $('<li>prependTo</li>').prependTo('ul ul:first'); // required <li></li> to show up
});
