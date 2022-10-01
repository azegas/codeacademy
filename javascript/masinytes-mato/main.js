//BASE URL = https://olive-bead-glazer.glitch.me

//Sukurkite puslapį, index.html, kurį užkrovus atsiranda lentelė su
//visais automobiliais iš base URL.

//Sukurkite papildomą puslapį, add.html, kuriame būtų forma su dviem
//inputais - brand ir model; šie paduotų su post'u informaciją į base
//url (formatas: objektas su dviem properties: brand ir model).

//Sukurkite notification - t.y. sėkmingai užpildžius formą ir gavus
//patvirtinimą, turi virš formos rašyti, kad duomenys sėkmingai
//išsaugoti; o jei blogai - išmesti errorą.

//Sukurkite navigaciją, kad galėtumėte tarp puslapių vaikščioti ir
//patikrinkite ar įrašyti duomenys atsivaizduoja :)

const END_POINT = "https://olive-bead-glazer.glitch.me"; // defining endpoint of the api
const carsData = {};                                     // creating an empty array to store data into
const carsContainer = document.getElementById("cars");   // assigning an ID of a div to a variable

const createCard = (car) => {
    const div = document.createElement("div");
    div.classList.add("car-card");
    carsContainer.append(div);

    const carBrand = document.createElement("h1");
    carBrand.innerHTML = car.brand;
    const carModel = document.createElement("h3");
    carModel.innerHTML = car.model;

    div.append(carBrand, carModel);
};

const fetchCars = async () => {
    try {
        const response = await fetch(END_POINT);
        if (response.ok) {
            carsData.cars = await response.json();
            carsData.cars.forEach((car) => createCard(car));
        }
    } catch (error) {
        console.error(error);
    }
};

fetchCars();
