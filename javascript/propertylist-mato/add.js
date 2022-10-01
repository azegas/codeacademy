const END_POINT = "https://robust-safe-crafter.glitch.me/";

const clickToHome = () => {
  window.location = "./index.html";
};

const propertyForm = document.getElementById("property-form");
const propertyImage = document.getElementById("property-image");
const propertyPrice = document.getElementById("poperty-price");
const propertyDescription = document.getElementById("property-description");
const citySelection = document.getElementById("cities");
const statusMsg = document.getElementById("status-msg");

const pushAdData = async (ad) => {
  try {
    const response = await fetch(END_POINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ad),
    });
    if (response.status === 400) {
      statusMsg.innerHTML = "";
      statusMsg.style.color = "#03d3b2";
      statusMsg.innerHTML = `Please check if all mandatory data provided. Here is response status code: ${response.status}`;
    } else if (response.ok) {
      statusMsg.innerHTML = "";
      statusMsg.style.color = "black";
      statusMsg.innerHTML = "Data successfully sent! Returning to home page...";
      setTimeout(clickToHome, 2000);
    }
  } catch (error) {
    statusMsg.innerHTML = "";
    statusMsg.style.color = "red";
    statusMsg.innerHTML = `There was an error: ${error}`;
  }
};

const validateForm = () => {
  let validationOk = true;
  const imgErrEelement = document.querySelector("#image-block span");
  const priceErrEelement = document.querySelector("#price-block span");
  const descriptionErrEelement = document.querySelector(
    "#description-block span"
  );
  if (propertyImage.value == "" || !propertyImage.value.includes("http")) {
    imgErrEelement.innerHTML = "Image URL field must be correctly filled";
    imgErrEelement.style.visibility = "visible";
    validationOk = false;
  } else {
    imgErrEelement.style.visibility = "hidden";
  }
  if (propertyPrice.value == "") {
    priceErrEelement.innerHTML = "Price field must be filled!";
    priceErrEelement.style.visibility = "visible";
    validationOk = false;
  } else {
    priceErrEelement.style.visibility = "hidden";
  }
  if (propertyDescription.value == "") {
    descriptionErrEelement.innerHTML = "Description field must be filled!";
    descriptionErrEelement.style.visibility = "visible";
    validationOk = false;
  } else {
    descriptionErrEelement.style.visibility = "hidden";
  }
  return validationOk;
};

propertyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateForm()) {
    let newAd = {
      image: propertyImage.value,
      city: citySelection.options[citySelection.selectedIndex].text,
      price: Number(propertyPrice.value),
      description: propertyDescription.value,
    };
    pushAdData(newAd);
  }
});
