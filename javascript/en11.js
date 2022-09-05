const guessInput = document.getElementById("guessInput");
const guessResult = document.getElementById("guessResult");
const guessSecret = document.getElementById("guessSecret");
const guessForm = document.getElementById("guessForm");

let randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber);

function guessNumber(event) {
    event.preventDefault();
    const guessedNumber = Number(document.getElementById('guess').value);
    if (randomNumber === guessedNumber){
        alert("atspejai")
    }
    else {
        alert("neatspejai")
        // guessResult.textContent = randomNumber
        guessSecret.textContent = randomNumber
    }
}

guessForm.addEventListener('submit', guessNumber);
