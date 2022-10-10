const setId = (id) => {
    localStorage.setItem("itemId", id);
};

fetch(
    "https://api.coingecko.com/api/v3/coins/markets?" +
        new URLSearchParams({
            vs_currency: "eur",
            per_page: 10,
        })
)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        data.forEach((currency) => {
            const element = document.createElement("a");
            element.classList.add("card")
            element.href = "item.html";
            element.classList.add("child");
            element.innerHTML = currency.symbol;

            element.addEventListener("click", () => {
                setId(currency.id);
            });

            container = document.getElementById("main-wrapper")
            container.append(element)
        });
    });
