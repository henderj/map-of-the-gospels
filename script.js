// Create the map
var map = L.map('map').setView([51.505, -0.09], 13);

const bingKey = 'Avi-h13Lz1D8tbkOxDVzVsssy6A8ZfIeGi799xLKB3gm90EKnD_YLnlJNislsa3r';

// Add a tile layer to the map
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Map data &copy; <a href="https://www.esri.com/en-us/home">Esri</a>',
    maxZoom: 18
}).addTo(map);



var locations = [
    {
        loc: [31.7857, 35.2271],
        label: "Jerusalem",
        description: `<p>Jerusalem is a city of great significance in the life and ministry of Jesus Christ. It was the site of his triumphal entry, when he rode into the city on a donkey and was hailed by the crowds as the Messiah (Matthew 21:1-11). It was also the site of his crucifixion and resurrection, which are central events of the Christian faith (Luke 23-24).</p>
        <p>In addition, Jerusalem was the location of the Jewish Temple, where Jesus famously overturned the tables of the moneychangers and taught the people about his Father's house (John 2:13-22). It was also the site of many of his teachings and miracles, such as the healing of a man at the Pool of Bethesda (John 5:1-15).</p>
        <p>For Christians, Jerusalem remains a holy city and a symbol of the connection between God and humanity. It is a pilgrimage site for believers from around the world, who come to walk in the footsteps of Jesus and experience the history and spirituality of the city.</p>`
    },
    {
        loc: [31.7043, 35.2076],
        label: "Bethlehem",
        description: "The birthplace of Jesus"
    },
    {
        loc: [32.70215, 35.297633],
        label: "Nazareth",
        description: "Where Jesus grew up"
    },
    {
        loc: [32.881139, 35.575056],
        label: "Capernaum",
        description: "A town on the Sea of Galilee where Jesus lived and preached"
    },
    {
        loc: [32.8189, 35.5900],
        label: "Sea of Galilee",
        description: "A freshwater lake in Israel where Jesus performed many miracles"
    },
    {
        loc: [32.68624, 35.393125],
        label: "Mount of Transfiguration",
        description: "Where Jesus was transfigured in the presence of his disciples"
    },
    {
        loc: [31.77941, 35.23944],
        label: "Garden of Gethsemane",
        description: "Where Jesus prayed the night before his crucifixion"
    },
    {
        loc: [31.761417, 35.558333],
        label: "Jordan River",
        description: `<p>The Jordan River is a significant location in the New Testament of the Bible, as it is associated with the life and ministry of Jesus. According to the Gospels, John the Baptist baptized Jesus in the Jordan River (Matthew 3:13-17; Mark 1:9-11; Luke 3:21-22; John 1:29-34), which is considered a pivotal moment in Jesus' life and the beginning of his public ministry.</p>
        <p>Later in Jesus' ministry, he healed a blind man near the Jordan River (John 9:1-7) and spent time teaching and performing miracles in the region surrounding the river (Matthew 4:15). The Jordan River is also the location where Jesus was tempted by the devil (Matthew 4:1-11; Mark 1:12-13; Luke 4:1-13).</p>
        <p>The Jordan River is therefore significant as a place of baptism, healing, teaching, and temptation in the life of Jesus, and its role in his ministry is highlighted in the Gospels of the New Testament.</p>`
    },
    {
        loc: [31.744506, 35.245124],
        label: "Mount of Olives",
        description: "Where Jesus ascended to heaven"
    }
];

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
        document.getElementById('sidebar-right').innerHTML = '<p>' + location.description + '</p>';
    });

    markers.addLayer(marker);
});

map.addLayer(markers);

// Add a button to reset the map view
L.easyButton('fa-home', function () {
    map.flyToBounds(bounds, { duration: 0.5 });
}).addTo(map);

