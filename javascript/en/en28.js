// Example numero 28
// https://www.youtube.com/watch?v=CUNy0FRkP1s&ab_channel=CodeExpress

// simple localstorage example start
// localStorage.setItem("userName", "cneiuceruonc owefu ouwe");

// const token = localStorage.getItem("userName");
// console.log(token);
// localStorage.removeItem("userName");
// simple localstorage example end

// get all values from HTML
const form28submit = document.getElementById("form28submit");
const form28reset = document.getElementById("form28reset");
const form28 = document.getElementById("form28");

// prevent form refresh on submit
// if I dont do this, the browser refreshes instead of adding values to local storage
form28.addEventListener('submit', (e) => {
    e.preventDefault();
});

// creating reset button
form28reset.addEventListener('click', (e) => {
    let name = document.getElementById('form28input');

    // set value
    name.value = "";
})

// creating submit button

form28submit.addEventListener('click', (e) => {
    let name = document.getElementById('form28input');

    // get value
    name = name.value;
    console.log(name)

    // localstorage
    localStorage.setItem('name', name);
})
