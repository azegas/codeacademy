// Example numero 12

// console.log(document.getElementById("colorChange"));
// console.log(document.getElementById("btnColorChange"));

document.getElementById("btnColorChange").addEventListener("click", () => {
    document.getElementById("colorChange").style.color = "red";
})

document.getElementById("btnColorRevert").addEventListener("click", () => {
    document.getElementById("colorChange").style.color = "black";
})
