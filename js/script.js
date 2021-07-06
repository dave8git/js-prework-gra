{

/* Initialization */

    document.getElementById('play-rock').addEventListener('click', function(){
        playGame(1);
        });
    document.getElementById('play-paper').addEventListener('click', function(){
        playGame(2);
      });
    document.getElementById('play-scissors').addEventListener('click', function(){
        playGame(3);
      });

/* Helper functions */
    function printMessage(msg){
        let div = document.createElement('div'); // tutaj musi być let
        div.innerHTML = msg;
        document.getElementById('messages').appendChild(div);
    }
    
    function clearMessages(){
        document.getElementById('messages').innerHTML = '';
    }   
/*-----------------*/


    function playGame(playerInput) {
        clearMessages();
    
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        
        
        const getMoveName = function(argMoveId){
            if(argMoveId == 1){
              return 'kamień';
            } else if (argMoveId == 2){
                return 'papier';
            } else if (argMoveId == 3){
                return 'nożyce';
            } else {
              printMessage('Nie znam ruchu o id ' + argMoveId + '.');
              return 'nieznany ruch';
            }
          }
        
        const computerMove = getMoveName(randomNumber);

        printMessage('Mój ruch to: ' + computerMove);
    
        const playerMove = getMoveName(playerInput); 
          
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
    }
}
