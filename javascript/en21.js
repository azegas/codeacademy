// Example numero 21

const en21Button = document.getElementById('en21')

function en21Toggle() {
    en21Button.classList.toggle('en21Color')
    setTimeout(en21Toggle2, 2000)
}

function en21Toggle2() {
    en21Button.classList.toggle('en21Color2')
}

// call the function upon page load
// en21Toggle()

// add just a function name
en21Button.addEventListener('click', en21Toggle)

// add whole function in (anonymous function)
// en21Button.addEventListener('click', function en21Toggle() {
//     en21Button.classList.toggle('en21Color')
// })

// call by defining an arrow function
// en21Button.addEventListener('click', () => {
//     en21Button.classList.toggle('en21Color')
// })
