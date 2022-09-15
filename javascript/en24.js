// Example numero 24

const numbersArray = [1, -1, 4, 6];

// let sum = 0;
// for (let n of numbersArray)
//     sum +=n;

// console.log(sum)


document.getElementById("numbersArray").innerHTML = "Array nr.1 = " + numbersArray;

function highest() {
    const result = numbersArray.reduce((a,b)=>{ return (a>b) ? a : b })
    // console.log(result)
    document.getElementById("highestNumbersArray").innerHTML = "highest = " + result;
}
