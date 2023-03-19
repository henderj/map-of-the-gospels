// config
const LOC_ZOOM = 14;
const LOC_ZOOM_LIST = 12;
const MARKER_STYLE = {
    radius: 15,
    fillColor: "#6ecc39",
    color: "#b5e28c",
    weight: 5,
    opacity: 0.6,
    fillOpacity: 0.8
};
const BING_KEY = 'Avi-h13Lz1D8tbkOxDVzVsssy6A8ZfIeGi799xLKB3gm90EKnD_YLnlJNislsa3r';

// Create the map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer to the map
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Map data &copy; <a href="https://www.esri.com/en-us/home">Esri</a>',
    maxZoom: 18
}).addTo(map);


var latLngValues = locations.map(({ loc }) => loc);

// Create a LatLngBounds object that includes all of the above locations
var bounds = L.latLngBounds(latLngValues);
bounds = bounds.pad(0.1);

// Apply the bounds to the map
map.fitBounds(bounds);

var markers = L.markerClusterGroup({
    showCoverageOnHover: false,
});

const markerClick = function (location, zoom = LOC_ZOOM) {
    if (map.getZoom() < zoom) {
        map.flyTo(location.loc, zoom, { duration: 0.5 });
    } else {
        map.panTo(location.loc, { duration: 0.5 });
    }
    $('#sidebar-right-header').html('<h2>' + location.label + '</h2>');
    $('#sidebar-right').html(location.description);
}

const markerClickIndex = function (index) {
    markerClick(locations[index], LOC_ZOOM_LIST);
}

// Add markers to the map using the locations array and a for loop
for (let i = 0; i < locations.length; i++) {
    const location = locations[i];
    var marker = L.circleMarker(location.loc, {
        title: location.label,
        ...MARKER_STYLE
    });
    var tooltip = L.tooltip({ direction: 'up' }).setContent(location.label).setLatLng(location.loc);
    marker.bindTooltip(tooltip);
    marker.on('click', e => markerClick(location));
    markers.addLayer(marker);

    // add location to left sidebar
    $('#sidebar-left').append('<li class="location-list-item" onclick="markerClickIndex(' + i + ')"><a href="#">' + location.label + '</a></li>');
}

map.addLayer(markers);

// Add a button to reset the map view
L.easyButton('fa-home', function () {
    map.flyToBounds(bounds, { duration: 0.5 });
    $('#sidebar-right').html('<p>Click on a marker to see more information.</p>');
    $('#sidebar-right-header').html('');
}).addTo(map);

$(document).ready(function () {
    $("#menu-btn").click(function () {
        $("#sidebar-left-container").toggleClass("show-sidebar");
    });
});