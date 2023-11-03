const blockedAdDomains = [
  "ad.doubleclick.net",
  "adservice.google.com",
  "seegore.com",
  "goresee.com",
  "goregrish.com",
  "bestgore.com",
  "manbeef.com",
  "ogrish.com",
  "pornhub.com",
  "xhamster.com",
  "xvideos.com",
  "xnxx.com",
  "youporn.com",
  "porn.com",
  "redtube.com",
  "porn300.com",
  "pornhat.com",
  "porn-plus.com",
  "eporner.com",
  "xnxx2.com",
  "fuq.com",
  "xnxx.tv",
  "4porn.com",
  "redporn.porn",
];

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getBlockedWebsites") {
    sendResponse({ blockedWebsites });
  } else if (message.action === "blockAds") {
    blockAdsOnPage();
  }
});

function blockAdsOnPage() {
  const adElements = document.querySelectorAll("img, iframe, script");
    adElements.forEach((element) => {
    const src = element.src;
    if (src) {
      const domain = new URL(src).host;
      if (blockedAdDomains.includes(domain)) {
        element.remove(); 
      }
    }
  });
}
