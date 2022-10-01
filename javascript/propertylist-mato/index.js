const END_POINT = "https://robust-safe-crafter.glitch.me/";
const adsData = {};
const adsContainer = document.querySelector(".ads");

const clickToAdd = () => {
  window.location = "./add.html";
};

const createAdCard = (adData) => {
  const adCard = document.createElement("div");
  adCard.classList.add("ad-card");

  const adImg = document.createElement("img");
  adImg.classList.add("ad-img");
  adImg.setAttribute("src", adData.image);

  const adTextWrapper = document.createElement("div");
  adTextWrapper.classList.add("ad-text-wrapper");
  const price = document.createElement("h1");
  price.innerHTML = `&euro; ${adData.price}`;
  const city = document.createElement("h6");
  city.innerHTML = adData.city;
  const description = document.createElement("textarea");
  description.classList.add("ad-card-textarea");
  description.readOnly = true;
  description.innerHTML = adData.description;

  adTextWrapper.append(price, city, description);
  adCard.append(adImg, adTextWrapper);
  adsContainer.appendChild(adCard);
};

const checkboxes = document.querySelectorAll("input[type=checkbox]");
let enabledCities = [];

// Array.forEach to add an event listener to each checkbox.
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    enabledCities = Array.from(checkboxes)
      .filter((i) => i.checked) // Array.filter to remove unchecked checkboxes.
      .map((i) => i.value); // Use Array.map to extract only the checkbox values from the array of objects.
    if (enabledCities.length === 0) {
      //if no checkboxes checked then just render ads from all data
      adsContainer.innerHTML = "";
      adsData.ads.forEach((ad) => {
        createAdCard(ad);
      });
    } else {
      //here we filter our ads data according to selected checkboxes
      adsContainer.innerHTML = "";
      const filteredAds = adsData.ads.filter((ad) => {
        const cityNoDiacritics = removeDiacritics(ad.city).toLowerCase();
        return enabledCities.includes(cityNoDiacritics);
      });
      if (filteredAds.length > 0) {
        filteredAds.forEach((ad) => {
          createAdCard(ad);
        });
      } else {
        adsContainer.innerHTML =
          "Sorry, nothing to show according to your input.";
      }
    }
  });
});

const searchForm = document.querySelector(".search");
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchInputValue = document.getElementById("city-search").value;
  if (searchInputValue) {
    adsContainer.innerHTML = "";
    const filteredAds = adsData.ads.filter((ad) => {
      const cityNoDiacritics = removeDiacritics(ad.city).toLowerCase();
      const searchCityNoDiacritics =
        removeDiacritics(searchInputValue).toLowerCase();
      return cityNoDiacritics.includes(searchCityNoDiacritics);
    });
    if (filteredAds.length > 0) {
      filteredAds.forEach((ad) => {
        createAdCard(ad);
      });
    } else {
      adsContainer.innerHTML =
        "Sorry, nothing to show according to your input.";
    }
  } else {
    adsContainer.innerHTML = "";
    adsData.ads.forEach((ad) => {
      createAdCard(ad);
    });
  }
});

fetchAds = async () => {
  try {
    const response = await fetch(END_POINT);
    if (response.ok) {
      adsData.ads = await response.json();
      adsData.ads.forEach((ad) => {
        createAdCard(ad);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

fetchAds();
