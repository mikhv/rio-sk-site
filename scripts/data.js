const data = {
    galleriesData: {
        mainPath: 'src/pictures/galleries/',
        subPaths: ['1/', '2/', '3/', '4/', '5/', '6/'],
        imageFileNames: [
            ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
            ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
            ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
            ['1.jpg', '2.jpg', '3.jpg'],
            ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
            ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']],
        galleryTitles: [
            'ПРОИЗВОДСТВЕННЫЕ ЗДАНИЯ',
            'ОБЩЕСТВЕННЫЕ ЗДАНИЯ',
            'КУЛЬТОВЫЕ ЗДАНИЯ',
            'ЖИЛЫЕ ЗДАНИЯ',
            'РЕКОНСТРУКЦИЯ И ТЕХПЕРЕВООРУЖЕНИЕ',
            'ПРОЕКТЫ ПЛАНИРОВКИ И МЕЖЕВАНИЯ'],
        htmlLayout: `
            <a href="gallery.html" class="image-grid-item experience-image-grid-item">
                <div class="experience-image-grid-item-title-wrapper">
                    <p class="experience-image-grid-item-title"></p>
                    <img src="src/icons/search_ico_24.svg" alt="Просмотр" class="experience-image-grid-item-icon">
                </div>
                <img src="" alt="Фото" class="experience-image-grid-item-image">
            </a>`,
        galleryIndex: 0,
        imageIndex: 0
    }
}

if (document.cookie) {
    data.galleriesData.galleryIndex = getCookie('galleryIndex');
}