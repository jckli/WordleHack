let client;
if (!chrome.app) {
    client = browser;
} else{
    client = chrome;
}

client.storage.local.get("solution", function(solution) {
    let realSolution = "Cannot find solution.";
    if (solution.solution != undefined) {
        realSolution = solution.solution;
    }

    document.getElementById("answer-text").textContent = realSolution;
});