(function () {
    if ('serviceWorker' in navigator) {
        console.log('service worker registration in progress.');
        navigator.serviceWorker.register('/serviceworker.js').then(function () {
            console.log('service worker registration complete.');
        }, function () {
            console.log('service worker registration failure.');
        });
    } else {
        console.log('service worker is not supported.');
    }
})();