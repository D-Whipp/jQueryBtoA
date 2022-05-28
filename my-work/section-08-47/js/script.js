$(function () {
  //JSON, $.getJSON()
  var flickrApiUrl =
    'https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

  $.getJSON(flickrApiUrl, {
    // options...
    tags: 'sun, beach',
    tagmode: 'any',
    format: 'json',
  })
    .done(function (response) {
      // success
      console.log(response);
      $.each(response.items, function (index, value) {
        console.log(value);
        $('<img>').attr('src', value.media.m).appendTo('#flickr');

        if (index == 5) {
          return false;
        }
      });
    })
    .fail(function (response) {
      // error
      alert('Ajax call failed.');
    });
});
