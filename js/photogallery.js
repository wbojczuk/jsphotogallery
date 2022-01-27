"use strict";


// Global Variable Declarations

var currentImg = 0;
var imgCount = document.querySelectorAll('.img').length;

// loadThumb Function Call

loadThumb();

// Function to load image thumbnails

function loadThumb() {
    // Local Variable Declaration
    var imgLocation = "";
    var currentCount = 0;
    var elementId = "";


    // Loop to load Thumbnails 
    for (let i = 0; i < imgCount; i++ ) {
        currentCount = i + 1;
        imgLocation = "url('img/" + currentCount + ".jpg";
        elementId = "img" + currentCount;
        document.getElementById(elementId).style.background = imgLocation;
        document.getElementById(elementId).style.backgroundPosition = "center";
        document.getElementById(elementId).style.backgroundSize = "contain";
        document.getElementById(elementId).style.backgroundRepeat = "no-repeat";

    }

    // document.getElementById("printTest").innerHTML = imgCount;
}


// Expanded Image Function

function expandImg(intValue) {

document.getElementById("galleryContainer").classList.add("d-none");
currentImg = intValue;
var imgLocation = "url('img/" + intValue + ".jpg')";
var expandedImg = document.getElementById("expandedImg");
expandedImg.style.background = imgLocation;
expandedImg.style.backgroundSize = "contain";
expandedImg.style.backgroundPosition = "center";
expandedImg.style.backgroundRepeat = "no-repeat";
document.getElementById("expandedImgContainer").classList.remove("d-none");
document.getElementById("mainWrapper").style.background = "none";

}

//Close Expanded Image Function
function closeExpandedButton() {
    document.getElementById("expandedImgContainer").classList.add("d-none");
    document.getElementById("galleryContainer").classList.remove("d-none");
    document.getElementById("mainWrapper").style.background = "";

}


// Next Expanded Image Function

function nextExpandedImg() {
    currentImg = parseInt(currentImg) + 1;
    var imgLocation = "url('img/" + currentImg + ".jpg')";
    var expandedImg = document.getElementById("expandedImg");
    expandedImg.style.background = imgLocation;
    expandedImg.style.background = imgLocation;
    expandedImg.style.backgroundSize = "contain";
    expandedImg.style.backgroundPosition = "center";
    expandedImg.style.backgroundRepeat = "no-repeat";

    if (parseInt(currentImg) >= imgCount) {
        var nextButton = document.getElementById("nextExpandedImgButton");
        nextButton.style.pointerEvents = "none";
        nextButton.style.opacity = "0.2";
    }
    if (parseInt(currentImg) >= 1) {
        var preButton = document.getElementById("previousExpandedImgButton");
        preButton.style.pointerEvents = "auto";
        preButton.style.opacity = "1";
    }
}


// Previous Expanded Image Function

function previousExpandedImg() {
    currentImg = parseInt(currentImg) - 1;
    var imgLocation = "url('img/" + currentImg + ".jpg')";
    var expandedImg = document.getElementById("expandedImg");
    expandedImg.style.background = imgLocation;
    expandedImg.style.background = imgLocation;
    expandedImg.style.backgroundSize = "contain";
    expandedImg.style.backgroundPosition = "center";
    expandedImg.style.backgroundRepeat = "no-repeat";

    if (parseInt(currentImg) <= 1) {
        var preButton = document.getElementById("previousExpandedImgButton");
        preButton.style.pointerEvents = "none";
        preButton.style.opacity = "0.2";
    }
    if (parseInt(currentImg) < imgCount) {
        var nextButton = document.getElementById("nextExpandedImgButton");
        nextButton.style.pointerEvents = "auto";
        nextButton.style.opacity = "1";
    }

}

