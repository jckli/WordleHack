let client;
if (!chrome.app) {
    client = browser;
} else{
    client = chrome;
}

var gameState;
try {
    gameState = window.localStorage.gameState;
}
catch (e) {
    console.log("Error while getting gameState: ".concat(e));
}
var solution = JSON.parse(gameState).solution;

client.storage.local.set({solution: solution});