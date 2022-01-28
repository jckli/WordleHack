var gameState;
try {
    gameState = window.localStorage.gameState;
}
catch (e) {
    console.log("Error while getting gameState: ".concat(e));
}
var solution = JSON.parse(gameState).solution;

browser.storage.local.set({solution: solution});