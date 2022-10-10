import { createTrip } from "./domFns.js";
import { getAllTrips } from "./fetchFns.js";

const tripsWrapper = document.getElementById("trips");
let allTrips;
getAllTrips(allTrips, tripsWrapper);

const filterButton = document.getElementById("filter-button");

filterButton.addEventListener("click", () => {
  const filterValue = document.getElementById("filter-input").value;

  const filteredData = allTrips.filter((trip) =>
    trip.destination.includes(filterValue)
  );

  tripsWrapper.innerHTML = "";

  filteredData.forEach((trip) => {
    createTrip(trip, tripsWrapper);
  });

  console.log("filteredData", filteredData);
});

const getCityButton = document.getElementById("addCityButton");

getCityButton.addEventListener("click", () => {
  const priceValue = document.getElementById("price-input").value;
  const durationValue = document.getElementById("duration-input").value;
  const companyValue = document.getElementById("company-input").value;
  const cityPhoto = document.getElementById("city-photo-input").value;
  const destinationValue = document.getElementById("destination-input").value;

  const data = {
    destination: destinationValue,
    price: priceValue,
    duration: durationValue,
    flightCompany: companyValue,
    cityPhoto: cityPhoto,
  };

  fetch("https://63347222ea0de5318a0317b1.mockapi.io/FlightsFromVilnius", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("success!!!!!", data);

      tripsWrapper.innerHTML = "";
      getAllTrips();
    });
});
