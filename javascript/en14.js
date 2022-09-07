// Example numero 14

function addCube() {
    const whereToAppend = document.getElementById("appendToMe2");
    const cube = document.createElement("div");
    cube.classList.add("child");
    whereToAppend.append(cube);
    
    // styling
    cube.textContent = "Cube created with JavaScipt";
    cube.style.color = "white"
    cube.style.fontWeight = "900"
    cube.style.textAlign = "center"
}
