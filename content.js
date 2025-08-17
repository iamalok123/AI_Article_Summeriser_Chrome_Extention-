chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "GET_ARTICLE_TEXT") {
        try {
            const documentClone = document.cloneNode(true);
            const article = new Readability(documentClone).parse();

            if (article && article.textContent) {
                sendResponse({ text: article.textContent });
            } else {
                sendResponse({ text: "" });
            }
        } catch (error) {
            console.error("Error using Readability:", error);
            sendResponse({ text: "" });
        }
        return true;
    }
});