var gameOver = false;
var totalMove = 0;
var currentPlayer = 'X';
function placeMarker(spotId){
    if(!gameOver){
    //  get the spot/element by spotId
    var spot = document.getElementById(spotID);
    //  if the spot is empty
    //      place the marker by changing the innerHTML of the spot
    //      depending on who is the current player
    //      check if current plater has won the game by calling currentPlayerWon()
    //      if(currentPlayerWon()){
    //      if yes, display message, set gameOver = true
    //      }
    //      if no, switch player, totalMove++
    // else
    //     do nothing
    // else
    //     the game is over
    }
}

function currentPlayerWon(){
    var s1 = document.getElementById('1');
    var s2 = document.getElementById('2');
    var s3 = document.getElementById('3');
    var s4 = document.getElementById('4');
    var s5 = document.getElementById('5');
    var s6 = document.getElementById('6');
    var s7 = document.getElementById('7');
    var s8 = document.getElementById('8');
    var s9 = document.getElementById('9');
    if(
      (s1.innterHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML) 
      || (s4.innterHTML === s5.innerHTML && s5.innerHTML === s6.innerHTML)
      || (s7.innterHTML === s8.innerHTML && s8.innerHTML === s9.innerHTML)
      || (s1.innterHTML === s4.innerHTML && s4.innerHTML === s7.innerHTML)
      || (s2.innterHTML === s5.innerHTML && s5.innerHTML === s8.innerHTML)
      || (s3.innterHTML === s6.innerHTML && s6.innerHTML === s9.innerHTML)
      || (s1.innterHTML === s5.innerHTML && s5.innerHTML === s9.innerHTML)
      || (s3.innterHTML === s5.innerHTML && s5.innerHTML === s7.innerHTML)){
        gameOver = true
      }
    else{
        gameOver = false
    }
    if (!gameOver){
      if (totalMove == 8){
        gameOver = true;
      } // maybe 9       
    }
    return gameOver
}
function updateGameStatus(){
    if(gameOver){
        //if it is not a tie, announce the winner
        //else, announce the game is a tie
    }
    else{
        //prompt user to make a move
    }
}