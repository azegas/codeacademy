// Example numero 10

const celsiusForm = document.getElementById("celsiusForm");
const celsiusInput = document.getElementById("celsiusInput");
const celsiusResult = document.getElementById("celsiusResult");

function celsiusToFconverter(b) {
    b.preventDefault()
    const receivedCelsius = Number(celsiusInput.value);
    // console.log(receivedCelsius)

    const resultInFahrenheit = (receivedCelsius * 9/5) +32;
    celsiusResult.textContent = receivedCelsius + "°C " + " is " + resultInFahrenheit + "°F."
}

celsiusForm.addEventListener("submit", celsiusToFconverter);

//

const fahrenheitForm = document.getElementById("fahrenheitForm");
const fahrenheitInput = document.getElementById("fahrenheitInput");
const fahrenheitResult = document.getElementById("fahrenheitResult");

function fahrenheitToCconverter(b) {
    b.preventDefault()
    const receivedFahrenheit = Number(fahrenheitInput.value);
    console.log(receivedFahrenheit)

    const resultInCelsius = (receivedFahrenheit - 32) / (9/5);
    fahrenheitResult.textContent = receivedFahrenheit + "°F " + " is " + resultInCelsius + "°C."
}

fahrenheitForm.addEventListener("submit", fahrenheitToCconverter);
