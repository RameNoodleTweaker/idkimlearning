// The Word Guesser
const lettersOfWord = ["F", "O", "X"];
var guessedLetters = [];
var currentMoney = 0;
var lives = 6;
jQuery(document).ready(function(){
    
$("input").keypress(function(e) {

    
    if(e.which == 13){
        guessedLetter($("input").val());
    
    }
})
$("button").on("click", function(){
    restartGame();
    alert("Game Reset");
})
function updateLives() {
    $(".lives").html("Lives: " + lives);
}
function updateMoney(){
    $(".money").html("Money: $" + currentMoney);
}
function guessedLetter(letter){
    
    var userInput = letter.toUpperCase();
    var placement = lettersOfWord.indexOf(letter);
    
    if (lettersOfWord.includes(userInput) === true && guessedLetters.includes(userInput) === false) {
        var placement = lettersOfWord.indexOf(userInput);
        guessedLetters.splice(placement, 1, userInput);
        $(".guess").html(guessedLetters);
        currentMoney += 50;
        updateMoney();
        
        
        
        alert("Congrats you've guessed a correct letter: " + letter);
        alert(guessedLetters);
    } else if (guessedLetters.includes(userInput) === true) {
        alert("You already guessed: " + letter);
    } else {
        alert("The word does not include " + letter)
       
        lives--;
        updateLives();
        updateMoney();
    }
if (lives === 0) {
    alert("Game Over You Lose!");
    restartGame();
}
    
}

function gameStatus() {
    
    var correctWords = 0;
    for (var i = 0; i< lettersOfWord.length; i++){
    if (lettersOfWord[i] === guessedLetters[i]){
        correctWords++
        if(correctWords === 1) {
            alert("You've guessed the word!");
        }
    } else {
        alert(guessedLetters);
    }   
    }
}

function restartGame(){
    lives = 6;
    guessedLetters = ["","",""];
    currentMoney = 0;
    $(".guess").empty();
    updateLives();
    updateMoney();
}

    
    
});




