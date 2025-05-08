chrome.runtime.onInstalled.addListener(() => {
  const storage = chrome.storage.sync || chrome.storage.local;

  storage.get(["geminiApiKey"], (result) => {
    if (!result.geminiApiKey) {
      chrome.tabs.create({ url: "options.html" });
    }
  });
});
