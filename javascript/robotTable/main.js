// Pratimas su Fetch metodu ir duomenų filtravimu Duomenis pasiimsime
// iš: https://magnetic-melon-yam.glitch.me

// Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id,
// name, city, fav_color). Naudojant JS metodus, padalinkite vardą į
// dvi dalis: vardą ir pavardę (lentelėje). Pridėkite prie lentelės
// (tarp id ir name) nuotrauką. Sukurkite checkbox virš lentelės su
// JS. Jį paspaudus, rodys tik tuos žmones, kurie yra VIP. Sukurkite
// virš lentelės ir search laukelį (forma su input type search ir
// mygtukas). Suvedus duomenis, lentelėje turi prasifiltruoti pagal
// vardą arba pavardę (fullname contains search string).
// Capitalizacija turėtų būti nesvarbi.


// CODE BELOW

const state = {};

const createCheckbox = () => {
    const checkbox = document.createElement('INPUT');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'isVipCheckbox');
    document.body.append(checkbox);

    const checkboxLabel = document.createElement('label');
    checkboxLabel.setAttribute('for', 'isVipCheckbox');
    checkboxLabel.innerText = 'VIP';
    document.body.append(checkboxLabel);
}

const createSearchForm = () => {
    const searchBox = document.createElement('input');
    searchBox.setAttribute('type', 'search');
    searchBox.setAttribute('id', 'search');
    searchBox.setAttribute('name', 'search');
    document.body.appendChild(searchBox);

    const searchButton = document.createElement('button');
    searchButton.innerHTML = 'Search for name';
    searchButton.setAttribute('id', 'searchButton');

    const form = document.createElement('form');
    form.append(searchBox, searchButton);
    document.body.append(form);
}

const createTableSkeleton = () => {
    const id = document.createElement('th');
    id.innerText = 'ID';

    const image = document.createElement('th');
    image.innerText = 'Image';

    const firstName = document.createElement('th');
    firstName.innerText = 'First name';

    const lastName = document.createElement('th');
    lastName.innerText = 'Last name';

    const city = document.createElement('th');
    city.innerText = 'City ';

    const favColor = document.createElement('th');
    favColor.innerText = 'Fav color';

    const tr = document.createElement('tr');
    tr.append(id, image, firstName, lastName, city, favColor);

    const thead = document.createElement('thead');
    thead.append(tr);

    const table = document.createElement('table');
    table.append(thead, document.createElement('tbody'));
    document.body.append(table);
}

function populateTable(robots) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    robots.forEach(robot => {
        const id = document.createElement('td');
        id.innerText = robot.id

        const img = document.createElement('img');
        img.src = robot.image;
        img.setAttribute('alt', 'UserPicture');
        const image = document.createElement('td');
        image.append(img);

        const [name, surname] = robot.name.split(' ');

        const firstName = document.createElement('td');
        firstName.innerText = name;

        const lastName = document.createElement('td');
        lastName.innerText = surname;

        const city = document.createElement('td');
        city.innerText = robot.city;

        const favColor = document.createElement('td');
        favColor.innerText = robot.fav_color;

        const tr = document.createElement('tr');
        tr.append(id, image, firstName, lastName, city, favColor);
        tbody.append(tr);
    });
}

createCheckbox();
createSearchForm();
createTableSkeleton();

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const searchString = document.getElementById('search').value.toLowerCase();
    populateTable(state.robots.filter(robot => robot.name.toLowerCase().includes(searchString)));
});

document.getElementById('isVipCheckbox').addEventListener('change', (event) => {
    populateTable(event.target.checked ? state.robots.filter(robot => robot.vip) : state.robots);
});

async function fetchData() {
    try {
        let response = await fetch('https://magnetic-melon-yam.glitch.me');
        if (response.ok) {
            state.robots = await response.json();
            populateTable(state.robots);
        }
    } catch (error) {
        console.error(error);
    }
}

fetchData();
