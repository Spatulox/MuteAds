const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

export function handleDeezer(tabs) {
    globalMute(tabs, 'adContainer');
}

export function handleYoutube(tabs) {
    globalMute(tabs, "ad-showing");
}

function globalMute(tabs, CSSid) {
    console.log("globalmute");
    tabs.forEach((tab) => {
        browserAPI.scripting.executeScript({
            target: {tabId: tab.id},
            func: (CSSidChild) => {
                const videoAd = document.getElementById(CSSidChild) || document.getElementsByClassName(CSSidChild)[0];
                return !!videoAd;
            },
            args: [CSSid]
        }).then((results) => {
            if (results && results[0]) {
                const hasVideoAd = results[0].result;
                browserAPI.tabs.update(tab.id, {muted: hasVideoAd});
            }
        }).catch(error => console.error('Error:', error));
    });
}
