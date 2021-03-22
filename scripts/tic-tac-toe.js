var gameOver = false;
var totalMove = 0;
var currentPlayer = 'X';
function placeMarker(spotId){
    if(!gameOver){
    //if the game is not over
    //  get the spot/element by spotId
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
    //get each spot using getElementById()
    //for example, s1 = document.getElementById('1');
    //s2 = document.getElementById('2');
    //s3, s4, s5..., s9
    //if
    //  (s1.innterHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML) <= first row
    //  || (s4.innterHTML === s5.innerHTML && s5.innerHTML === s6.innerHTML) <= second row
    // ...
    //  gameOver = true
    //else
    //  gameOver = false
    //if (!gameOver)
    //  if (totalMove == 8) <== maybe 9
    //      gameOver = true;

    //return gameOver
}