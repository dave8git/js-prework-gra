function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

console.log(getMoveName('2'));
function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
      console.log(argMoveId);
    } else if (argMoveId == 2){
        return 'papier';
    } else if (argMoveId == 3){
        return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

// if(randomNumber == 1){
//   computerMove = 'kamień';
// } else if(randomNumber == 2){
//     computerMove = 'papier';
// } else {
//     computerMove = 'nożyce';
// }

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

console.log(playerMove);
// if(playerInput == '1'){
//   playerMove = 'kamień';
// } else if(playerInput == '2') {
//     playerMove = 'papier';
// } else {
//     playerMove = 'nożyce';
// }

// printMessage('Twój ruch to: ' + playerMove);

// if((computerMove == 'kamień' && playerMove == 'papier') || (computerMove == 'nożyce' && playerMove == 'kamień') || (computerMove == 'papier' && playerMove == 'nożyce')) {
//     printMessage('Ty wygrywasz!');
// } else if (computerMove == playerMove) {
//     printMessage('a więc... Remis!');
// } else {
//     printMessage('Niestety komputer wygrywa :(');
// }


  
  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
    if((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'nożyce' && playerMove == 'kamień') || (argComputerMove == 'papier' && playerMove == 'nożyce')){
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove === argPlayerMove) {
        printMessage('a więc... Remis!');
    } else { 
        printMessage('Tym razem przegrywasz :(');
    }
  }

  displayResult(computerMove, playerMove);