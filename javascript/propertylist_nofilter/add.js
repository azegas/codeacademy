// Pratimas su Fetch GET ir POST BASE URL =
// https://robust-safe-crafter.glitch.me/

// Sukuriame du puslapius (index.html ir add.html) - CSS frameworką
// naudoti galima, tačiau rekomenduotina daryti su custom CSS.

// Šis puslapis atsisiųs skelbimus iš API ir juos atvaizduos
// kortelėse. Filter funkcionalumas nėra privalaomas, tačiau
// stipresniems studentams - rekomenduojamas (t.y. paspaudus ant
// mygtuko turi filtruoti NT pagal konkretų miestą).

// Suvedus informaciją į laukelius, juos turi POSTint į API.

const END_POINT = "https://robust-safe-crafter.glitch.me";
const submitForm = document.querySelector("form");

const postData = async (property) => {
    const alertMsg = document.getElementById("alert");
    try {
        const response = await fetch(END_POINT, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(property),
        });
        if (response.ok) {
            alertMsg.innerHTML = "data successfully sent!";
        }
    } catch (error) {
        alertMsg.innerHTML = `there was an error!\n${error}`;
    }
};

const addProperty = (event) => {
    event.preventDefault();
    const propertyImageInput = document.getElementById("property-image");
    const propertyCityInput = document.getElementById("property-city");
    const propertyPriceInput = document.getElementById("property-price");
    const propertyDescriptionInput = document.getElementById("property-description");
    
    // reikia sekti duomenu formata(suzinosi is API)
    const property = {
        image: propertyImageInput.value,
        city: propertyCityInput.value,
        price: propertyPriceInput.value,
        description: propertyDescriptionInput.value,
    };
    
    postData(property);
    console.log(property);
}

submitForm.addEventListener("submit", addProperty);
