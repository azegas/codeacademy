// 1. Pasiruošimas: 
// a. Atsisiųsti projektą iš https://github.com/robertasRobotas/js-tarpinis .
// b. Nuskopijuot failo turinį ir įkopijuoti į Chrome consolę.
// c. "ctrl + k" komanda naudojama ištrinti consoles turiniui paliekant kintamojo reikšmę.
// d. Išsaugotus sprendimus išsaugoti į JS failą, sunumeruoti.

// 1.1 Parašyti komandą kuri gražins automobilius, kurie turi parametrą "Miles_per_Gallon" ;
console.log(cars.filter(car => {
    return car.Miles_per_Gallon !== null;
}));

// 1.2. Parašyti komandą kuri gražins automobilius, kurie neturi "Miles_per_Gallon" ;
console.log(cars.filter(car => {
    return car.Miles_per_Gallon == null;
}));

// 1.3  Parašyti komandą kuri gražins automobilius, kurie turi parametrą 8 "Cylinders" ir "Miles_per_Gallon" parametras didesnis arba lygus 15.
console.log(cars.filter(car => {
    return car.Cylinders == 8 & car.Miles_per_Gallon >= 15;
}));

// 1.4  Parašyti komandą kuri gražins automobilius su pridėtu papildomu laiku ojekte, kuris vadinasi "Kilowatts", kuris yra lygus "Horsepower" * 0.7457;

// attempt 1. prisideda string i kiekviena object
const cars2 = cars.map(v => ({
    ...v, blyn: "labas"
}));

// attempt 2. prisideda string i kiekviena object
const add2 = cars.map((name) => {
    name["Kilowats"] = "labas";
});

// attempt 3. prisideda skaicius i kiekviena object
const pridedu_skaiciu = cars.map((name) => {
    name["Kilowats"] = 99;
});

// attempt 4. meginu prideti skaiciu, bet gaunasis NaN value. Kazko nezinau ir nebeturiu laiko googlintis. Pasiduodu.
const kodel_nan = cars.map((name) => {
    name["Kilowats"] = "Horsepower" * 0.7457;
});

const kodel_nan2 = cars.map((name) => {
    name["Kilowats"] = cars.Horsepower * 0.7457;
});


// 1.5  Parašyti komandą kuri gražins automobilius išrikiuotus pagal "Weight_in_lbs" didėjančia tvarka.
cars.sort((a, b) => {
    return a.Weight_in_lbs - b.Weight_in_lbs;
});

// 1.6 Parašyti komandą kuri gražins true arba false reikšmę tikrinant ar visi automobiliai yra pagaminti "USA".
cars.every((car) => {
    return car.Origin === "USA";
});
