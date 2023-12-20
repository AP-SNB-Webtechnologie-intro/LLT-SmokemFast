
let map = L.map('AdminMap').setView([23.498980395648076, 25.731980646733735], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let circle = L.circle([23.498980395648076, 25.731980646733735], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 50
}).addTo(map);


let marker = L.marker([23.498980395648076, 25.731980646733735]).addTo(map);
marker
.bindPopup(`
    <p>
         <strong>Schuilplaats Lord Sidious</strong>
    </p>
    <p>
        <adress>Sahara woestijn, Egypte</adress>
     `)
.openPopup();