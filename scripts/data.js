const data = {
    commonData: {
        mainPath: "src/pictures/",
    },
    experienceData: {
        mainDir: "Galleries/",
        subPaths: ['1/', '2/', '3/', '4/', '5/', '6/'],
        imageFileNames: [
            ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
            ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
            ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
            ['1.jpg', '2.jpg', '3.jpg'],
            ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
            ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
        ],
        galleryTitles: ['ПРОИЗВОДСТВЕННЫЕ ЗДАНИЯ', 'ОБЩЕСТВЕННЫЕ ЗДАНИЯ', 'КУЛЬТОВЫЕ ЗДАНИЯ', 'ЖИЛЫЕ ЗДАНИЯ', 'РЕКОНСТРУКЦИЯ И ТЕХПЕРЕВООРУЖЕНИЕ', 'ПРОЕКТЫ ПЛАНИРОВКИ И МЕЖЕВАНИЯ'],
        imageIndex: 0,
        galleryIndex: 0,
        htmllLayout: `<a href="gallery.html" class="image-link">
                        <div class="image-grid-item experience-image-grid-item shadow">
                            <div class="image-grid-item-title-wrapper flex flex-row gray-bg">
                                <p class="image-grid-item-title"></p>
                                <img src="src/icons/search_ico_24.svg" alt="Просмотр" class="image-grid-item-icon">
                            </div>
                            <img src="" alt="Фото" class="image-grid-item-image experience-image-grid-item-image">
                        </div>
                    </a>`
    }, 
    qualityData: {
        mainDir: "Documents/",
        subPaths: ['', '', '', '', ''],
        imageFileNames: [["1.jpg"], ["2.jpg"], ["3.jpg"], ["4.jpg"], ["5.jpg"], ["6.jpg"]],
        htmllLayout: `<div class="image-grid-item quality-image-grid-item shadow">
                        <img src="" alt="Фото" class="image-grid-item-image quality-image-grid-item-image">
                    </div>`
    }
}