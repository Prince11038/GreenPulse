// Initialize the map and set the view to India
var map = L.map('map').setView([20.5937, 78.9629], 5); // Center of India

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Marker data for three locations
var locations = [
    { coords: [28.6139, 77.2090], company: "Amazon", users: "50M", city: "Delhi" },
    { coords: [12.9716, 77.5946], company: "Flipkart", users: "40M", city: "Bangalore" },
    { coords: [19.0760, 72.8777], company: "Shopify", users: "30M", city: "Mumbai" }
];

// Add markers
locations.forEach(function(location) {
    L.marker(location.coords).addTo(map)
        .bindPopup(`<b>${location.company}</b><br>City: ${location.city}<br>User Base: ${location.users}`);
});