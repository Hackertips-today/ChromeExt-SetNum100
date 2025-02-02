(function() {
    let url = new URL(window.location.href);

    // Check if `num` exists, if not, set it to 100
    if (!url.searchParams.has("num") || url.searchParams.get("num") !== "100") {
        url.searchParams.set("num", "100");
        window.location.replace(url.href); // Redirect to the modified URL
    }
})();


