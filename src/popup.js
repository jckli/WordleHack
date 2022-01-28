browser.storage.local.get("solution").then(function(solution) {
    json = solution.solution;
    document.getElementById("answer-text").innerHTML = json;
});