window.onload = function() {
    // Get search params
    const params = new URLSearchParams(window.location.search);

    // Load iframe widgets
    let paramID = params.get("id");
    if (paramID != null) {
        for (const iframe of document.getElementsByClassName("widget")) {
            iframe.src = iframe.dataset.url + paramID;
        }
    }
}