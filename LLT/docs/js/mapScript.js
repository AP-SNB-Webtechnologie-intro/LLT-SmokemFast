
let map = L.map('DisneyMap').setView([34.15702, -118.32501], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let circle = L.circle([34.15702, -118.32501], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 150
}).addTo(map);


let marker = L.marker([34.15702, -118.32501]).addTo(map);
marker
.bindPopup(`
    <p>
         <strong>Hoofdkwartier Disney</strong>
    </p>
    <p>
        <adress>South Buena Vista Street, Burbank, Los Angeles, Californië, 91522, Verenigde Staten</adress>
     `)
.openPopup();