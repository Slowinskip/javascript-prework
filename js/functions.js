function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

const displayResult = function(computerMove, playerMove) {
        
	printMessage('Zagrałem ' + computerMove + ' a Ty ' + playerMove + '.')
	if(computerMove == 'kamień' && playerMove == "papier"){
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

const getMoveName = function(argMoveId) {
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