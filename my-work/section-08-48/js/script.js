$(function () {
  // JSON, $.getJSON()
  var pokeApiUrl = 'https://pokeapi.co/api/v2/generation/1';

  $.getJSON(pokeApiUrl)
    .done(function (response) {
      console.log(response);
      $.each(response.pokemon_species, function (index, pokemon) {
        var name =
          pokemon.name.charAt(0).toUpperCase() +
          pokemon.name.slice(1);
        var par = $('<p>').html(
          'Pokémon species no. ' + (index + 1) + ' is ' + name
        );
        par.appendTo('#pokedex');
      });
    })
    .fail(function (response) {
      console.log('Request to Pokeapi failed: ' + response);
    })
    .always(function () {
      console.log('Pokémon 1st Gen is awesome!');
    });
});
