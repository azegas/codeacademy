// Example numero 13

const whereToAppend = document.getElementById("appendToMe");

const element = document.createElement("div");

element.setAttribute("class", "child");
element.setAttribute("id", "someId");

whereToAppend.append(element);
element.style.color = "white"
element.style.fontWeight = "900"
element.style.textAlign = "center"


element.textContent = "Cube created with JavaScipt";
