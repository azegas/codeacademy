// neveikia, nes nezinom kaip veikia sitas api..

const itemId = localStorage.getItem("itemId");

console.log(itemId);

fetch("https://golden-whispering-show.glitch.me/" + itemId)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log("data", data);

        // sukuriu elementus
        const wrapper = document.createElement("div");
        const title = document.createElement("p");
        const img = document.createElement("img");
        const description = document.createElement('p')

        // pridedu stilius
        wrapper.classList.add("container")
        title.classList.add("title")
        description.classList.add("description")

        // pridedu data
        title.innerHTML = data.name;
        img.src = data.image.large;
        description.innerHTML = data.description.en;

        // appendinu
        wrapper.append(title,img, description)
        document.body.append(wrapper);
    });
