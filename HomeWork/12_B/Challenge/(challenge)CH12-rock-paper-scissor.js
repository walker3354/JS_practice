let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

let autoplay_flag = false;
let intervalID;

updateScoreElement();

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    document.querySelector('.js-usr-result').src = `../img_storage/${playerMove}-emoji.png`;
    document.querySelector('.js-computer-result').src = `../img_storage/${computerMove
        }-emoji.png`;

    document.querySelector('.js-usr-result').src = `../img_storage/${playerMove}-emoji.png`;
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
        }

    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win.';
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();
    document.querySelector('.js-result').innerHTML = result;
}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}


function autoplay() {
    autoplay_flag = !autoplay_flag;
    if (autoplay_flag === true) {
        document.querySelector('.auto-play-button').innerHTML = 'Stop playing';
        intervalID = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 3000);
    } else if (autoplay_flag === false) {
        document.querySelector('.auto-play-button').innerHTML = 'Auto play';
        clearInterval(intervalID);
    }
}

function reset_score_ask() {
    document.querySelector('.confirm-txt').innerHTML = `
        Are you sure you want to reset the score? 
        <button class ="reset-yes-button">Yes</button> <button class="reset-no-button">No</button>`;
    document.querySelector('.reset-yes-button').addEventListener('click', () => {
        score.wins = 0;
        score.losses = 0
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElement();
        document.querySelector('.confirm-txt').innerHTML = '';
    });
    document.querySelector('.reset-no-button').addEventListener('click', () => {
        document.querySelector('.confirm-txt').innerHTML = '';
    })
}


/*
document.querySelector('.auto-play-button').addEventListener('click', () => {
    autoplay_flag = !autoplay_flag;
    if (autoplay_flag === true) {
        document.querySelector('.auto-play-button').innerHTML = 'Stop playing';
        intervalID = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 3000);
    } else if (autoplay_flag === false) {
        document.querySelector('.auto-play-button').innerHTML = 'Auto play';
        clearInterval(intervalID);
    }
})
*/

document.querySelector('.auto-play-button').addEventListener('click', () => autoplay());
document.querySelector('.reset-score-button').addEventListener('click', () => reset_score_ask());

document.querySelector('body').addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'r':
            playGame('rock');
            break;
        case 's':
            playGame('scissors');
            break;
        case 'p':
            playGame('paper');
            break;
        case 'a':
            autoplay();
            break;
        case 'Backspace':
            reset_score_ask();
            break;
        default:
            console.log(event.key);
            console.log('unknow move');
            break;
    }
})

