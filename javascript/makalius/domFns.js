import { deleteItem } from "./fetchFns.js";

export const createTrip = (trip, tripsWrapper) => {
  const tripWrapper = document.createElement("div");
  tripWrapper.classList.add("trip");

  const tripImageWrapper = document.createElement("div");
  tripImageWrapper.classList.add("trip-image-section");
  tripImageWrapper.style.backgroundImage = `url(${trip.cityPhoto})`;

  const titleSection = document.createElement("div");
  titleSection.classList.add("title-section");

  const title = document.createElement("div");
  title.classList.add("title");

  const buttonSection = document.createElement("div");
  buttonSection.classList.add("button-section");

  const button = document.createElement("button");
  button.classList.add("button");

  const tripPrice = document.createElement("div");
  tripPrice.classList.add("trip-price");
  tripPrice.innerHTML = `${trip.price}$`;

  const removeItemButton = document.createElement("button");
  removeItemButton.classList.add("remove-item");
  removeItemButton.innerHTML = "X";
  removeItemButton.addEventListener("click", () => {
    deleteItem(trip.id, tripsWrapper);
  });

  title.innerHTML = trip.destination;
  button.innerHTML = "Placiau";

  button.addEventListener("click", () => {
    localStorage.setItem("destinationId", trip.id);
    window.location.replace("./destinationPage.html");
  });

  buttonSection.append(button);
  titleSection.append(removeItemButton, tripPrice, title, buttonSection);
  tripWrapper.append(tripImageWrapper, titleSection);
  tripsWrapper.append(tripWrapper);
};
