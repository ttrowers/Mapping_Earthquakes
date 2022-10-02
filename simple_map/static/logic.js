// Add console.log to check to see if our code is working.
// console.log("working");
var map = L.map("mapid",{
    center:[45.52, -122.67],
    zoom:13
})
// Create the map object with a center and zoom level.
// We create the tile layer that will be the background of our map.

 L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(map);
// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);