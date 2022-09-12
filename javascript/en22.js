// Example numero 22
// https://wheretheiss.at/
// https://www.youtube.com/watch?v=uxf0--uiX0I&ab_channel=TheCodingTrain
// https://www.youtube.com/watch?v=nZaZ2dB6pow&ab_channel=TheCodingTrain


// making a map and tiles
const map = L.map('issMap').setView([0, 0], 1);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


// making a marker with a custom icon
const issIcon = L.icon({
    iconUrl: './images/iss.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
});

const marker = L.marker([0, 0], { icon: issIcon}).addTo(map);

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'

async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude } = data;
    // console.log(data);


    document.getElementById('iss_lat').textContent = latitude.toFixed(2);
    document.getElementById('iss_lon').textContent = longitude.toFixed(2);
    marker.setLatLng([latitude, longitude]);
    mymap.setView([latitude, longitude], 2)
    
    console.log(data.latitude);
    console.log(data.longitude);
}

getISS();

setInterval(getISS, 1000);
