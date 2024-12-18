function handleDeezer(tabs) {
    tabs.forEach((tab) => {
        browserAPI.scripting.executeScript({
            target: {tabId: tab.id},
            func: () => {
                const videoAd = document.getElementById('adContainer');
                return !!videoAd;
            }
        }, (results) => {
            if (results && results[0]) {
                const hasVideoAd = results[0].result;
                browserAPI.tabs.update(tab.id, {muted: hasVideoAd});
            }
        });
    });
}