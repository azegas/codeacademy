// Pratimas su Fetch GET ir POST BASE URL =
// https://robust-safe-crafter.glitch.me/

// Sukuriame du puslapius (index.html ir add.html) - CSS frameworką
// naudoti galima, tačiau rekomenduotina daryti su custom CSS.

// Šis puslapis atsisiųs skelbimus iš API ir juos atvaizduos
// kortelėse. Filter funkcionalumas nėra privalaomas, tačiau
// stipresniems studentams - rekomenduojamas (t.y. paspaudus ant
// mygtuko turi filtruoti NT pagal konkretų miestą).

// Suvedus informaciją į laukelius, juos turi POSTint į API.

const END_POINT = "https://robust-safe-crafter.glitch.me";
const propertyData = {};                                    
const propertyContainer = document.getElementById("properties");

const createCard = (property) => {
    const div = document.createElement("div");
    div.classList.add("property-card");
    propertyContainer.append(div);

    const miestas = document.createElement("p");
    miestas.innerHTML = property.city;
    
    const kaina = document.createElement("h2");
    kaina.innerHTML = property.price;
    
    const paveiksliukas = document.createElement("img");
    paveiksliukas.setAttribute("src", property.image);
    paveiksliukas.setAttribute("class", "img");
    
    const apibudinimas = document.createElement("p");
    apibudinimas.innerHTML = property.description;

    div.append(paveiksliukas, kaina, miestas, apibudinimas);
};

const fetchProperties = async () => {
    try {
        const response = await fetch(END_POINT);
        if (response.ok) {
            propertyData.property = await response.json();
            propertyData.property.forEach((property) => createCard(property));
        }
    } catch (error) {
        console.error(error);
    }
};

fetchProperties();
