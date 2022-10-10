const destinationId = localStorage.getItem("destinationId");

const getOneDestination = () => {
  fetch(
    `https://63347222ea0de5318a0317b1.mockapi.io/FlightsFromVilnius/${destinationId}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      const titleWrapper = document.getElementById("destinationTitle");
      titleWrapper.innerHTML = data.destination;

      const flyWithTitile = document.getElementById("flyWithTitile");
      flyWithTitile.innerHTML = `Fly with: ${data.flightCompany}`;

      const destinationPhoto = document.getElementById("destinationPhoto");
      destinationPhoto.src = data.cityPhoto;
    });
};

getOneDestination();

const updateButtonX = document.getElementById("updateInfoButton");

updateButtonX.addEventListener("click", () => {
  const flightCompanyValue = document.getElementById("flightCompany").value;

  const updatedValues = { flightCompany: flightCompanyValue };

  fetch(
    `https://63347222ea0de5318a0317b1.mockapi.io/FlightsFromVilnius/${destinationId}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedValues),
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("Data updated!!!!!", data);
      const flyWithTitile = document.getElementById("flyWithTitile");
      flyWithTitile.innerHTML = `Fly with: ${data.flightCompany}`;
    });
});
