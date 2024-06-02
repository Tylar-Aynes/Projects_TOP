let score = 0;
let computerScore = 0;

function playRound(selection)
{
    let choiceArray = ["rock", "paper", "scissors"];
    let userInput = updateUserInput(selection);
    let computerInput = getComputerChoice(choiceArray);
    let resultString = findWinner(selection, computerInput);
    let resultDisplay = document.getElementById('results');
    resultDisplay.textContent = "Game results:" +  resultString;
    let scoreUpdate = document.getElementById('Score');
    updateScore(resultString);
    finishGame(score, computerScore, scoreUpdate);
}

function updateScore(result)
{
    if(result === 'You win!')
        score++;
    else if(result === 'You lose...')
        computerScore++;
}

function updateUserInput(selection)
{
    let selectionDisplay = document.getElementById('display');
    selectionDisplay.textContent = 'You selected: ' + selection;
}

function getComputerChoice(choiceArray)
{
    let computerDisplay = document.getElementById('computer-display');
    let computerSelection = choiceArray[getRandomInt()];

    computerDisplay.textContent = "Computer selected: " + computerSelection;
    return computerSelection;
}

function getRandomInt()
{
    let max = 3;
    let min = 0;
    return  Math.floor(Math.random() * max)
}

function findWinner(userSelection, computerSelection)
{
    userSelection = userSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(userSelection === 'rock')
    {
            if(computerSelection === 'scissors')
                {
                return 'You win!';
                }
            else if(computerSelection === 'paper')
                {
                return 'You lose...';
                }
            else return 'It\'s a draw.';

    }
    else if(userSelection === 'paper')
        {
            if(computerSelection === 'rock')
                {
                return 'You win!';
                }
            else if (computerSelection === 'scissors')
                {
                return 'You lose...';
                }
            else return 'It\'s a draw.';
        }
        else
        {
            if(computerSelection === 'paper')
                {
                return 'You win!';
                }
            else if(computerSelection === 'rock')
                {
                return 'You lose...';
                }
            else return 'It\'s a draw.';
        }
}

function finishGame(score, computerScore, scoreUpdate)
{
    if(score < 5 && computerScore < 5)
    {
            scoreUpdate.innerHTML = "Here are the results:<br>" + "Your Score: " + score + "<br>" + "Computer Score: " + computerScore; 
            return;
    }
        
    else if(score == 5)
    {
        scoreUpdate.innerHTML = "Congratulations! 5 wins is a match victory<br>" + "Your Score: " + score + "<br>" + "Computer Score: " + computerScore;
    }
    else if(computerScore == 5)
    {
        scoreUpdate.innerHTML = "Sorry, 5 losses is a match loss...<br>" + "Your Score: " + score + "<br>" + "Computer Score: " + computerScore;
    } 

    let divRefs = document.querySelector('.content').querySelector('.game');
    let children = divRefs.children;
    Array.from(children).forEach(child => {
        if(child.id !== 'Score')
            child.remove();
    })
    removeButtons();
    return;
}

function removeButtons()
{
    const inputRef = document.querySelector('.input');
    const imageList = inputRef.querySelectorAll('.images');

    
    imageList.forEach(image => {
        let buttonRef = image.querySelector('button');
        if(buttonRef)
            buttonRef.remove();
    });
}

const inputRef = document.querySelector('.input');
const imageList = inputRef.querySelectorAll('.images');
console.log(imageList);

imageList.forEach(image => {
    let buttonRef = image.querySelector('button');
    buttonRef.addEventListener("click", ()  => {
        
        playRound(buttonRef.textContent);
    });
});

document.addEventListener('DOMContentLoaded', function() {

});