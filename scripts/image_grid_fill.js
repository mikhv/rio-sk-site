function imageGridFillWithContent(maxCount) {
    let imageGrid = document.getElementById('experienceImageGrid');

    for (let i = 0; i < maxCount; i++) {
        addHTMLCode(imageGrid, data.galleriesData.htmlLayout);
    }

    let imageGridItems = document.querySelectorAll('.experience-image-grid-item');
    let imageGridItemTitleElems = document.querySelectorAll('.experience-image-grid-item-title');
    let imageGridItemImageElems = document.querySelectorAll('.experience-image-grid-item-image');

    for (let i = 0; i < maxCount; i++) {
        imageGridItems = document.querySelectorAll('.experience-image-grid-item');
        imageGridItemTitleElems = document.querySelectorAll('.experience-image-grid-item-title');
        imageGridItemImageElems = document.querySelectorAll('.experience-image-grid-item-image');

        changeValueOfHTMLElem(imageGridItemTitleElems[i], data.galleriesData.galleryTitles[i]);
        changeAttrOfHTMLElem(imageGridItemImageElems[i], 'src', data.galleriesData.mainPath + data.galleriesData.subPaths[i] + data.galleriesData.imageFileNames[i][0]);
        changeAttrOfHTMLElem(imageGridItems[i], 'onclick',  `setGalleryIndex(${i})`);
    }
}

function addHTMLCode(parentElem, htmlLayout) {
    parentElem.innerHTML += htmlLayout;
}

function changeValueOfHTMLElem(elem, value) {
    elem.innerHTML = value;
}

function changeAttrOfHTMLElem(elem, attr, value) {
    elem.setAttribute(attr, value);
}

function setGalleryIndex(index) {
    saveCookie('galleryIndex', index);
}
