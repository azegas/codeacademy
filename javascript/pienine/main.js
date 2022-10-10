const setId = (id) => {
    localStorage.setItem("itemId", id);
};

const END_POINT = "https://golden-whispering-show.glitch.me"

fetch(END_POINT)
    .then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        data.forEach((product) => {
            // console.log(product) // cl every product for testing

            // defining wrappers
            const productWrapper = document.getElementById("produktu-wrapper")
            
            // defining elements
            const cardElement = document.createElement("div")
            const cardInfoWrapper = document.createElement("div")
            const cardImage = document.createElement("img")
            const cardTitle = document.createElement("p")
            const cardPrice = document.createElement("p")
            const cardButton = document.createElement("button")

            // adding styles
            cardElement.classList.add("card")
            cardTitle.classList.add("card-title")
            cardInfoWrapper.classList.add("card-body")
            cardPrice.classList.add("card-text")
            cardButton.classList.add("btn")
            cardButton.classList.add("btn-primary")

            // adding content
            cardTitle.innerHTML = product.title;
            cardImage.src = product.image;
            cardPrice.innerHTML = product.price;
            cardButton.innerHTML = "blet";
            
            // appending
            productWrapper.append(cardElement)
            cardElement.append(cardImage, cardInfoWrapper)
            cardInfoWrapper.append(cardTitle, cardPrice, cardButton)

            // on button click add its id to localstorage
            cardButton.addEventListener("click", () => {
                setId(product.id);
            });
        })
    })
