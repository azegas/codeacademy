const itemId = localStorage.getItem("itemId");
const END_POINT = `https://63443d16dcae733e8fdaf088.mockapi.io/produktai/${itemId}`
const dataArr = {};

const setId = (id) => {
    localStorage.setItem("itemId", id);
};

const createCard = (object) => {
    // defining wrappers
    const cardWrapper = document.getElementById("cardWrapper");

    // defining elements
    const card = document.createElement("div");
    const cardImage = document.createElement("img");
    const cardBody = document.createElement("div")
    const cardTitle = document.createElement("h5");
    const cardButton = document.createElement("button")
    const cardText = document.createElement("p");

    // adding styles to the elements
    card.classList.add("card");
    card.style.width = "18rem"

    cardButton.classList.add("btn")
    cardButton.classList.add("btn-primary")
    
    cardImage.classList.add("card-img-top")
    cardImage.setAttribute("src", object.nuotrauka)
    cardImage.style.height = "200px"
    
    cardBody.classList.add("card-body")
    
    cardTitle.classList.add("card-title")
    cardTitle.style.color = "red"
    cardTitle.style.fontWeight = "800"
    
    cardButton.classList.add("btn")
    cardButton.classList.add("btn-primary")
    cardButton.innerHTML = "Go somewhere"

    // adding content
    cardTitle.innerHTML = "title: " + object.pavadinimas
    cardText.innerText = "text: " + object.kaina
    cardButton.innerHTML = "button";

    // appending
    cardWrapper.append(card);
    card.append(cardImage, cardBody);
    cardBody.append(cardText, cardTitle, cardButton);

    // on button click add its id to localstorage
    cardButton.addEventListener("click", () => {
        setId(object.id);
    });
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
