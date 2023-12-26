
let map = L.map('factsMap').setView([51.02698, 3.69202], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let circle = L.circle([51.02698, 3.69202], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 150
}).addTo(map);


let marker = L.marker([51.02698, 3.69202]).addTo(map);
marker
.bindPopup(`
    <p>
         <strong>F.A.C.T.S. Evenement</strong>
    </p>
    <p>
        <adress>Maaltekouter 1, 9051 Gent</adress>
     `)
.openPopup();