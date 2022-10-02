// Example numero 32
// examples from Robertas class

////////////////////////////////////////////////////////////////////////
// "gauname kruva neaiskiu dalyku, kuriu nemokame skaityti - Robertas"

fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
    .then((res) => {
        console.log("first response is API - neaiskus", res); // neaisku
        return res.json();      // konvertuojame sita result i json, kad butu readable
    });

////////////////////////////////////////////////////////////////////////
// pirmo .then rezultata konvertuojame i json, kad butu labiau
// readable o antru .then metodu, pasiimam value, kuris jau yra array.
// jeigu returnini viena dalka viename thene, jis persiduoda i kita
// thena.

fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
// 1 then
    .then((res) => {
        return res.json();
    })
// 2 then
    .then((data) => {
        console.log("second response is api - aiskus", data);      // aisku
    });

////////////////////////////////////////////////////////////////////////
// duodamas ne objektas su nereikalinga info, bet duodamas visas masyvas drinks.. 

fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log("third response is api", data.drinks);      // aisku
    });

////////////////////////////////////////////////////////////////////////
// atvaizduojame pirma dalyka masyve

fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log("third response is api", data.drinks[0].strDrink);      // aisku
    });

////////////////////////////////////////////////////////////////////////
// atvaizduojame info is api htmle
fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        document.getElementById("en32_1").textContent = "Randomly chosen drink: " + data.drinks[0].strDrink;
        document.getElementById("en32_2").textContent = "A most suitable glass for it: " + data.drinks[0].strGlass;
    });

////////////////////////////////////////////////////////////////////////
// atvaizduojame ARRAY in console log??
fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log("array oplia", {
            name: data.drinks[0].strDrink,
            glass: data.drinks[0].strGlass,
        });
    });

////////////////////////////////////////////////////////////////////////
// atvaizduojame VISUS non alcoholic cocktails
// dont forget about HTTPS:// in the beginning!
fetch("https://thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log("visi non alcoholic cocktails:", data.drinks);
    });
