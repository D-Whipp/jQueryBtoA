$(function () {
  let galleryImage = $('.gallery').find('img').first();
  let images = [
    'images/laptop-mobile_small.jpg',
    'images/laptop-on-table_small.jpg',
    'images/people-office-group-team_small.jpg',
  ];

  let i = 0;
  setInterval(function () {
    i = (i + 1) % images.length; // 0,1,2,0,1,2,0...
    galleryImage.fadeOut(function () {
      $(this).attr('src', images[i]);
      $(this).fadeIn();
    });
    console.log(galleryImage.attr('src'));
  }, 2000);
});
