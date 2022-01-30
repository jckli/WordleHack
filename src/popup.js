browser.storage.local.get("solution").then(function(solution) {
    json = solution.solution;
    let realSolution = "Cannot find solution.";
    if (json != undefined) {
        realSolution = json;
    }

    document.getElementById("answer-text").textContent = realSolution;
});