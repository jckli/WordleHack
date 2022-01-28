function getSolution() {
    var gameState;
    try {
        gameState = window.localStorage.gameState;
    }
    catch (e) {
        console.log("Error while getting gameState: ".concat(e));
    }
    var solution = JSON.parse(gameState).solution;
    return solution;
}
browser.browserAction.onClicked.addListener(() => {
    var solution = getSolution();
});