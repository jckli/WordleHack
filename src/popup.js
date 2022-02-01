let client;
if (!chrome.app) {
    client = browser;
} else{
    client = chrome;
}

client.storage.local.get("solution", function(solution) {
    json = solution.solution;
    let realSolution = "Cannot find solution.";
    if (json != undefined) {
        realSolution = json;
    }

    document.getElementById("answer-text").textContent = realSolution;
});