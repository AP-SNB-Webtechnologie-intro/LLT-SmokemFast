
  function fetchData(url) {
    return fetch(url)
      .then(function (response) { return response.json() });
  }

  fetchData('https://swapi.dev/api/people/4')
    .then(function (json) {
      console.log(json);

      let html = '<li><strong>Naam:</strong> ' + json.name + '</li>';
      html += '<li><strong>Geboortejaar:</strong> ' + json.birth_year + '</li>';
      html += '<li><strong>Geslacht:</strong> ' + json.gender + '</li>';
      html += '<li><strong>Lengte:</strong> ' + json.height + ' cm</li>';
      html += '<li><strong>Massa:</strong> ' + json.mass + ' kg</li>';
      html += '<li><strong>Huidskleur:</strong> ' + json.skin_color + '</li>';
      html += '<li><strong>Haarkleur:</strong> ' + json.hair_color + '</li>';
      html += '<li><strong>Oogkleur:</strong> ' + json.eye_color + '</li>';

      fetchData(json.homeworld)
        .then(function (homeworldData) {
          html += '<li><strong>Thuiswereld:</strong> ' + homeworldData.name + '</li>';
        });

      if (json.starships.length > 0) {
        fetchData(json.starships[0])
          .then(function (starshipData) {
            html += '<li><strong>Starship:</strong> ' + starshipData.name + '</li>';
            document.getElementById("charinfo").innerHTML = html;
          });
      } else {
        document.getElementById("charinfo").innerHTML = html;
      }
    });


