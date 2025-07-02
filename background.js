// Add this file to your extension
chrome.runtime.onInstalled.addListener(() => {
  // This will prompt the user to enter their API key on first install
    chrome.storage.sync.get(["geminiApiKey"], (result) => {
        if (!result.geminiApiKey) {
        chrome.tabs.create({
            url: "options.html",
        });
        }
    });
});
// ✅ .sync vs .local Explanation
// chrome.storage.sync:
// Syncs data across all Chrome browsers where the user is signed in.
// Has size and quota limits (~100KB total).

// ✅ Good for storing user settings, API keys, preferences, etc., that user might want to access on all devices.
// chrome.storage.local:
// Data is stored only on the local machine.
// Has higher limits (~5MB or more).


