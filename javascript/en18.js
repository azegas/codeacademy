// Example numero 18

const noHtmlWrapper = document.getElementById("noHtmlWrapper");

noHtmlWrapper.style.background = "cyan";
noHtmlWrapper.style.height = "100%";
noHtmlWrapper.style.padding = "2rem";

// main block

const noHtmlMain = document.createElement("div");
// noHtmlMain.textContent = "zdrvaa";
noHtmlMain.style.background = "white";
noHtmlMain.style.width = "70%";
noHtmlMain.style.margin = "5rem auto 0 auto";
noHtmlMain.style.padding = "1rem";
noHtmlMain.style.borderRadius = "0.5rem";
noHtmlMain.style.textAlign = "center"

noHtmlWrapper.append(noHtmlMain);

// image

const noHtmlImg = document.createElement("img");
noHtmlImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgfR2dYfw4VgOHE19fAFBmC5ShphZQ-bs--9YfDXy5eNSWeoRoTo_sbaoj7BA4U-wrBs&usqp=CAU"
noHtmlImg.style.width = "10rem";
noHtmlImg.style.borderRadius = "50%"
noHtmlImg.style.padding = "o.5rem";
noHtmlImg.style.border = "1px solid #eee"
noHtmlImg.style.marginTop = "-100px"
noHtmlMain.append(noHtmlImg);

// text

const noHtmlName = document.createElement("h2");
noHtmlName.textContent = "Arvydas";
noHtmlMain.append(noHtmlName);

// text

const noHtmlEmail = document.createElement("p");
noHtmlEmail.textContent = "arvydas.email@gmail.com";
noHtmlEmail.style.color = "#888";
noHtmlMain.append(noHtmlEmail);
