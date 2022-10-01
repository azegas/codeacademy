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

const END_POINT = "https://olive-bead-glazer.glitch.me";
const submitForm = document.querySelector("form"); // pasakau kas per forma

const postData = async (car) => {
    const alertMsg = document.getElementById("alert");
    try {
        const response = await fetch(END_POINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(car),
        });
        if (response.ok) {
            alertMsg.innerHTML = "Data successfully sent!";
        }
    } catch (error) {
        alertMsg.innerHTML = `There was an error!\n${error}`;
    }
};

const addCar = (event) => {
    event.preventDefault();
    const carBrandInput = document.getElementById("car-brand");
    const carModelInput = document.getElementById("car-model");
    const car = {
        brand: carBrandInput.value,
        model: carModelInput.value,
    };
    postData(car);
};

submitForm.addEventListener("submit", addCar); // kai formoje paspaudziu submit, do addCar
