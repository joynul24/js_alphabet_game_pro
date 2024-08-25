function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    
    continueGame();
}


function continueGame() {
    const alphabet = getRandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}


document.addEventListener('keyup', function handleKeyboardUpEvent(event) {
    // console.log(event.key);
    const playerPressed = event.key;

    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if (playerPressed === expectedAlphabet) {
        const currentScore = getTextElementValueById('current-score');
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore);

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }

    else {
        const currentLife = getTextElementValueById('current-life');
        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife);

        if (updateLife === 0) {
            gameOver();
        }
    }
})