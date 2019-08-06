var mymap = L.map('mapid').setView([-7.986483, 112.628681], 13);

// PLACE 1
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoieXVzdWZyaXphbGgiLCJhIjoiY2pubDh4ZDFtMDZqajNwbnppandja25nbCJ9.ULxqaXHPzFArFjMk7cdcxQ'
}).addTo(mymap);

var marker1 = L.marker([-7.986483, 112.628681]).addTo(mymap);
var circle1 = L.circle([-7.986483, 112.628681], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
marker1.bindPopup("<p align='center'><img src='../images/imgpeta/arab.jpg' width='100%'><br><br><b>Tempat favorit :Arabian Resto Malang</b><br>Lat:-7.986483 Long:112.628681 <br><br> Embong Arab, Klojen, Kauman, Klojen, Kota Malang, Jawa Timur 65119</p>").openPopup();

function onMapClick(e) {
    console.log("Peta diklik pada posisi " + e.latlng);
}
mymap.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Lokasi yang dipilih: " + e.latlng.toString())
        .openOn(mymap);
}
mymap.on('click', onMapClick);