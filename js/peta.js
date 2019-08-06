// =========== TUGAS 1 =============
let lokasi = [-7.961436, 112.624076];
let markertitle = "<p align='center'><b>Ayam Goreng Nelongso </b><br>Lat:-7.946302 Long:112.617628<br><br> Jl. Soekarno-Hatta, Jatimulyo, Lowokwaru, Kota Malang, Jawa Timur 65141</p>";
let marker = L.marker(lokasi).addTo(mymap).bindPopup(markertitle);


// ========== TUGAS 2 ==============
let places = [

    { "lokasi": [-7.962987, 112.622500], "sponsor": "<p align='center'><b>Teras Komika</b><br>Lat:-7.962987 Long:112.622500 <br><br> </p>" },
    { "lokasi": [-7.938469, 112.633599], "sponsor": "<p align='center'><b>Warunk Upnormal</b><br>Lat:-7.938469 Long:112.633599 <br><br> </p>" },
    { "lokasi": [-7.938723, 112.589576], "sponsor": "<p align='center'><b>Coklat Klasik</b><br>Lat:-7.938723 Long:112.589576 <br><br> </p>" },
    { "lokasi": [-7.938707, 112.590303], "sponsor": "<p align='center'><b>Bukit Delight</b><br>Lat:-7.958507 Long:112.590303 <br><br> </p>" },
    { "lokasi": [-7.946225, 112.61811], "sponsor": "<p align='center'><b>Warung Steak & Shake</b><br>Lat:-7.938707 Long:112.61811 <br><br> </p>" },
    { "lokasi": [-7.946302, 112.617628], "sponsor": "<p align='center'><b>Ayam Goreng Nelongso</b><br>Lat:-7.946302 Long:112.617628 <br><br> </p>" }

];

for (var p of places) {
    var markerlist = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
}


// ============ TUGAS 3 =============
function findLocation(x, y) {
    console.log(x, y);
    for (var i = 0; i < places.length; i++) {
        if (places[i].lokasi[0] == x && places[i].lokasi[1] == y) {
            return i;
        }
    }
    return -1;
}

function showLocation(e) {
    // console.log("you clicked " + e.latlng.lat + " dan "+ e.latlng.lng);
    let ix = findLocation(e.latlng.lat, e.latlng.lng);
    console.log(ix);
    if (ix >= 0) {
        img.src = placesreview[ix].gambar;
        par.textContent = placesreview[ix].review;
    }
}

// Persiapkan tempat untuk gambar dan review
let gmb = document.getElementById("gmb");
let rev = document.getElementById("review");
let img = document.createElement('img');
let par = document.createElement('p');
gmb.appendChild(img);
rev.appendChild(par);

let r0 = "Teras Komika - Nongkrong asik dan murah meriah dari hongkong :P.";
let r1 = "Warunk Upnormal - Tempat asik buat nongki se- Upnormal hidup loe :P.";
let r2 = "Coklat Klasik - Dinner romantis ala ala outdoor dengan lighting yang mengesankan.";
let r3 = "KBukit Delight - Tempat nongkinya orang borjuis.";
let r4 = "Warung Steak & Shake - Tempat asik buat ngobrol cantik dengan menu unikWarung Steak & Shake - Tempat asik buat ngobrol cantik dengan menu unik.";
let r5 = "Ayam Goreng Nelongso - Tombo luwe arek mahasiswa Malang.";

let placesreview = [


     { "lokasi": [-7.962987, 112.622500], "sponsor": "<p align='center'><b>Teras Komika</b><br>Lat:-7.962987 Long:112.622500 <br><br> </p>" },
    { "lokasi": [-7.938469, 112.633599], "sponsor": "<p align='center'><b>Warunk Upnormal</b><br>Lat:-7.938469 Long:112.633599 <br><br> </p>" },
    { "lokasi": [-7.938723, 112.589576], "sponsor": "<p align='center'><b>Coklat Klasik</b><br>Lat:-7.938723 Long:112.589576 <br><br> </p>" },
    { "lokasi": [-7.938707, 112.590303], "sponsor": "<p align='center'><b>Bukit Delight</b><br>Lat:-7.958507 Long:112.590303 <br><br> </p>" },
    { "lokasi": [-7.946225, 112.61811], "sponsor": "<p align='center'><b>Warung Steak & Shake</b><br>Lat:-7.938707 Long:112.61811 <br><br> </p>" },
    { "lokasi": [-7.946302, 112.617628], "sponsor": "<p align='center'><b>Ayam Goreng Nelongso</b><br>Lat:-7.946302 Long:112.617628 <br><br> </p>" }


];

for (var p of placesreview) {
    var markerreview = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
    markerreview.on('click', showLocation);
}




