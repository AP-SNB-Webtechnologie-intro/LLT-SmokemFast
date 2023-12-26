
let map = L.map('WebdesignerMap').setView([51.30156, 4.50601], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let circle = L.circle([51.30156, 4.50601], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 7
}).addTo(map);


let marker = L.marker([51.30156, 4.50601]).addTo(map);
marker
.bindPopup(`
    <p>
         <strong>Adres Webdesigner</strong>
    </p>
    <p>
        <adress>Heislagsebaan 175, 2930 Brasschaat</adress>
     `)
.openPopup();