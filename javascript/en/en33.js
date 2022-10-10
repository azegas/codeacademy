// Example numero 33

// 1. Jums paskambino pažinčių portalas – jiems reikia greitai sukurti
// front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/
// ir juos atvaizduotų juos puslapyje. Duomenys galėtų būti
// atvaizduoti panašioje kortelėje. Svarbu atvaizduoti nuotrauką,
// vardą, amžių ir el. pašto adresą.


// define where I want to place this card
const storeHere = document.getElementById("en33_1");

// define the card itself
const renderUserCard = (user) => {
    // creating image
    const img = document.createElement('img');
    img.src = user.picture.large;
    img.alt = `${user.name.first} profile picture`;

    // creating intro
    const intro = document.createElement('h4');
    intro.innerText = `${user.name.first} ${user.name.last}, ${user.dob.age}`;

    // creating contacts
    const contacts = document.createElement('h5');
    contacts.innerText = user.email;

    // creating a card with all of the items
    const card = document.createElement('div');
    card.append(img, intro, contacts);
    // document.body.append(card); // displays simply in body
    storeHere.append(card);     // displays where I want it to display
};

//////////////////////////////////////////////////////////////////
// example according to codeacademy. stuff we haven't learned
// const fetchRandomUser = async () => {
//     try {
//         const response = await fetch('https://randomuser.me/api/');
//         if (response.ok) {
//             const data = await response.json();
//             renderUserCard(data.results[0]);
//         }
//     } catch(error) {
//         console.error(error);
//     }
// };

// fetchRandomUser();

//////////////////////////////////////////////////////////////////
// trying to do it by myself with the stuff that we learned

fetch("https://randomuser.me/api/")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        // console.log(data.results[0]);
        renderUserCard(data.results[0]);
    });
