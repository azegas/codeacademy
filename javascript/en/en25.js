// Example numero 25

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];


// using JSON.stringify to display objects in HTML. Otherwise the output is [object object]


//***MAP***
//1. Get array of all names
document.getElementById("starMap1").textContent = characters.map(character => character.name);
//2. Get array of all heights
document.getElementById("starMap2").textContent = characters.map(character => character.mass);
//3. Get array of objects with just name and height properties
document.getElementById("starMap3").textContent = JSON.stringify(characters.map((character) => ({
    name: character.name,
    height: character.height,
})));
//4. Get array of all first names
document.getElementById("starMap4").textContent = characters.map(character => character.name.split(" ")[0]);


//***REDUCE***
//1. Get total mass of all characters
document.getElementById("starReduce1").textContent = characters.reduce((acc, cur) => {
    return acc + cur.mass;
}, 0);
//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0);
document.getElementById("starReduce2").textContent = totalHeight;
//3. Get total number of characters by eye color
document.getElementById("starReduce3").textContent = JSON.stringify(characters.reduce((acc, cur) => {
    if(acc[cur.eye_color]) {
        acc[cur.eye_color]++;
    }else {
        acc[cur.eye_color] = 1;
    }
    return acc;
}, {}));
//4. Get total number of characters in all the character names
document.getElementById("starReduce4").textContent = characters.reduce((acc, cur) => acc + cur.name.length, 0);


//***FILTER***
//1. Get characters with mass greater than 100
document.getElementById("starFilter1").textContent = JSON.stringify(characters.filter( character => {
    return character.mass > 100;
}));
//2. Get characters with height less than 200
document.getElementById("starFilter2").textContent = JSON.stringify(characters.filter( character => {
    return character.height < 170;
}));
//3. Get all male characters
document.getElementById("starFilter3").textContent = JSON.stringify(characters.filter( character => {
    return character.gender === "male";
}));
//4. Get all female characters
document.getElementById("starFilter4").textContent = JSON.stringify(characters.filter(
    character => character.gender === "female"));


//***SORT***
//1. Sort by mass - COMPARE FUNCTION
document.getElementById("starSort1").textContent = JSON.stringify(characters.sort((a, b) => {
    return a.mass - b.mass;
}));
//2. Sort by height - shorter syntax of the one above
document.getElementById("starSort2").textContent = JSON.stringify(characters.sort((a, b) => a.height + b.height));
//3. Sort by name
document.getElementById("starSort3").textContent = JSON.stringify(characters.sort((a, b) => {
    if(a.name < b.name) return -1;
    return 1;
}));
//4. Sort by gender
document.getElementById("starSort4").textContent = JSON.stringify(characters.sort((a, b) => {
    if(a.gender === "female") return -1;
    return 1;
}));


//***EVERY***
//1. Does every character have blue eyes?
document.getElementById("starEvery1").textContent = JSON.stringify(characters.every((character) => {
    return character.eye_color === "blue";
}));
//2. Does every character have mass more than 40?
document.getElementById("starEvery2").textContent = JSON.stringify(characters.every((character) => {
    return character.mass > 40;
}));
//3. Is every character shorter than 200?
document.getElementById("starEvery3").textContent = JSON.stringify(characters.every((character) => {
    return character.height < 200;
}));
//4. Is every character male?
document.getElementById("starEvery4").textContent = JSON.stringify(characters.every((character) => {
    return character.gender === "male";
}));


//***SOME***
//1. Is there at least one male character?
document.getElementById("starSome1").textContent = JSON.stringify(characters.some((character => {
    return character.gender === 'male';
})));
//2. Is there at least one character with blue eyes?
document.getElementById("starSome2").textContent = JSON.stringify(characters.some((character => {
    return character.eye_color === 'blue';
})));
//3. Is there at least one character taller than 210?
document.getElementById("starSome3").textContent = JSON.stringify(characters.some((character => {
    return character.height > 210;
})));
//4. Is there at least one character that has mass less than 50?
document.getElementById("starSome4").textContent = JSON.stringify(characters.some((character => {
    return character.mass < 50;
})));
