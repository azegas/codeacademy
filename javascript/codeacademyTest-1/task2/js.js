const whereToAppend = document.getElementById("appendToMe");

const element = document.createElement("div");

element.setAttribute("class", "child");
element.setAttribute("id", "someId");

whereToAppend.append(element);
element.style.color = "white";
// element.style.fontWeight = "900"
element.style.textAlign = "center";
// element.style.background = "green"
// element.style.width = "200"
// element.style.height = "200"


element.textContent = "Cube created with JavaScipt";

const onload=function(){
    setTimeout(function(){
        document.getElementById("someId").style.backgroundColor="red";
    },3000);};
