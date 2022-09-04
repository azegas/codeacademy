document.getElementById("btn0").addEventListener("click", sayBye);
document.getElementById("btnabout").addEventListener("click", sayAboutMe);

function sayHello() {
    // alert("Hello!");
    document.getElementById("greeting").textContent = "Hello"
}

function sayBye() {
    document.getElementById("greeting").textContent = "Good bye"
}

function sayAboutMe() {
    // alert("Hello!");
    document.getElementById("aboutme").textContent = "Quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu."
}
