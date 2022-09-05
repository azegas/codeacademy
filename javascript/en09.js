const armyAgeInput = document.getElementById("armyAgeInput");
const armyAgeResult = document.getElementById("armyAgeResult");
const armyForm = document.getElementById("armyForm");

function armyCalculator(e) {
    e.preventDefault()
    const receivedAge = Number(armyAgeInput.value);
    // console.log(receivedAge)
    
    if (receivedAge >= 18 && receivedAge <= 30){
        armyAgeResult.textContent = "Welcome to army."
    } else if (receivedAge < 18) {
        armyAgeResult.textContent = "Army does not need you (too young)."
    } else {
        armyAgeResult.textContent = "Army does not need you (too old)."
    }
}

armyForm.addEventListener("submit", armyCalculator);


// // // just a color check..
// const btnz = document.getElementById('armyForm');
// btnz.addEventListener('click', function onClick() {
//   btnz.style.backgroundColor = 'lime';
//   btnz.style.color = 'white';
// });
