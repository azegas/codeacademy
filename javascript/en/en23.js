// Example numero 23

// example with strings

const arrayExample = ["Jack", "Mike", "Steven", "Arvydas"];

const sortArrayButton = document.getElementById("sortArray1");

document.getElementById("arrayExample").innerHTML = "Array nr.1 = " + arrayExample;

function sortArray(){
    arrayExampleSorted = arrayExample.sort()
    document.getElementById("arrayExample").innerHTML = "Array nr.1 = " +  arrayExampleSorted;
}


sortArrayButton.addEventListener('click', sortArray)


// example with numbers

const arrayExample2 = [8, 44, 23, 12, 685, 3];

document.getElementById("arrayExample2").innerHTML = "Array nr.2 = " + arrayExample2;

function sortArray2(){
    arrayExampleSorted2 = arrayExample2.sort(function(a,b){return a-b});
    document.getElementById("arrayExample2").innerHTML = "Array nr.2 = " +  arrayExampleSorted2;
}

const sortArrayButton3 = document.getElementById("sortArray2");

sortArrayButton3.addEventListener('click', sortArray2)
