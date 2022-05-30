$(document).ready(function () {
  //   $('#canvas').css('background-color', '#777');
  let snake = $('#snake');
  snake.css({
    'background-color': '#eee',
    width: '10px',
    height: '10px',
    'z-index': '1000',
    position: 'absolute',
  });

  // snake movement
  $('html').keydown(function (event) {
    console.log(event.keyCode);
    if (event.which === 39) {
      if ($('#snake').css('margin-left') == '390px') {
        $('#snake').css('margin-left', '390px');
      } else {
        $('#snake').css('margin-left', '+=10px');
      }
    } else if (event.which === 37) {
      if ($('#snake').css('margin-left') == '10px') {
        $('#snake').css('margin-left', '10px');
      } else {
        $('#snake').css('margin-left', '-=10px');
      }
    } else if (event.which === 40) {
      if ($('#snake').css('margin-top') == '390px') {
        $('#snake').css('marmgin-top', '390px');
      } else {
        $('#snake').css('margin-top', '+=10px');
      }
    } else if (event.which === 38) {
      if ($('#snake').css('marginTop') <= '10px') {
        $('#snake').css('margin-top', '10px');
      } else {
        // console.log($('#snake'));
        $('#snake').css('margin-top', '-=10px');
      }
    }
  });
});
