function play() {
    hideElementById('home-screen');
    showElementById('play-ground');

    continueGame();
}


function continueGame(){
    const alphabet = getRandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}


document.addEventListener('keyup', function handleKeyboardUpEvent(event){
    // console.log(event.key);
    const playerPressed = event.key;

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    
    if(playerPressed === expectedAlphabet){
        console.log('yes i am same')
    }

    else {
        console.log('sorry bro no match')
    }
})