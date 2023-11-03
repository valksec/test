const blockedWebsites = [
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
  }
});


function addBlockedWebsite(website) {
  blockedWebsites.push(website);
}

function removeBlockedWebsite(website) {
  const index = blockedWebsites.indexOf(website);
  if (index !== -1) {
    blockedWebsites.splice(index, 1);
  }
}
