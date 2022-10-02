// Example numero 04

let counter = 0;

document.getElementById('btnplusone').addEventListener('click', () => {
    counter++;
    document.getElementById('plusone').innerText = "Increasing by one: " + counter;
});
