{
function playGame (playerInput) {
    clearMessages();

    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    
    const computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    displayResult(computerMove, playerMove);
}
document.getElementById('rock').addEventListener('click', function () {
    playGame(1);
});
    document.getElementById('paper').addEventListener('click', function () {
    playGame(2);
});
    document.getElementById('scissors').addEventListener('click', function () {
    playGame(3);
});

}