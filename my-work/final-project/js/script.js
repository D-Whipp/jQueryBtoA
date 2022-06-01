$(document).ready(function () {
  function createSnake() {
    // using jQuery to grab the #snake div and style it
    let snake = $('#snake');
    snake.css({
      'background-color': '#eee',
      width: '15px',
      height: '15px',
      'z-index': '1000',
      position: 'absolute',
      marginTop: '10px',
      marginLeft: '10px',
      // borderRadius: '5px',
    });
  }

  class Snake {
    constructor() {
      this.width = '15px';
      this.height = '15px';
      this.marginLeft = '10px';
      this.marginTop = '10px';
      this.backgroundColor = 'yellow';
    }

    calcX() {
      return (this.marginLeft += '5px');
    }

    calcY() {
      return (this.marginTop += '5px');
    }
  }

  let objSnake = new Snake();
  console.log(objSnake);

  let snake = new createSnake();

  // snake movement logic
  function enableFastFeedback(event) {
    // console.log(event.keyCode);
    // using jQuery method event.which to determine which keyboard key was pressed
    // i'm looking for the arrow keys UP, DOWN, RIGHT, and LEFT
    // after assessing which arrow key was pressed i add or take away margin from
    // either the top or left to move the snake accordingly
    let snakeXCoord = $('#snake').css('margin-left');
    let snakeYCoord = $('#snake').css('margin-top');
    if (event.which === 39) {
      if ($('#snake').css('margin-left') == '390px') {
        $('#snake').css('margin-left', '390px');
        // snakeXCoord = $('#snake').css('margin-left');
        // console.log('X-Coord: ', snakeXCoord);
      } else {
        // console.log(this);
        $('#snake').css('margin-left', '+=10px');
        // console.log('X-Coord: ', snakeXCoord);
      }
    } else if (event.which === 37) {
      if ($('#snake').css('margin-left') == '10px') {
        $('#snake').css('margin-left', '10px');
        // console.log('X-Coord: ', snakeXCoord);
      } else {
        $('#snake').css('margin-left', '-=10px');
        // console.log('X-Coord: ', snakeXCoord);
      }
    } else if (event.which === 40) {
      if ($('#snake').css('margin-top') == '390px') {
        $('#snake').css('marmgin-top', '390px');
        // console.log('Y-Coord: ', snakeYCoord);
      } else {
        $('#snake').css('margin-top', '+=10px');
        // console.log('Y-Coord: ', snakeYCoord);
      }
    } else if (event.which === 38) {
      if ($('#snake').css('margin-top') == '10px') {
        $('snake').css('margin-top', '10px');
        // console.log('Y-Coord: ', snakeYCoord);
      } else {
        // console.log($('#snake'));
        $('#snake').css('margin-top', '-=10px');
        // console.log($('#snake').css('margin-top'));
        // console.log('Y-Coord: ', snakeYCoord);
      }
    }
    // console.log(
    //   'X-Coord: ' + snakeXCoord + ' Y-Coord: ' + snakeYCoord
    // );
    coords = snakeXCoord + ' ' + snakeYCoord;
    console.log(coords);
    // return coords;
  }

  function createFood() {
    // create food logic
    // here jQuery is used to create a div with the id of food
    // after setting a variable of food to the food div
    // jQuery is used for styling
    // food is prepend to 'html' for stability
    // appending to snake causes snakelike behavior
    // appending to canvas causes food to disappear
    $('html').prepend("<div id='food'></div>");
    let food = $('#food');

    // using math to randomly set the food's margin values
    let xCoord = Math.floor(Math.random() * 355 + 30);
    // console.log("Food X: ", xCoord);
    let yCoord = Math.floor(Math.random() * 355 + 30);
    // console.log("Food Y: ", yCoord);

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
  }

  $('html').keydown(enableFastFeedback);
  createFood();
});
