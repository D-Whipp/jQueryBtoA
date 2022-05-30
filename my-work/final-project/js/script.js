$(document).ready(function () {
  // using jQuery to grab the #snake div and style it
  let snake = $('#snake');
  snake.css({
    'background-color': '#eee',
    width: '10px',
    height: '10px',
    'z-index': '1000',
    position: 'absolute',
    marginTop: '10px',
    marginLeft: '10px',
  });

  // snake movement logic
  $('html').keydown(function (event) {
    // console.log(event.keyCode);
    // using jQuery method event.which to determine which keyboard key was pressed
    // i'm looking for the arrow keys UP, DOWN, RIGHT, and LEFT
    // after assessing which arrow key was pressed i add or take away margin from
    // either the top or left to move the snake accordingly
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
  // end snake movement logic

  // create food logic
  // here jQuery is used to create a div with the id of food
  // after setting a variable of food to the food div
  // jQuery is used for styling
  $('html').prepend("<div id='food'></div>");
  let food = $('#food');

  // using math to randomly set the food's margin values
  let xCoord = Math.floor(Math.random() * 390 + 1);
  console.log(xCoord);
  let yCoord = Math.floor(Math.random() * 390 + 1);
  console.log(yCoord);

  food.css({
    'background-color': '#FF0000',
    width: '10px',
    height: '10px',
    'z-index': '1000',
    position: 'absolute',
    marginTop: yCoord,
    marginLeft: xCoord,
  });
  // console.log(food);
  // end food logic
});
