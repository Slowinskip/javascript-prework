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

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);



let computerMove = getMoveName(randomNumber);


/* if(randomNumber == 1) {
  computerMove = 'kamień';
}else if(randomNumber == 2) {
    computerMove = 'papier';
}else if(randomNumber == 3) { 
    computerMove = 'nożyce';
} */

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
  playerMove = 'kamień';
}else if(playerInput == '2'){
    playerMove = 'papier';
}else if(playerInput == '3'){
    playerMove = 'nożyce';
} */
printMessage('Twój ruch to: ' + playerMove);



/* if (computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
}else if(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ja wygrałem!');
}else if(computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
}else if (computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
}else if (computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ja wygrałem!');
}else if(computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
}else if (computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
}else if (computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ja wygrałem!');
}else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');
}else if(playerMove == 'nieznany ruch'){
    printMessage('Nie wybrałeś ruchu, tracisz kolejkę!');
}	*/

displayResult(computerMove, playerMove);{
    console.log("Komputer", computerMove, "Gracz", playerMove);
}