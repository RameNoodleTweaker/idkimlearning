// The Word Guesser

jQuery(document).ready(function(){

$("input").keypress(function(e) {
    if(e.which == 13){
        guessedLetter($("input").val());
    }
})

var lettersOfWord = ["F", "O", "X"];
var guessedLetters = ["","",""];
var currentMoney = 0;
var lives = 6;
function guessedLetter(letter){
    
    var userInput = letter.toUpperCase();
    var placement = lettersOfWord.indexOf(letter);
    
    if (lettersOfWord.includes(userInput) === true && guessedLetters.includes(userInput) === false) {
        var placement = lettersOfWord.indexOf(userInput);
        guessedLetters.splice(placement, 1, userInput);
        currentMoney += 50;
        displayBank();
        
        
        
        console.log("Congrats you've guessed a correct letter: " + letter);
        console.log(guessedLetters);
    } else if (guessedLetters.includes(userInput) === true) {
        console.log("You already guessed: " + letter);
    } else {
        console.log("The word does not include " + letter)
        currentMoney -= 50;
        displayBank();
        lives--;
    }
if (lives === 0) {
    console.log("Game Over You Lose!");
    restartGame();
}
    
}

function gameStatus() {
    
    var correctWords = 0;
    for (var i = 0; i< lettersOfWord.length; i++){
    if (lettersOfWord[i] === guessedLetters[i]){
        correctWords++
        if(correctWords === 1) {
            console.log("You've guessed the word!");
        }
    } else {
        console.log(guessedLetters);
    }   
    }
}

function displayBank() {
    console.log("Current prize money: $" + currentMoney);
}
function restartGame(){
    lives = 6;
    guessedLetters = ["","",""];
    currentMoney = 0;
}

    
    
});




