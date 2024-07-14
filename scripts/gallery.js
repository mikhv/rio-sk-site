const imageGridElemsTitles = document.querySelectorAll('.images-grid-item-title');
const imageGridFrames = document.querySelectorAll('.images-grid-item');

// let galleries = {
//     mainPath: 'src/pictures/Galleries/',
//     subPaths: ['1/', '2/', '3/', '4/', '5/', '6/'],
//     titles: ['ПРОИЗВОДСТВЕННЫЕ ЗДАНИЯ', 'ОБЩЕСТВЕННЫЕ ЗДАНИЯ', 'КУЛЬТОВЫЕ ЗДАНИЯ', 'ЖИЛЫЕ ЗДАНИЯ', 'РЕКОНСТРУКЦИЯ И ТЕХПЕРЕВООРУЖЕНИЕ', 'ПРОЕКТЫ ПЛАНИРОВКИ И МЕЖЕВАНИЯ'],
//     imageFileNames: [
//         ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
//         ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
//         ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
//         ['1.jpg', '2.jpg', '3.jpg'],
//         ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
//         ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
//     ],
//     imageIndex: 0,
//     galleryIndex: 0
// }

// Grid
function imageGridFillWithContent() {
    for (let k = 0; k < 6; k++) { 
        imageGridElemsTitles[k].innerHTML = galleries.titles[k];
        imageGridFrames[k].style.backgroundImage = `url(${galleries.mainPath + galleries.subPaths[k] + galleries.imageFileNames[k][0]})`;
    }
}
window.onload = imageGridFillWithContent();

// Gallery
function showGallery(galleryIndex) {
    galleries.galleryIndex = galleryIndex;
    updateTitle(galleryIndex);
    updateImage(galleryIndex, 0)

    gallery.style.height = "100vh";
}

function hideGallery() {
    galleries.galleryIndex = 0; // reset
    galleries.imageIndex = 0; // reset

    gallery.style.height = "0";
}

function updateTitle(index) {
    galleryTitle.innerHTML = galleries.titles[index];
}

function updateImage(galleryIndex, imageIndex) {
    console.log('Before: ' + galleries.galleryIndex + ' ' + galleries.imageIndex);

    galleryImage.src = `${galleries.mainPath + galleries.subPaths[galleryIndex] + galleries.imageFileNames[galleryIndex][imageIndex]}`;
    
    console.log('After: ' + galleries.galleryIndex + ' ' + galleries.imageIndex);
}

function reindex() {
    if (galleries.imageIndex < 0) {
        galleries.galleryIndex--;
        if (galleries.galleryIndex < 0) {
            galleries.galleryIndex = galleries.imageFileNames.length-1;
        }

        galleries.imageIndex = galleries.imageFileNames[galleries.galleryIndex].length-1;
    }

    if (galleries.imageIndex > galleries.imageFileNames[galleries.galleryIndex].length-1) {
        galleries.galleryIndex++;
        if (galleries.galleryIndex > galleries.imageFileNames.length-1) {
            galleries.galleryIndex = 0;
        }

        galleries.imageIndex = 0;
    }
}

leftGalleryArrow.onclick = () => {
    galleries.imageIndex--;
    reindex();
    updateTitle(galleries.galleryIndex);
    updateImage(galleries.galleryIndex, galleries.imageIndex);
}

rightGalleryArrow.onclick = () => {
    galleries.imageIndex++;
    reindex();
    updateTitle(galleries.galleryIndex);
    updateImage(galleries.galleryIndex, galleries.imageIndex);
}

closeGalleryBtn.onclick = () => {hideGallery()}