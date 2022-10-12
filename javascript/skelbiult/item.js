const itemId = localStorage.getItem("itemId");
const END_POINT = `https://63443d16dcae733e8fdaf088.mockapi.io/produktai/${itemId}`
const dataArr = {};

const setId = (id) => {
    localStorage.setItem("itemId", id);
};

const clickToHome = () => {
  window.location = "./index.html";
};

const deleteItem = (id) => {
    fetch(`https://63443d16dcae733e8fdaf088.mockapi.io/produktai/${itemId}`,
        {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }
    )
        .then((res) => {
            console.log("Trip was deleted successfully");
        })
        .catch((err) => {
            console.log("err", err);
        });
};

const createCard = (object) => {
    // defining wrappers
    const cardWrapper = document.getElementById("content")

    // defining elements
    const cardLeft = document.createElement("div");
    const cardRight = document.createElement("div");
    const cardRightImage = document.createElement("img");
    const cardTitleBlock = document.createElement("div");
    const cardTitleBlockLeft = document.createElement("div");
    const cardTitleBlockRight = document.createElement("div");
    const cardDescription = document.createElement("div");
    const cardImage = document.createElement("img");
    const cardTitle = document.createElement("h5");
    const cardPrice = document.createElement("p");
    const cardCity = document.createElement("p");
    const cardDelete = document.createElement("button");

    // adding styles to the elements
    cardLeft.classList.add("left-content");
    cardRight.classList.add("right-content")
    cardTitleBlock.classList.add("card-title-block")
    cardTitleBlockLeft.classList.add("card-title-block-left")
    cardTitleBlockRight.classList.add("card-title-block-right")
    cardCity.classList.add("product-city")
    cardPrice.classList.add("product-price")
    cardDescription.classList.add("product-description")

    cardDelete.classList.add("delete")
    
    // cardButton.classList.add("btn")
    // cardButton.classList.add("btn-primary")
    
    cardImage.classList.add("product-image")
    cardImage.setAttribute("src", object.nuotrauka)
    cardRightImage.setAttribute("src", "./references/sidebar.png")
    
    // cardBody.classList.add("card-body")
    
    cardTitle.classList.add("product-title")
    
    // cardButton.classList.add("btn")
    // cardButton.classList.add("btn-primary")
    // cardButton.innerHTML = "Go somewhere"

    // adding content
    cardTitle.innerHTML = object.pavadinimas
    cardDelete.innerHTML = "Ištrinti"
    cardPrice.innerText = object.kaina + " €"
    cardCity.innerText = object.miestas
    cardDescription.innerText = object.aprasymas

    // appending
    cardWrapper.append(cardLeft, cardRight);
    cardRight.append(cardRightImage);
    cardLeft.append(cardImage, cardTitleBlock, cardDescription, cardDelete);
    cardTitleBlock.append(cardTitleBlockLeft, cardTitleBlockRight)
    cardTitleBlockLeft.append(cardTitle, cardCity)
    cardTitleBlockRight.append(cardPrice)
    
    // on button click - remove element
    cardDelete.addEventListener("click", () => {
        deleteItem(object.id);
        setTimeout(function() { alert("Preke ištrinta. Būsite nukreipti į pagrindinį puslapį"); }, 2000);
        setTimeout(clickToHome, 2000)
    });

    // on button click add its id to localstorage
    // cardButton.addEventListener("click", () => {
    //     setId(object.id);
    // });
};    

const fetchData = async () => {
    try {
        const response = await fetch(END_POINT);
        if (response.ok) {
            dataArr.anything = await response.json();
            console.log(dataArr)
            createCard(dataArr.anything)
        }
    } catch (error) {
        console.error(error);
    }
};

fetchData()
