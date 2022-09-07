// Example numero 15

function batteryCharge() {
    const battery = document.getElementById("childBattery");
    battery.style.width = "100%";
    battery.style.backgroundColor = "green";
}

function batteryUse() {
    const battery = document.getElementById("childBattery");
    battery.style.width = "10%";
    battery.style.backgroundColor = "red";
}
