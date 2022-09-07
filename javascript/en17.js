// Example numero 17
// not mine, just copied for reference. some next level stuff

const button100 = document.getElementById("button100");
button100.style.cssText = 'position:absolute; top:0; left:0';

let corner = 0
const cornerStyles = ['position:absolute; top:0; right:0;', 'position:absolute; bottom:0; right:0;', 'position:absolute; bottom:0; left:0;', 'position:absolute; top:0; left:0;'];

function changePosition1(event) {
    if (corner < cornerStyles.length){
        event.target.style.cssText = cornerStyles[corner];
        corner++;
    }
    if (corner === cornerStyles.length) {
        corner = 0;
    }
}

button100.addEventListener('click', changePosition1);
