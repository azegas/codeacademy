// BUTINAI PAKEISK ENDPOINT
const END_POINT = "https://63443d16dcae733e8fdaf088.mockapi.io/produktai"

const submitForm = document.querySelector("form");

const objectName = document.getElementById("name");
const objectPrice = document.getElementById("price");
const objectImage = document.getElementById("image");
const objectDescription = document.getElementById("description");
const objectCity = document.getElementById("city");

const statusMsg = document.getElementById("status-msg");

const clickToHome = () => {
  window.location = "./index.html";
};

const postData = async (object) => {
    try {
        const response = await fetch(END_POINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(object),
        });
        // 400 Bad Request - server cannot process, client error
        if (response.status === 400) {
            statusMsg.innerHTML = "";
            statusMsg.style.color = "red";
            statusMsg.innerHTML = `Įsitikinkite, jog visi privalomi laukai užpildyti teisingai. Klaidos kodas: ${response.status}`;
        } else if (response.ok) {
            statusMsg.innerHTML = "";
            statusMsg.style.color = "green";
            statusMsg.innerHTML = "Prekė ikelta sėkmingai! Būsite nukreipti į pagrindinį puslapį...";
            setTimeout(clickToHome, 3000);
        }
    } catch (error) {
        statusMsg.innerHTML = "";
        statusMsg.style.color = "red";
        statusMsg.innerHTML = `There was an error: ${error}`;
    }
};

const validateForm = () => {
    let validationOk = true;
    const nameErrElement = document.querySelector("#name-block span");
    const priceErrElement = document.querySelector("#price-block span");
    const imageErrElement = document.querySelector("#image-block span");
    const descriptionErrElement = document.querySelector("#description-block span");
    const cityErrElement = document.querySelector("#city-block span");
    
    if (objectName.value == "") {
        nameErrElement.innerHTML = "Pavadinimo laukas turi būti užpildytas teisingai.";
        nameErrElement.style.visibility = "visible";
        validationOk = false;
    } else {
        nameErrElement.style.visibility = "hidden";
    }
    if (objectName.value == "") {
        priceErrElement.innerHTML = "Kainos laukas turi būti užpildytas teisingai.";
        priceErrElement.style.visibility = "visible";
        validationOk = false;
    } else {
        priceErrElement.style.visibility = "hidden";
    }
    if (objectImage.value == "" || !objectImage.value.includes("http")) {
        imageErrElement.innerHTML = "Nuotraukos laukas(URL) turi būti užpildytas teisingai.";
        imageErrElement.style.visibility = "visible";
        validationOk = false;
    }
    else {
        imageErrElement.style.visibility = "hidden";
    }
    if (objectName.value == "") {
        descriptionErrElement.innerHTML = "Aprašymo laukas turi būti užpildytas teisingai.";
        descriptionErrElement.style.visibility = "visible";
        validationOk = false;
    } else {
        descriptionErrElement.style.visibility = "hidden";
    }
    if (objectName.value == "") {
        cityErrElement.innerHTML = "Miesto laukas turi būti užpildytas teisingai.";
        cityErrElement.style.visibility = "visible";
        validationOk = false;
    } else {
        cityErrElement.style.visibility = "hidden";
    }
    return validationOk;
};

submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm()) {
        // BUTINAI PAKEISK key names
    let newObject = {
        pavadinimas: objectName.value,
        kaina: objectPrice.value,
        nuotrauka: objectImage.value,
        aprasymas: objectDescription.value,
        miestas: objectCity.value,
    };
    postData(newObject);
    }
});
