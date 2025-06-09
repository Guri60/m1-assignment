// Variables for open/close tags and info box content
const infoBox = document.getElementById("infoBox");
const infoHeading = document.getElementById("infoHeading");
const infoText = document.getElementById("infoText");
const infoClose = document.getElementById("infoClose");

// Text to close the info box
const closeText = "Click on an image to learn more.";

// Array of cliff information
const cliffInfo = [
    "East Cliff offers breathtaking views of the river and a peaceful escape into nature.",
    "North Cliff towers above the forested mountains and is a hotspot for hikers.",
    "South Cliff reveals deep canyons and stunning sunset vistas, perfect for photography.",
    "West Cliff overlooks the Pacific Ocean and is a favorite among beachgoers.",
    "Forest Cliff is surrounded by dense woodlands and provides wildlife viewing opportunities."
];

// Add event listeners to all images
document.querySelectorAll(".cliff-images img").forEach((img) => {
    img.addEventListener("click", function () {
        const id = this.getAttribute("data-id");
        infoHeading.innerHTML = this.alt;
        infoText.innerHTML = cliffInfo[id];
        infoBox.style.visibility = "visible";
    });
});

// Close link functionality
infoClose.addEventListener("click", function (e) {
    e.preventDefault();
    infoBox.style.visibility = "hidden";
    infoHeading.innerHTML = "Cliff Info";
    infoText.innerHTML = closeText;
});

