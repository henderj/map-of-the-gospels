// Create the map
var map = L.map('map').setView([51.505, -0.09], 13);

const bingKey = 'Avi-h13Lz1D8tbkOxDVzVsssy6A8ZfIeGi799xLKB3gm90EKnD_YLnlJNislsa3r';

// Add a tile layer to the map
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Map data &copy; <a href="https://www.esri.com/en-us/home">Esri</a>',
    maxZoom: 18
}).addTo(map);



var locations;
// Coordinates for important locations in Israel
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        locations = data;
        // do something with the locations data here
    })
    .catch(error => console.error(error));

var latLngValues = locations.map(({ loc }) => loc);

// Create a LatLngBounds object that includes all of the above locations
var bounds = L.latLngBounds(latLngValues);
// Add 10px padding to the bounds
bounds = bounds.pad(0.1);

// Apply the bounds to the map
// map.setMaxBounds(bounds);
map.fitBounds(bounds);

var markers = L.markerClusterGroup({
    showCoverageOnHover: false,
});

// Add markers to the map using the locations array and a foreach loop
locations.forEach(function (location) {
    var marker = L.circleMarker(location.loc, {
        title: location.label,
        radius: 15,
        fillColor: "#6ecc39",
        color: "#b5e28c",
        weight: 5,
        opacity: 0.6,
        fillOpacity: 0.8
    });
    var tooltip = L.tooltip({ direction: 'up' }).setContent(location.label).setLatLng(location.loc);
    marker.bindTooltip(tooltip);
    marker.on('click', function (e) {
        // var location = e.target.options.location;
        document.getElementById('sidebar-right-header').innerHTML = '<h2>' + location.label + '</h2>';
        document.getElementById('sidebar-right').innerHTML = '<p>Latitude: ' + location.loc[0] + '</p>' +
            '<p>Longitude: ' + location.loc[1] + '</p>';
    });

    markers.addLayer(marker);
});

map.addLayer(markers);

// Add a button to reset the map view
L.easyButton('fa-home', function () {
    map.flyToBounds(bounds, { duration: 0.5 });
}).addTo(map);

