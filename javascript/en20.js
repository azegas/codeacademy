// Example numero 20

document.getElementById("formGas").addEventListener("submit", (e) => {
    e.preventDefault();

    // Pasiimant input value, visada paduoda string. Nepamirštame konveruoti į skaičių su Number()
    const price = Number(document.getElementById("kaina").value);
    const quant = Number(document.getElementById("quant").value);

    const total = price * quant;

    const priceDisplay = document.createElement("h1");
    const whereToDisplay = document.getElementById("priceDisplay");
    priceDisplay.textContent = total.toFixed(2) + " money";
    whereToDisplay.append(priceDisplay);
});
