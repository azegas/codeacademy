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


// function populateDiv(property) {
//     propertyContainer.innerHTML = '';
//     console.log("istrinta info")
// }

// setTimeout(populateDiv, 5000);

// defining card
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

// fetching all the properties and putting them in cards
const fetchPropertiesAll = async () => {
    try {
        const response = await fetch(END_POINT);
        if (response.ok) {
            propertyData.property = await response.json();
            propertyContainer.innerHTML = '';
            propertyData.property.forEach((property) => createCard(property));
            // console.log("is async not propertyData", propertyData.property); // YESSSSSSSSSSSSSS
            // console.log("is async filteredData", filteredData); // YESSSSSSSSSSSSSS
        }
    } catch (error) {
        console.error(error);
    }
};

// fetching only Vilnius properties and putting them in cards
const fetchPropertiesVilnius = async () => {
    try {
        const response = await fetch(END_POINT);
        if (response.ok) {
            propertyData.property = await response.json();
            // propertyData.property.forEach((property) => createCard(property));
            const filteredData = propertyData.property.filter(function(value) {
                return value.city == "Vilnius";
            });
            // console.log("is async not propertyData", propertyData.property); // YESSSSSSSSSSSSSS
            // console.log("is async filteredData", filteredData); // YESSSSSSSSSSSSSS
            propertyContainer.innerHTML = ''; // important to make the card div empty first...
            filteredData.forEach((property) => createCard(property)); // store data into card div
        }
    } catch (error) {
        console.error(error);
    }
};

// fetching only Kaunas properties and putting them in cards
const fetchPropertiesKaunas = async () => {
    try {
        const response = await fetch(END_POINT);
        if (response.ok) {
            propertyData.property = await response.json();
            // propertyData.property.forEach((property) => createCard(property));
            const filteredData = propertyData.property.filter(function(value) {
                return value.city == "Kaunas";
            });
            // console.log("is async not propertyData", propertyData.property); // YESSSSSSSSSSSSSS
            // console.log("is async filteredData", filteredData); // YESSSSSSSSSSSSSS
            propertyContainer.innerHTML = '';
            filteredData.forEach((property) => createCard(property));
        }
    } catch (error) {
        console.error(error);
    }
};

// fetching only Klaipeda properties and putting them in cards
const fetchPropertiesKlaipeda = async () => {
    try {
        const response = await fetch(END_POINT);
        if (response.ok) {
            propertyData.property = await response.json();
            // propertyData.property.forEach((property) => createCard(property));
            const filteredData = propertyData.property.filter(function(value) {
                return value.city == "Klaipeda";
            });
            // console.log("is async not propertyData", propertyData.property); // YESSSSSSSSSSSSSS
            // console.log("is async filteredData", filteredData); // YESSSSSSSSSSSSSS
            propertyContainer.innerHTML = '';
            filteredData.forEach((property) => createCard(property));
        }
    } catch (error) {
        console.error(error);
    }
};

// on each of the button click, executing appropriate function to fetch filtered properties
document.getElementById('vilnius').addEventListener('click', (event) => {
    event.preventDefault();
    fetchPropertiesVilnius();
});

document.getElementById('kaunas').addEventListener('click', (event) => {
    event.preventDefault();
    fetchPropertiesKaunas();
});

document.getElementById('klaipeda').addEventListener('click', (event) => {
    event.preventDefault();
    fetchPropertiesKlaipeda();
});

document.getElementById('all').addEventListener('click', (event) => {
    event.preventDefault();
    fetchPropertiesAll();
});


// tiesiog console log filtered data

// fetch("https://robust-safe-crafter.glitch.me")
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log("unfiltered", data);
//         const filtered = data.filter(function(value) {
//             return value.city == "Vilnius";
//         });
//         console.log("filtered", filtered);
//         // propertyData.filtered.forEach((filteredKlaipeda) => createCard(filteredKlaipeda));
//     });

fetchPropertiesAll();           // calling this function for the first time 
