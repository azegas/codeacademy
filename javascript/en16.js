// Example numero 16

const childBattery2 = document.getElementById("childBattery2")
childBattery2.setAttribute("charged", false);

console.log(childBattery2.attributes.charged.value);
console.log(typeof childBattery2.attributes.charged.value);

function batteryCharge2() {
    const battery2 = document.getElementById("childBattery2");
    battery2.style.width = "100%";
    battery2.style.backgroundColor = "green";
    childBattery2.attributes.charged.value = true;
}

function batteryUse2() {
    const battery2 = document.getElementById("childBattery2");
    battery2.style.width = "10%";
    battery2.style.backgroundColor = "red";
    childBattery2.attributes.charged.value = false;
}

const isCharged = (status) => {
    return status === "true" ? true : false;
};

const toggleBattery = () => {
    if (isCharged(childBattery2.attributes.charged.value)) {
        batteryUse2();
    } else {
        batteryCharge2();
    }
};
