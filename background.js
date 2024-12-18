import { handleDeezer, handleYoutube , handleSpotify} from './muteTabs.js';

// Gecko / Chromium compatibility
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;
console.log(browserAPI);

function checkForVideoAd() {
    browserAPI.tabs.query({url: "*://*.deezer.com/*"}, handleDeezer);
    browserAPI.tabs.query({url: "*://*.youtube.com/*"}, handleYoutube);
    browserAPI.tabs.query({url: "*://*.spotify.com/*"}, handleSpotify);
}

browserAPI.runtime.onInstalled.addListener(() => {
    setInterval(checkForVideoAd, 500);
});