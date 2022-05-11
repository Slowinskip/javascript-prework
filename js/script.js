function playGame (playerInput) {
    clearMessages();

    
    

    function getMoveName(argMoveId){
	    console.log("Robie GetMoveName");

	    if(argMoveId == 1){
	    	return 'kamień';
	    }else if(argMoveId == 2){
            return 'papier';
        }else if(argMoveId == 3){
            return 'nożyce';
        }
        printMessage('Nie znam ruchu o id ' + argMoveId)
            return 'nieznany ruch';
    }

    function displayResult(ComputerMove, PlayerMove){
        console.log("Display? : ", computerMove, playerMove);

        printMessage('Zagrałem ' + computerMove + ' a Ty ' + playerMove + '.')
        if(ComputerMove == 'kamień' && PlayerMove == "papier"){
            printMessage('Ty wygrywasz!');
        } else if(computerMove == 'papier' && playerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
        } else if(computerMove == 'nożyce' && playerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
        } else if(computerMove == playerMove){
            printMessage('Remis!');
        } else {
            printMessage('Przegrywasz!');
        }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);



    const computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    const playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);{
        console.log("Komputer", computerMove, "Gracz", playerMove);
    }

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
