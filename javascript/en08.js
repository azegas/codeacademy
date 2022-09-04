const ageInput = document.getElementById("ticketAge"); // input laukelis
const form = document.getElementById("form2");   // pasirenkame forma, del submit mygtuko
const priceDisplay = document.getElementById("ticketPrice"); // place i kuria outputinsim

const maxAge = 100
const notAChildAnymore = 16
const elderly = 60

function handleFormSubmit(event) {
    event.preventDefault()      // preventing refresh on submit, usually would go to db?
    const price = 6;
    const age = Number(ageInput.value);

    if (age >= elderly && age <= maxAge) {
        priceDisplay.textContent = "Ticket price: " + (0.5 * price).toFixed(2) +"$"+ " (Elderly)";
    } else if (age < notAChildAnymore) {
        priceDisplay.textContent = "Ticket price: " + (0.45 * price).toFixed(2) +"$"+ " (Child)";
    } else if (age >= maxAge) {
        priceDisplay.textContent = "Ticket price: Free for you, enjoy!";
    } else {
        priceDisplay.textContent = "Ticket price: " + price.toFixed(2) +"$"+ " (Adult)";
    }
}

form.addEventListener("submit", handleFormSubmit)


// // just a color check..
// const btn = document.getElementById('form2');

// btn.addEventListener('click', function onClick() {
//   btn.style.backgroundColor = 'salmon';
//   btn.style.color = 'white';
// });
