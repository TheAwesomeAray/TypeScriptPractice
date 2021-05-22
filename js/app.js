"use strict";
function startGame() {
    var messagesElement;
    messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath! Starting new game!';
    var playerName = 'Andrew';
    logPlayer(playerName);
}
function logPlayer(name) {
    console.log("New game starting for player " + name);
}
document.getElementById('startGame').addEventListener('click', startGame);
var someValue;
someValue = 5;
someValue = 'hello';
var value = 5;
var fixedString = value.toFixed(4);
var otherString = value.toFixed(4);
//# sourceMappingURL=app.js.map