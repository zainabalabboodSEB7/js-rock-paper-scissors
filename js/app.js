/*------------ Constants ------------------*/
const choice = ['rock', 'paper', 'scissors']


/*------------- Variables -----------------*/
let msg
let playerChoice
let computerChoice


/*------ Cached Element References ---------*/
const rockBtnEl = document.querySelector('#rock')
const paperBtnEl = document.querySelector('#paper')
const scissorsBtnEl = document.querySelector('#scissors')
const resultDisplayEl = document.querySelector('#result-display')
const resetBtnEl = document.querySelector('#resetButton')

/*-------- Functions -----------------------*/
function getComputerChoice() {
    // generate a random number 0-2
    const randomIndex = Math.floor(Math.random() * choice.length)
    // select the item from the array
    return choice[randomIndex]
}

// initialize game state
function play(event) {
    computerChoice = getComputerChoice()
    playerChoice = event.target.id
    // after updating state, render to html
    compare()
    render()
}


// updates our UI/html directly
function render() {
    resultDisplayEl.textContent = `Computer chose ${computerChoice} and you chose ${playerChoice}. ${msg}`
}

function compare() {
    if (playerChoice === computerChoice) {
        msg = 'You tied!'
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        msg = 'You win!'
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        msg = 'You lose!'
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        msg = 'You win!'
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        msg = 'You lose!'
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        msg = 'You win!'
    } else {
        msg = 'You lose!'
    }
    // else if (playerChoice === 'rock') {
    //     if (computerChoice === 'paper') {
    //         msg = 'You Lose!'
    //     } else if (computerChoice === 'scissors') {
    //         msg = 'You win!'
    //     }
    // }
}

function resetGame() {
    resultDisplayEl.textContent = ''
    playerChoice = null
    computerChoice = null
}

/*--------- Event Listeners ----------------*/
rockBtnEl.addEventListener('click', play)
paperBtnEl.addEventListener('click', play)
scissorsBtnEl.addEventListener('click', play)
resetBtnEl.addEventListener('click', resetGame)