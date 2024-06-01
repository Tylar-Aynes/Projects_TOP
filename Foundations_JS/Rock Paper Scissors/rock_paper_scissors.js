function runGame(selection)
{
    let choiceArray = ["rock", "paper", "scissors"];
    let userInput = getUserInput(selection);
    let computerInput = getComputerChoice(choiceArray);
    let resultString = findWinner(userInput, computerInput);
    let resultDisplay = document.getElementById('results');
    resultDisplay.textContent = "Final results:" +  resultString;
}

function getUserInput(selection)
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

document.addEventListener('DOMContentLoaded', function() {



});