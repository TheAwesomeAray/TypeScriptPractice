function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath! Starting new game!';
    //Valid javascript is also valid typescript
}
document.getElementById('startGame').addEventListener('click', startGame);
