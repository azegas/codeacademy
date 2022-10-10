// Example numero 13

const whereToAppend = document.getElementById("appendToMe");

const element = document.createElement("div");

element.setAttribute("class", "child"); // must define by yourself in css
element.setAttribute("id", "someId"); // must define by yourself in css

whereToAppend.append(element);
element.style.color = "white"
element.style.fontWeight = "900"
element.style.textAlign = "center"
element.style.background = "orange"


element.textContent = "Cube created with JavaScipt";
