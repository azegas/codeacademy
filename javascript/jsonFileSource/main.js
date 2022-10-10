const END_POINT = "./data/kolegijos.json";
// const END_POINT = "https://golden-whispering-show.glitch.me"
// const END_POINT = "https://6342e230ba4478d478446685.mockapi.io/test"

async function fetchData() {
    const response = await fetch(END_POINT)
    const data = await response.json()
    console.log(data)
}

fetchData()
