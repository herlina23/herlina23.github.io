let places = JSON.parse(localStorage.getItem('places'));

function findLocation(x, y) {
    // console.log(x,y);
    for (var i = 0; i < places.length; i++) {
        if (places[i].lokasi[0] == x && places[i].lokasi[1] == y) {
            return i;
        }
    }
    return -1;
}

function showLocation(e) {
    //console.log("you clicked " + e.latlng.lat + " dan "+e.latlng.lng);
    let ix = findLocation(e.latlng.lat, e.latlng.lng);
    if (ix >= 0) {
        img.src = places[ix].gambar;
        par.textContent = places[ix].review;
    }
}

let gmb = document.getElementById("gmb");
let rev = document.getElementById("review");
let img = document.createElement('img');
let par = document.createElement('p');
gmb.appendChild(img);
rev.appendChild(par);

var URL1 = "https://herlina-project.firebaseapp.com/data/petanew.json";

// buat fetch dari peta.json
(async function () {
    //const URL = "../data/petanew.json";
    //const URL = "https://yusufrizalh-mws.firebaseapp.com/data/petanew.json";
    try {
        const resp = await (fetch(URL1));
        const respv2 = await resp.json();
        localStorage.setItem('places', JSON.stringify(respv2.places));
        //let places = JSON.parse(localStorage.getItem('places'));
        places = respv2.places;
        for (var p of respv2.places) {
            var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
            marker.on('click', showLocation);
        }

    } catch (err) {
        console.log(err);
    }
})();

console.log(places);

for (var p of places) {
    var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
    marker.on('click', showLocation);
}