// Create the map
var map = L.map('map').setView([51.505, -0.09], 13);

const bingKey = 'Avi-h13Lz1D8tbkOxDVzVsssy6A8ZfIeGi799xLKB3gm90EKnD_YLnlJNislsa3r';

// Add a tile layer to the map
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Map data &copy; <a href="https://www.esri.com/en-us/home">Esri</a>',
    maxZoom: 18
}).addTo(map);



// Coordinates for important locations in Israel
var jerusalem = [31.7857, 35.2271];
var bethlehem = [31.7026, 35.2023];
var nazareth = [32.7042, 35.2939];
var capernaum = [32.8713, 35.5192];
var seaOfGalilee = [32.918, 35.534];
var mountOfTransfiguration = [28.539, 35.544];
var gardenOfGethsemane = [31.778, 35.234];
var jordanRiver = [31.941, 35.848];
var templeMount = [31.778, 35.234];
var mountOfOlives = [31.778, 35.234];

// Create a LatLngBounds object that includes all of the above locations
var bounds = L.latLngBounds([jerusalem, bethlehem, nazareth, capernaum]);
// Add 10px padding to the bounds
bounds = bounds.pad(0.1);

// Apply the bounds to the map
map.setMaxBounds(bounds);
map.fitBounds(bounds);

var jerusalemMarker = L.marker(jerusalem).addTo(map);
var tooltip = L.tooltip({ permanent: true, direction: 'right' }).setContent("Jerusalem").setLatLng(jerusalem);
map.addLayer(tooltip);
jerusalemMarker.bindTooltip(tooltip);

var bethlehemMarker = L.marker(bethlehem).addTo(map);
var tooltip = L.tooltip({ permanent: true, direction: 'right' }).setContent("Bethlehem").setLatLng(bethlehem);
map.addLayer(tooltip);
bethlehemMarker.bindTooltip(tooltip);

var nazarethMarker = L.marker(nazareth).addTo(map);
var tooltip = L.tooltip({ permanent: true, direction: 'right' }).setContent("Nazareth").setLatLng(nazareth);
map.addLayer(tooltip);
nazarethMarker.bindTooltip(tooltip);

var capernaumMarker = L.marker(capernaum).addTo(map);
var tooltip = L.tooltip({ permanent: true, direction: 'right' }).setContent("Capernaum").setLatLng(capernaum);
map.addLayer(tooltip);
capernaumMarker.bindTooltip(tooltip);

var seaOfGalileeMarker = L.marker(seaOfGalilee).addTo(map);
var tooltip = L.tooltip({ permanent: true, direction: 'right' }).setContent("Sea of Galilee").setLatLng(seaOfGalilee);
map.addLayer(tooltip);
seaOfGalileeMarker.bindTooltip(tooltip);

// Mount of Transfiguration
var mountOfTransfigurationMarker = L.marker(mountOfTransfiguration).addTo(map);
var tooltip = L.tooltip({ permanent: true, direction: 'right' }).setContent("Mount of Transfiguration").setLatLng(mountOfTransfiguration);
map.addLayer(tooltip);
mountOfTransfigurationMarker.bindTooltip(tooltip);

// Garden of Gethsemane
var gardenOfGethsemaneMarker = L.marker(gardenOfGethsemane).addTo(map);
var tooltip = L.tooltip({ permanent: true, direction: 'right' }).setContent("Garden of Gethsemane").setLatLng(gardenOfGethsemane);
map.addLayer(tooltip);
gardenOfGethsemaneMarker.bindTooltip(tooltip);

// The Jordan River
var jordanRiverMarker = L.marker(jordanRiver).addTo(map);
var tooltip = L.tooltip({ permanent: true, direction: 'right' }).setContent("Jordan River").setLatLng(jordanRiver);
map.addLayer(tooltip);
jordanRiverMarker.bindTooltip(tooltip);

// The Temple Mount in Jerusalem
var templeMountMarker = L.marker(templeMount).addTo(map);
var tooltip = L.tooltip({ permanent: true, direction: 'right' }).setContent("Temple Mount in Jerusalem").setLatLng(templeMount);
map.addLayer(tooltip);
templeMountMarker.bindTooltip(tooltip);

// The Mount of Olives
var mountOfOlivesMarker = L.marker(mountOfOlives).addTo(map);
var tooltip = L.tooltip({ permanent: true, direction: 'right' }).setContent("Mount of Olives").setLatLng(mountOfOlives);
map.addLayer(tooltip);
mountOfOlivesMarker.bindTooltip(tooltip);




