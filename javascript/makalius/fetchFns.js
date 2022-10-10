import { createTrip } from "./domFns.js";

export const deleteItem = (id, tripsWrapper) => {
  fetch(
    `https://63347222ea0de5318a0317b1.mockapi.io/FlightsFromVilnius/${id}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      console.log("Trip was deleted successfully");
      tripsWrapper.innerHTML = "";
      getAllTrips();
    })
    .catch((err) => {
      console.log("err", err);
    });
};

export const getAllTrips = async (allTrips, tripsWrapper) => {
  allTrips = await fetch(
    "https://63347222ea0de5318a0317b1.mockapi.io/FlightsFromVilnius"
  ).then((response) => {
    return response.json();
  });
  console.log("all", allTrips);

  allTrips.forEach((trip) => {
    createTrip(trip, tripsWrapper);
  });
};
