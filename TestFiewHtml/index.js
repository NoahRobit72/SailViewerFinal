// const moveBoat = require('./functions/moveBoat.js');
import { moveBoat, createPath} from './functions.js';


async function initializeMap() {
    // Print Map
    var map = L.map('map').setView([42.356365, -71.085250], 16.2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; OpenStreetMap contributors'}).addTo(map);


    const {sailBoat1} = await inilizeBoat(map);
    return {sailBoat1, map};
};

async function placeBoats (map, boat1){
    var sailBoat1 = L.marker(boat1, {
        icon: L.divIcon({
            className: 'custom-div-icon',
            html: "<img src='./static/graphics/basicSailboat.png' style='width: 20px; height: 20px;'>",
            // iconSize: [20, 20],
            // iconAnchor: [10, 10],
        })
    }).addTo(map);

    return {sailBoat1}
}

async function inilizeBoat(map){
    const boatData = await moveBoat(0);

    // Check if boatData contains valid latitude and longitude
    console.log("Boat Data:", boatData.lon);

    if (!boatData.lat || !boatData.lon) {
        throw new Error("Invalid boat data: missing latitude or longitude");
    }

    const boat1 = cordList(boatData.lat, boatData.lon, boatData.angle )

    const {sailBoat1} = await placeBoats(map, boat1);
    return {sailBoat1};
}

var count = 0;

const {sailBoat1, map} = await initializeMap();

setInterval(async () => {
    count = count + 1;

    console.log("updating display");
    try {
        await moveBoats(sailBoat1, count);
        await drawLine(map, count);
        

    } catch (error) {
        console.error("Error fetching CSV data:", error);
    }
}, 500);

async function drawLine(map, count){
    const pathSoFar = await createPath(count);
    // const newPath = await smoothGPSData(pathSoFar, count);
    console.log(pathSoFar);
    plotPolyline(map, pathSoFar);
}



// testing function
async function moveBoats(sailBoat1, time){
    const boatData = await moveBoat(time);

    // Update coordinates (you can implement your logic here)
    var newLat1 = boatData.lat;
    var newLng1 = boatData.lon;

    // Move the marker to the new coordinates
    sailBoat1.setLatLng([newLat1, newLng1]);

    // Rotate the image inside the marker
    var imgElement1 = sailBoat1.getElement().querySelector('img');


    imgElement1.style.transform = 'rotate(' + boatData.angle + 'deg)';
} 

function cordList(lat, lon, angle) {
    return { lat, lon, angle};
}

function plotPolyline(map, points) {

    // Create a polyline and add it to the map
    const polyline = L.polyline(points, {
        color: 'black', // Set the color to light blue
        dashArray: '10, 10', // Set the dash pattern (alternating 10px dashes and 10px gaps)
        dashOffset: '5' // Offset the dash pattern by 5px
    }).addTo(map);
    // Fit the map to the bounds of the polyline
}