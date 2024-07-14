function imageGridFill(parentElem, imageElems, path, subPaths, galleryTitles, imageFileNames, htmllLayout) {
    for (let i = 0; i < subPaths.length; i++) {
        document.getElementById(parentElem).innerHTML += htmllLayout;
        changeImageSrc(document.querySelectorAll(imageElems)[i], path + subPaths[i] + imageFileNames[i][0]);
        
        changeGalleryTitle(document.querySelectorAll('.image-grid-item-title')[i], galleryTitles[i])
        console.log(document.querySelectorAll(imageElems)[i] + ' / ' + path + subPaths[i] + imageFileNames[i][0]);
    }
}

function changeImageSrc(imageElem, src) {
    imageElem.src = src;
}

function changeGalleryTitle(textElem, text) {
    textElem.innerHTML = text;
}

window.onload = function() {
    imageGridFill('experienceImageGrid', '.experience-image-grid-item-image', data.commonData.mainPath + data.experienceData.mainDir, data.experienceData.subPaths, data.experienceData.galleryTitles, data.experienceData.imageFileNames, data.experienceData.htmllLayout);
    imageGridFill('qualityImageGrid', '.quality-image-grid-item-image', data.commonData.mainPath + data.qualityData.mainDir, data.qualityData.subPaths, 0, data.qualityData.imageFileNames, data.qualityData.htmllLayout);

}

// Grid of images for the experience section

// Image grid for the quality section