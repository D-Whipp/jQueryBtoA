$(function () {
  // *** 31 ***
  //   $('#btn-click').click(function (event) {
  //     console.log(event);
  //     alert('Button was clicked!');
  //   });
  //   mini-challenge: add click event to redbox so it fades to 50% opacity
  //   $('.red-box').click(function () {
  //     $('.red-box').css('opacity', '0.5');
  //   });
  //   SUCCESS!!
  //   his way
  //   $('.red-box').click(function () {
  //     $('this').fadeTo(500, 0.5);
  //   });
  //   if you ever need to trigger your event use
  //   $('.red-box').click();
  // *** 32 ***
  // :hover
  //   $('#btn-hover').hover(function () {
  //     alert("You're hovering over the hover button!");
  //   });
  //   mini-challenge: add hover event to greenbox and change it's text to "I was hovered over"
  //   $('.green-box').hover(function () {
  //     $(this).html('<em>Hover-mode activated!</em>');
  //   });
  //   SUCCESS!!
  //   his way
  //   $('.green-box').hover(function () {
  //     $(this).text('I was hovered');
  //   });
  //   *** 33 ***
  //   $('#btn-hover').hover(function () {
  //     alert('Button was hovered.');
  //   });
  //   $('.green-box').hover(function () {
  //     $(this).text('I was hovered.');
  //   });
  //   let blueBox = $('.blue-box');
  //   blueBox.mouseenter(function () {
  // $(this).stop().fadeTo(500, 0.7);
  // $(this)
  //   .stop()
  //   .animate({ height: '200px', width: '200px', opacity: '0.7' });
  // $(this).stop().animate({ width: '200px' });
  //   });
  //   blueBox.mouseleave(function () {
  // $(this).stop().fadeTo(500, 1.0);
  //     $(this)
  //       .stop()
  //       .animate({ height: '80px', width: '80px', opacity: '1' }); // $(this).stop().animate({ width: '80px' });
  //   });
  // mini-challenge: re-write the above code so it works with this new syntax below
  // hover(handlerIn, handlerOut)
  //   blueBox.hover(
  //     function () {
  //       $(this)
  //         .stop()
  //         .animate({ height: '200px', width: '200px', opacity: '0.7' });
  //     },
  //     function () {
  //       $(this)
  //         .stop()
  //         .animate({ height: '80px', width: '80px', opacity: '1' });
  //     }
  //   );
  //   SUCCESS!! I LOVE jQuery
  //   *** 34 ***
  //  .on("click", function(){...})
  //   $('html').on('click keydown', function () {
  //     console.log('Event happened');
  //   });
  // mini-challenge: switch something once it is clicked, use the .on() not .click()
  //   $('.red-box').on('click', function () {
  //     $(this).css('background-color', 'yellow');
  //   });
  //   SUCCESS
  //   he wanted an image changed but I didn't have it anyway
  // his method
  //   let images = ['path', 'path', 'path'];
  //   let i = 0;
  //   $('.gallery')
  //     .find('img')
  //     .on('click', function () {
  //       i = (i + 1) % images.length;
  //       $(this).fadeOut(function () {
  //         $(this).attr('src', images[i]);
  //       });
  //     });
  //   *** 35 ***
  // .on("click", function(){...})
  // function logEvent() {
  //   console.log('Mouse was clicked or a key was pressed.');
  // }
  // $('html').on('click keydown', logEvent);
  // mini-challenge: modularize this code
  // $('.gallery')
  //   .find('img')
  //   .on('click', function () {
  //     i = (i + 1) % images.length;
  //     $(this).fadeOut(function () {
  //       $(this).attr('src', images[i]).fadeIn();
  //     });
  //   });
  // let image = $('.gallery').find('img');
  // let imageGallery = ['path', 'path', 'path'];
  // let i = 0;
  // function switchImg(insertImageHere) {
  //   i = (i + 1) % image.length;
  //   $(this).fadeOut(function () {
  //     $(this).attr('src', imageGallery[i].fadeIn());
  //   });
  // }
  // imageGallery.on('click', switchImg);
  // what he did
  // var images = [
  //   'images/laptop-mobile_small.jpg',
  //   'images/laptop-on-table_small.jpg',
  //   'images/people-office-group-team_small.jpg',
  // ];
  // var i = 0;
  // var galleryImage = $('.gallery').find('img');
  // galleryImage.on('click', switchToNextImage);
  // function switchToNextImage() {
  //   i = (i + 1) % images.length;
  //   galleryImage.fadeOut(function () {
  //     galleryImage.attr('src', images[i]).fadeIn();
  //   });
  // }
  // *** 36 ***
  // $('p').click(function () {
  //   $(this).slideUp();
  // });
  // $('#content').append('<p>Dynamically added paragraph!</p>');
  // Delegated events
  // $('#content').on('click', 'p', function () {
  //   $(this).slideUp(); // this refers to the p tag and not the parent #content
  // });
  // $('#content').append('<p>Dynamically added paragraph!</p>');
  // mini-challenge: add mouseenter events on the body tag which will delegate all the li to change the font color
  // $('body').on('mouseenter', 'li', function () {
  //   $(this).css('color', 'red');
  // });
  // success!!
  // his way
  // $('body').on('mouseenter', 'li', function () {
  //   $(this).css('color', 'grey');
  // });
  // use delegated events to create a todo list
  // *** 37 ***
  // $('#btn-click').click(
  //   {
  //     user: 'Peter',
  //     domain: 'persommerhoff.com',
  //   },
  //   function (event) {
  //     greetUser(event.data);
  //   }
  // );
  // function greetUser(userdata) {
  //   username = userdata.user || 'Anonymous';
  //   domain = userdata.domain || 'example.com';
  //   alert('Welcome back ' + username + ' from ' + domain + '!');
  // }
  // *** 38 ***
  // var galleryItems = $('.gallery').find('img');
  // galleryItems.css('width', '33%').css('opacity', '0.7');
  // galleryItems.mouseenter(function () {
  //   $(this).stop().fadeTo(500, 1);
  // });
  // galleryItems.mouseleave(function () {
  //   $(this).stop().fadeTo(500, 0.7);
  // });
  // galleryItems.click(function () {
  //   var source = $(this).attr('src');
  //   var image = $('<img>').attr('src', source).css('width', '100%');
  //   $('.lightbox').empty().append(image).fadeIn(1200);
  // });
  // mini-challenge: add click handler to lightbox to make it fade out again and stop animations currently going on
  // $('.lightbox').click(function () {
  //   $(this).stop().fadeOut(800);
  // });
  // *** 39 ***
  // $('html').keydown(function (event) {
  //   console.log(event);
  //   console.log(event.which);
  // });
  // mini-challenge: find out the key code for the right arroy key
  // then make blue box move to the right by 10px when the right
  // arrow key is pressed. use margin-left.
  // key code for right arrow: 39
  // $('html').keydown(function (event) {
  // console.log('line 193');
  // console.log(event.key);
  // if (event.key === 'ArrowRight') {
  // console.log('line 195');
  //     $('.blue-box').css('margin-left', '+=10px');
  //   } else if (event.key === 'ArrowDown') {
  //     $('.blue-box').css('margin-top', '+=10px');
  //   }
  // });
  // SUCCESS!!
  // his way
  var ARROW_RIGHT = 39;
  $('html').keydown(function (event) {
    if (event.which == ARROW_RIGHT) {
      $('.blue-box').stop().animate(
        {
          marginLeft: '+=10px',
        },
        50
      );
    }
  });
});
