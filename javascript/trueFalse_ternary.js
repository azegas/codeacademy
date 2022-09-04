const year = 2021;

const currentYear = year === 2021 ? "This year" : "last Year";

console.log(currentYear)

// 

const name = "Arvydas"

const nameLength = name.length < 5 ? "short name" : "long name";

console.log(nameLength)

//

const clientAge = 9
const legalAge = 10

const ageCheck = clientAge >= legalAge ? "can drive" : "cant drive";

console.log(ageCheck)

clientAge < 0 || clientAge > 120 ? console.log("Invalid age") : clientAge >= legalAge ? console.log("Can drive") : console.log("Can't drive");

//

const phone = "ble";
const isIphoneUser = phone === 'iPhone';
console.log(isIphoneUser)
