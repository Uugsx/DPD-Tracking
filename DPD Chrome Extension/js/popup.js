document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("submitButton");
    if (submitButton) {
        submitButton.addEventListener("click", function() {
            var orderNumber = document.getElementById("orderNumber").value;
            var link = "https://www.dpd.ru/dpd/search/search.do2?query=" + orderNumber + "&tracing=true";
            chrome.tabs.create({url: link});
        });
    }
    document.getElementById("orderNumber").addEventListener("keypress", function(event) {
        if (event.keyCode === 13) {
            document.getElementById("submitButton").click();
        }
    });
});