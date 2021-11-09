// function that injects code to a specific tab
function injectScript(tabId: number) {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: ["js/inject.js"],
  });
}

// adds a listener to tab change
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    injectScript(tabId);
  }
});
