window.onload = showGallery(data.galleriesData.galleryIndex);

function showGallery(galleryIndex) {
    updateTitle(galleryIndex);
    updateImage(galleryIndex, 0)
}

function updateTitle(index) {
    document.getElementById('galleryTitle').innerHTML = data.galleriesData.galleryTitles[index];
}

function updateImage(galleryIndex, imageIndex) {
    document.getElementById('galleryImage').src = `${data.galleriesData.mainPath + data.galleriesData.subPaths[galleryIndex] + data.galleriesData.imageFileNames[galleryIndex][imageIndex]}`;

    // document.getElementById('galleryTitle').innerHTML = ' | ' + (imageIndex+1);
}

function reindex() {
    if (data.galleriesData.imageIndex < 0) {
        data.galleriesData.imageIndex = data.galleriesData.imageFileNames[data.galleriesData.galleryIndex].length-1;
    }

    if (data.galleriesData.imageIndex > data.galleriesData.imageFileNames[data.galleriesData.galleryIndex].length-1) {
        data.galleriesData.imageIndex = 0;
    }
}

document.getElementById('galleryPrevButton').onclick = () => {
    data.galleriesData.imageIndex--;
    reindex();
    // updateTitle(data.galleriesData.galleryIndex);
    updateImage(data.galleriesData.galleryIndex, data.galleriesData.imageIndex);
}

document.getElementById('galleryNextButton').onclick = () => {
    data.galleriesData.imageIndex++;
    reindex();
    // updateTitle(data.galleriesData.galleryIndex);
    updateImage(data.galleriesData.galleryIndex, data.galleriesData.imageIndex);
}