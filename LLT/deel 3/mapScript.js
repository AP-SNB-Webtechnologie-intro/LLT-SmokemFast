/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
* Gebruik hiervoor de documentatie op https://leafletjs.com/ 
* Verander in de code online alle "var" in "let".
*/

let map = L.map('apMap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);








// bepaal de rechthoek rondom het gebouw van AP
var bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];

// kleur de rechthoek in met de rode AP-kleur
let marker = L.rectangle(bounds, {color: "#ff0000", weight: 1}).addTo(map);

// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
L.marker([51.23009, 4.4616]).addTo(map);
marker
.bindPopup(`
    <p>
         <strong>AP-Hogeschool</strong>
    </p>
    <p>
        <adress>Ellermansstraat 33</adress>
     `)
.openPopup();