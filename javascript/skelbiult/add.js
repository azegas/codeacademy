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
        if (response.status === 500) {
            statusMsg.innerHTML = "";
            statusMsg.style.color = "#03d3b2";
            statusMsg.innerHTML = `Please check if all mandatory data provided. Here is response status code: ${response.status}`;
        } else if (response.ok) {
            statusMsg.innerHTML = "";
            statusMsg.style.color = "black";
            statusMsg.innerHTML = "Data successfully sent! Returning to home page...";
            setTimeout(clickToHome, 1000);
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
        nameErrElement.innerHTML = "Name field must be correctly filled";
        nameErrElement.style.visibility = "visible";
        validationOk = false;
    } else {
        nameErrElement.style.visibility = "hidden";
    }
    if (objectName.value == "") {
        priceErrElement.innerHTML = "Price field must be correctly filled";
        priceErrElement.style.visibility = "visible";
        validationOk = false;
    } else {
        priceErrElement.style.visibility = "hidden";
    }
    if (objectImage.value == "" || !objectImage.value.includes("http")) {
        imageErrElement.innerHTML = "Image URL field must be correctly filled";
        imageErrElement.style.visibility = "visible";
        validationOk = false;
    }
    else {
        imageErrElement.style.visibility = "hidden";
    }
    if (objectName.value == "") {
        descriptionErrElement.innerHTML = "Description field must be correctly filled";
        descriptionErrElement.style.visibility = "visible";
        validationOk = false;
    } else {
        descriptionErrElement.style.visibility = "hidden";
    }
    if (objectName.value == "") {
        cityErrElement.innerHTML = "City field must be correctly filled";
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
