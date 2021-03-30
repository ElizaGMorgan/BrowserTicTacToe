var gameOverTie = false;
var gameOverWinner = false;
var totalMove = 0;
var currentPlayer = 'X';
var player1 = 'X';
var player2 = 'O';

function placeMarker(spotId){
  var spot = document.getElementById(spotId);
    if(!gameOverTie || !gameOverWinner){
      if(spot.innerHTML == ""){
        spot.innerHTML = currentPlayer
        if(currentPlayerWon()){
          gameOver = true;
          updateGameStatus()
        }
        else{
          if(currentPlayer == player1){
            currentPlayer = player2
            updateGameStatus()
            totalMove++
          }
          else{
            currentPlayer = player1
            updateGameStatus()
            totalMove++
          }
        }
      }
    }
    else{
      updateGameStatus()
    }
}

function currentPlayerWon(){
    var s1 = document.getElementById('space1');
    var s2 = document.getElementById('space2');
    var s3 = document.getElementById('space3');
    var s4 = document.getElementById('space4');
    var s5 = document.getElementById('space5');
    var s6 = document.getElementById('space6');
    var s7 = document.getElementById('space7');
    var s8 = document.getElementById('space8');
    var s9 = document.getElementById('space9');

    if((s1.innerHTML == s2.innerHTML && s2.innerHTML == s3.innerHTML && s1.innerHTML != '') 
      || (s4.innerHTML == s5.innerHTML && s5.innerHTML == s6.innerHTML && s4.innerHTML != '')
      || (s7.innerHTML == s8.innerHTML && s8.innerHTML == s9.innerHTML && s7.innerHTML != '')
      || (s1.innerHTML == s4.innerHTML && s4.innerHTML == s7.innerHTML && s1.innerHTML != '')
      || (s2.innerHTML == s5.innerHTML && s5.innerHTML == s8.innerHTML && s2.innerHTML != '')
      || (s3.innerHTML == s6.innerHTML && s6.innerHTML == s9.innerHTML && s3.innerHTML != '')
      || (s1.innerHTML == s5.innerHTML && s5.innerHTML == s9.innerHTML && s1.innerHTML != '')
      || (s3.innerHTML == s5.innerHTML && s5.innerHTML == s7.innerHTML && s3.innerHTML != ''))
      {
        gameOverWinner = true
        if(currentPlayer == player1){
          currentPlayer = player2
        }
        else{
          currentPlayer = player1
        }
      }
    else{
        gameOver = false
    }
    if (!gameOver){
      if (totalMove == 8){
        gameOverTie = true;
      }       
    }
    return gameOver
}
function updateGameStatus(){
    if(gameOverTie || gameOverWinner){
      if(gameOverWinner){
      document.getElementById('announcement').innerHTML = currentPlayer + ' is the winner!'
       // gameOverWinner = true;
      }
      else{
     document.getElementById('announcement').innerHTML = 'It\'s a tie!'
      //  gameOver = true;
      }
    }
    else{
      document.getElementById('announcement').innerHTML = currentPlayer + ' choose a spot...'
    }
}