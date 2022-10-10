const END_POINT = "https://golden-whispering-show.glitch.me"

const clickToHome = () => {
  window.location = "./index.html";
};

const submitForm = document.querySelector("form"); // pasakau kas per forma

const productForm = document.getElementById("product-form");
const productImage = document.getElementById("product-image");
const productPrice = document.getElementById("product-price");
const titleSelection = document.getElementById("product-title");
const statusMsg = document.getElementById("status-msg");

const pushAdData = async (product) => {
  try {
    const response = await fetch(END_POINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (response.status === 400) {
      statusMsg.innerHTML = "";
      statusMsg.style.color = "#03d3b2";
      statusMsg.innerHTML = `Please check if all mandatory data provided. Here is response status code: ${response.status}`;
    } else if (response.ok) {
      statusMsg.innerHTML = "";
      statusMsg.style.color = "green";
      statusMsg.innerHTML = "Data successfully sent! Returning to home page... in 5 seconds";
      setTimeout(clickToHome, 5000);
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
    
    if (productImage.value == "" || !productImage.value.includes("http")) {
        imgErrEelement.innerHTML = "Image URL field must be correctly filled";
        imgErrEelement.style.visibility = "visible";
        validationOk = false;
    } else {
        imgErrEelement.style.visibility = "hidden";
    }
    if (productPrice.value == "") {
        priceErrEelement.innerHTML = "Price field must be filled!";
        priceErrEelement.style.visibility = "visible";
        validationOk = false;
    } else {
        priceErrEelement.style.visibility = "hidden";
    }
    return validationOk;
};

productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm()) {
        let newProduct = {
            image: productImage.value,
            title: titleSelection.options[titleSelection.selectedIndex].text,
            price: Number(productPrice.value),
        };
        pushAdData(newProduct);
    }
});
