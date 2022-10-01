////////////////////////////////////////////////////////
// simply console log the api array

// fetch("https://633487d3ea0de5318a04b500.mockapi.io/FlightsFromVilnius")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

////////////////////////////////////////////////////////
// console log FILTERED api array

// fetch("https://633487d3ea0de5318a04b500.mockapi.io/FlightsFromVilnius")
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log("unfiltered", data);
//         const filtered = data.filter(function(value) {
//             return value.destination == "Panevezys";
//         });
//         console.log("filtered", filtered);
//     });


////////////////////////////////////////////////////////
// visualize only the 10th item

// const id = "1";

// fetch("https://633487d3ea0de5318a04b500.mockapi.io/FlightsFromVilnius/" + id)
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);

//         const element = document.createElement("div");
//         element.classList.add("child");
//         element.innerHTML = data.destination;
//         element.style.backgroundImage = "url(" + data.Image + ")";
//         element.style.backgroundSize = "cover";

//         document.body.append(element);
//     });

////////////////////////////////////////////////////////
// same like above, get only 10th item, just with async ir await

// const id = "2";
// let data;
// const fetchAndDisplayData = async () => {
//   data = await fetch(
//     "https://633487d3ea0de5318a04b500.mockapi.io/FlightsFromVilnius/" + id
//   ).then((res) => {
//     return res.json();
//   });

//   const element = document.createElement("div");
//   element.classList.add("child");
//   element.innerHTML = data.destination;
//   element.style.backgroundImage = "url(" + data.Image + ")";
//   element.style.backgroundSize = "cover";

//   document.body.append(element);
//   console.log("data 1", data);
// };

// console.log("data 2", data);    // undefined...

// fetchAndDisplayData();

// // https://www.coingecko.com/api/documentations/v3


////////////////////////////////////////////////////////

fetch("https://633487d3ea0de5318a04b500.mockapi.io/FlightsFromVilnius")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        data.forEach((pointInsideData) => {
            const element = document.createElement("div");
            element.classList.add("child");
            element.innerHTML = pointInsideData.destination;
            element.style.backgroundImage = "url(" + pointInsideData.Image + ")";
            element.style.backgroundSize = "cover";

            document.body.append(element);
        });
    });


////////////////////////////////////////////////////////
// strange example, posts each time upon refresh

// const duomenys = {
//     destination: "Panevezys",
//     price: 999,
//     Duration: "1.2h",
//     Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Panevezys-Senvages_panorama-2006_09.JPG/1200px-Panevezys-Senvages_panorama-2006_09.JPG",
// };

// fetch("https://633487d3ea0de5318a04b500.mockapi.io/FlightsFromVilnius", {
//     method: "POST",
//     headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(duomenys),
// })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });
