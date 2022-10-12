const END_POINT = "https://63443d16dcae733e8fdaf088.mockapi.io/produktai"

const dataArr = {};
const dataArr2 = {};

const setId = (id) => {
    localStorage.setItem("itemId", id);
};

const createSuggestionCard = (object) => {
    // defining wrappers
    const cardWrapper = document.getElementById("items");

    // defining elements
    const card = document.createElement("div");
    const cardImage = document.createElement("img");
    const cardBody = document.createElement("div")
    const cardTitle = document.createElement("h5");
    const cardOverlay = document.createElement("div")
    const cardLink = document.createElement("a")

    // adding styles to the elements
    card.classList.add("card");

    cardImage.setAttribute("src", object.nuotrauka)
    cardImage.classList.add("card-img")
    
    cardTitle.classList.add("card-title")

    cardBody.classList.add("card-body")
    cardOverlay.classList.add("overlay")

    cardLink.classList.add("cardLink") // overlays the whole card, acts as a clickable link
    
    // adding content
    cardTitle.innerHTML = object.pavadinimas
    cardLink.href = "item.html";

    // appending
    cardWrapper.append(card);
    card.append(cardBody);
    cardBody.append(cardImage, cardTitle, cardOverlay, cardLink);

    // on button click add its id to localstorage
    cardBody.addEventListener("click", () => {
        setId(object.id);
    });
};

const createCard = (object) => {
    // defining wrappers
    const cardWrapper = document.getElementById("items2");

    // defining elements
    const card = document.createElement("div");
    const cardInfo = document.createElement("div");
    const cardReview = document.createElement("div");
    const cardImageWrapper = document.createElement("div");
    const cardImage = document.createElement("img");
    const cardPrice = document.createElement("p");
    const cardTitle = document.createElement("a");
    const cardCity = document.createElement("p");
    const cardDescription = document.createElement("p");

    // adding styles to the elements
    card.classList.add("card2");
    cardInfo.classList.add("itemInfo");
    cardReview.classList.add("itemReview");
    cardPrice.classList.add("price");
    cardDescription.classList.add("description");
    
    cardImageWrapper.classList.add("itemImage")

    cardCity.classList.add("itemInfo")
    cardTitle.classList.add("title2")

    cardImage.setAttribute("src", object.nuotrauka)
    
    // adding content
    cardTitle.innerHTML = object.pavadinimas
    cardCity.innerHTML = object.miestas
    cardDescription.textContent = object.aprasymas
    cardPrice.innerText = object.kaina + " €"
    cardTitle.href = "item.html";

    // appending
    cardWrapper.append(card);
    card.append(cardInfo, cardImageWrapper, cardReview)
    cardInfo.append(cardCity)
    cardImageWrapper.append(cardImage)
    cardReview.append(cardTitle, cardDescription, cardPrice)

    // on button click add its id to localstorage
    cardTitle.addEventListener("click", () => {
        setId(object.id);
    });
};


const fetchDataAscending = async () => {
    try {
        const response = await fetch(END_POINT);
        if (response.ok) {
            dataArr.anything = await response.json();
            const filterLowtoHigh = dataArr.anything.sort(function (a,b){
                return a.kaina + b.kaina
            })
            console.log(filterLowtoHigh)

            dataArr.anything.forEach((x) => createSuggestionCard(x));
        }
    } catch (error) {
        console.error(error);
    }
};

const fetchDataRandom = async () => {
    try {
        const response2 = await fetch(END_POINT);
        if (response2.ok) {
            dataArr2.labas = await response2.json();
            const filterHighToLow = dataArr2.labas.sort(function (z,x){
                return z.kaina - x.kaina
            })
            console.log(filterHighToLow)

            dataArr2.labas.forEach((f) => createCard(f));
        }
    } catch (error) {
        console.error(error);
    }
};

fetchDataAscending()
fetchDataRandom()
