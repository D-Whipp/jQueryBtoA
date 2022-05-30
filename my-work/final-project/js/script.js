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

  $('html').keydown(function (event) {
    console.log(event.keyCode);
    if (event.which === 39) {
      $('#snake').css('margin-left', '+=10px');
    } else if (event.which === 37) {
      $('#snake').css('margin-left', '-=10px');
    } else if (event.which === 40) {
      $('#snake').css('margin-top', '+=10px');
    } else if (event.which === 38) {
      if ($('#snake').css('marginTop') <= '0px') {
        $('#snake').css('margin-top', '0px');
      } else {
        // console.log($('#snake'));
        $('#snake').css('margin-top', '-=10px');
      }
    }
  });
});
