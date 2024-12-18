importScripts('muteTabs.js');

// Gecko / Chromium compatibility
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;
console.log(browserAPI)

function checkForVideoAd() {
    browserAPI.tabs.query({url: "*://*.deezer.com/*"}, handleDeezer);
}

setInterval(checkForVideoAd, 500);
