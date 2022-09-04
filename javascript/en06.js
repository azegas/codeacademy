function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

document.getElementById('btnrandom').addEventListener('click', () => {
    const randomNumber = generateRandomNumber();
    document.getElementById('randomnumber').innerText = "Random number: " + randomNumber;
})
