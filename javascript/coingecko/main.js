fetch(
    "https://api.coingecko.com/api/v3/coins/markets?" +
        new URLSearchParams({
            vs_currency: "eur",
            per_page: 250,
        })
)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log("data", data);
        data.forEach((pointInsideData) => {
            const element = document.createElement("div");
            const img = document.createElement("img");
            img.setAttribute("src", pointInsideData.image);
            img.setAttribute("class", "img");

            element.classList.add("child");
            element.innerHTML = pointInsideData.symbol;
            document.body.append(element);
            element.append(img);
        });
    });

// https://www.coingecko.com/api/documentations/v3
