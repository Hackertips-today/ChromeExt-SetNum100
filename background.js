chrome.webNavigation.onBeforeNavigate.addListener(details => {
    let url = new URL(details.url);

    if (!url.searchParams.has("num") || url.searchParams.get("num") !== "100") {
        url.searchParams.set("num", "100");

        chrome.tabs.update(details.tabId, { url: url.href });
    }
}, { url: [{ hostEquals: "www.google.com", pathPrefix: "/search" }] });


