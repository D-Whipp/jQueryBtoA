$(function () {
  // JSON, $.getJSON()
  var pokeApiUrl = 'https://pokeapi.co/api/v2/generation/1';
  var pokemonByName = 'https://pokeapi.co/api/v2/pokemon/';

  $.getJSON(pokeApiUrl)
    .done(function (response) {
      //   console.log(response);
      $.each(response.pokemon_species, function (index, pokemon) {
        var name =
          pokemon.name.charAt(0).toUpperCase() +
          pokemon.name.slice(1);
        var link = $('<a>')
          .attr('id', pokemon.name)
          .attr('href', '#')
          .append($('<strong>').text(name));
        var par = $('<p>')
          .html('Pokémon species no. ' + (index + 1) + ' is ')
          .append(link);

        link.click(function (event) {
          $.getJSON(pokemonByName + pokemon.name).done(function (
            details
          ) {
            console.log(details);
            var pokemonDiv = $('#pokemon-details');
            pokemonDiv.empty();
            pokemonDiv.append('<h2>' + name + '</h2>');
            pokemonDiv.append(
              '<img src="' + details.sprites.front_default + '">'
            );
            // mini-challenge: append 3 other images from the pokemon data
            pokemonDiv.append(
              '<img src="' + details.sprites.back_default + '">'
            );
            pokemonDiv.append(
              '<img src="' + details.sprites.back_shiny + '">'
            );
            pokemonDiv.append(
              '<img src="' + details.sprites.front_shiny + '">'
            );
            // success
          });
          event.preventDefault();
        });

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
