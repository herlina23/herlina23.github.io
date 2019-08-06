"use strict";
console.log('SERVICE-WORKER: executing.');

var version = '::Herlina::';
var offlineFundamentals = [
    '/',
    '/index.html',
    'css/custom.css',
    'css/map.css',
    'css/peta.css',
    'css/myGrid.css',
    'css/myStyle.css',
    'css/myCssGrid.css',
    'js/add2numbers.js',
    'js/map.js',
    'js/peta.js',
    'js/peta-fetch-json.js',
    '/jquery.js',
    '/ambilserviceworker.js',
    'data/petanew.json',

    'images/moi.jpg',
    'images/hp.png',
    'images/calcu1.png',
    'images/map1.png',
    'images/resto.png',
    'images/icon-a.png',
    'images/icon-b.png',
    'images/icon-c.png',


    'images/imgpeta/coklat.jpg',
    'images/imgpeta/bukit.jpg',
    'images/imgpeta/wss.jpg',
    'images/imgpeta/nelongso.jpg',
    'images/imgpeta/Ria-Djenaka.jpg',
    'images/imgpeta/upnormal.jpg',
    'images/imgpeta/json.png',
    'images/imgpeta/arab.jpg',
    'images/imgpeta/arab-deco.jpg',


    'https://unpkg.com/leaflet@1.3.4/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.3.4/dist/leaflet.js',
    'project1/add2numbers.html',
    'project2/mapbox.html',
    // 'project3/peta.html',
    'project4/peta.html'
];

self.addEventListener("install", function (event) {
    console.log('SERVICE-WORKER: install event in progress.');

    event.waitUntil(
        caches
        .open(version + 'fundamentals')
        .then(function (cache) {
            return cache.addAll(offlineFundamentals);
        })
        .then(function () {
            console.log('SERVICE-WORKER: install completed');
        })
    );
});

self.addEventListener("fetch", function (event) {
    console.log('SERVICE-WORKER: fetch event in progress.');

    if (event.request.method !== 'GET') {
        console.log('SERVICE-WORKER: fetch event ignored.', event.request.method, event.request.url);
        return;
    }

    event.respondWith(
        caches
        .match(event.request)
        .then(function (cached) {
            var networked = fetch(event.request)
                .then(fetchedFromNetwork, unableToResolve)
                .catch(unableToResolve);

            console.log('SERVICE-WORKER: fetch event', cached ? '(cached)' : '(network)', event.request.url);
            return cached || networked;

            function fetchedFromNetwork(response) {
                var cacheCopy = response.clone();
                console.log('SERVICE-WORKER: fetch response from network.', event.request.url);

                caches
                    .open(version + 'pages')
                    .then(function add(cache) {
                        return cache.put(event.request, cacheCopy);
                    })
                    .then(function () {
                        console.log('SERVICE-WORKER: fetch response stored in cache.', event.request.url);
                    });
                return response;
            }

            function unableToResolve() {
                console.log('SERVICE-WORKER: fetch request failed in both cache and network.');
                return new Response('<h1>Service Unavailable</h1>', {
                    status: 503,
                    statusText: 'Service Unavailable',
                    headers: new Headers({
                        'Content-Type': 'text/html'
                    })
                });
            }
        })
    );
});

self.addEventListener("activate", function (event) {
    console.log('SERVICE-WORKER: activate event in progress.');

    event.waitUntil(
        caches
        .keys()
        .then(function (keys) {
            return Promise.all(
                keys
                .filter(function (key) {
                    return !key.startsWith(version);
                })
                .map(function (key) {
                    return caches.delete(key);
                })
            );
        })
        .then(function () {
            console.log('SERVICE-WORKER: activate completed.');
        })
    );
});
