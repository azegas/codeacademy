// Example numero 03

const button99 = document.getElementById("button99");
button99.style.cssText = 'position:absolute; top:0; left:0;'

let isInOriginalPosition = true;
function changePosition() {
  event.target.style.cssText = isInOriginalPosition ? 'position:absolute; bottom:0; right:0;' : 'position:absolute; top:0; left:0;';
  isInOriginalPosition = !isInOriginalPosition;
}

button99.addEventListener('click', changePosition);

