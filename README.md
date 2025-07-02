# AI Article Summarizer Chrome Extension

Summarize any article on the web instantly using Google Gemini AI! This Chrome extension lets you generate brief, detailed, or bullet-point summaries of articles directly from your browser.

---

## ⚠️ Not Published – Local Use Only
This extension is **not published** on the Chrome Web Store. You must use it locally and manually update any required information (such as your API key) in the extension's settings.

---

## Features
- **One-click Summarization:** Summarize the current page with a single click.
- **Multiple Summary Types:** Choose between brief, detailed, or bullet-point summaries.
- **Copy to Clipboard:** Easily copy the generated summary.
- **Custom API Key:** Securely store and use your own Gemini API key.
- **Works on Any Webpage:** Extracts main content from most articles.

---

## Local Installation
1. **Clone or Download** this repository to your computer.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the `AI_Article_Summerizer_Chrome_Extention` folder.
5. The extension icon will appear in your Chrome toolbar.

---

## Manual Setup
1. On first install, the options page will open automatically. If not, right-click the extension icon and choose **Options**.
2. Enter your [Google Gemini API key](https://makersuite.google.com/app/apikey) and save.
3. You must manually update your API key or any other settings as needed.

---

## Usage
1. Navigate to any article or webpage you want to summarize.
2. Click the extension icon.
3. Select your preferred summary type (Brief, Detailed, Bullets).
4. Click **Summarize This Page**.
5. View the summary in the popup. Click **Copy Summary** to copy it to your clipboard.

---

## Permissions Explained
- `activeTab`, `scripting`: To read the content of the current page for summarization.
- `storage`: To securely store your API key and settings.
- `host_permissions: <all_urls>`: To allow summarization on any website.

---

## Troubleshooting
- **API Key Not Found:** Make sure you have entered and saved your Gemini API key in the options page.
- **Summary Not Generated:** Some pages may not have extractable article content, or your API key may have reached its quota.
- **Extension Not Working:** Try refreshing the page, or reinstalling the extension.

---

## Privacy & Security
- Your API key is stored securely using Chrome's `storage.sync` and is never shared.
- All summarization requests are sent directly from your browser to the Gemini API.

---

## Credits
- Built with [Google Gemini API](https://ai.google.dev/).

