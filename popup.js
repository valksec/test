// Sample popup.js

document.getElementById("blockWebsiteButton").addEventListener("click", () => {
  browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    browser.tabs.sendMessage(activeTab.id, { action: "blockWebsite" });
  });
});

document.getElementById("toggleAdBlockingButton").addEventListener("click", () => {
  browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    browser.tabs.sendMessage(activeTab.id, { action: "toggleAdBlocking" });
  });
});
