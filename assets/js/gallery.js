    const animals = [
        {
            imgSrc: "assets/images/gallery/gallery_img_1.jpg",
            species: "Köpek",
            speciesTag: "dogs",
            name: "Boncuk"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_2.jpg",
            species: "Kedi",
            speciesTag: "kittens",
            name: "Mırmır"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_3.jpg",
            species: "Köpek",
            speciesTag: "dogs",
            name: "Pamuk"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_4.jpg",
            species: "Kedi",
            speciesTag: "kittens",
            name: "Tekir"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_5.jpg",
            species: "Köpek",
            speciesTag: "dogs",
            name: "Fıstık"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_6.jpg",
            species: "Kuş",
            name: "Şeker"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_7.jpg",
            species: "Köpek",
            speciesTag: "dogs",
            name: "Luna"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_13.jpg",
            species: "Köpek",
            speciesTag: "dogs",
            name: "Dora"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_9.jpg",
            species: "Köpek",
            speciesTag: "dogs",
            name: "Karamel"
        },
        {
            imgSrc: "assets/images/gallery/gigi_köpek_1.jpeg",
            species: "Köpek",
            speciesTag: "dogs",
            name: ""
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_11.jpg",
            species: "Kedi",
            speciesTag: "kittens",
            name: "Pamuk"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_12.jpg",
            species: "Köpek",
            speciesTag: "dogs",
            name: "Cici"
        },
        {
            imgSrc: "assets/images/gallery/gigi_kedi_1.jpeg",
            species: "Kedi",
            speciesTag: "cats",
            name: "Cici"
        }
    ];

    const homePageAnimals = [
        {
            imgSrc: "assets/images/gallery/gigi_köpek_1.jpeg",
            species: "Köpek",
            speciesTag: "dogs",
            name: ""
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_5.jpg",
            species: "Köpek",
            speciesTag: "dogs",
            name: "Fıstık"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_7.jpg",
            species: "Köpek",
            speciesTag: "dogs",
            name: "Luna"
        },
        {
            imgSrc: "assets/images/gallery/gigi_kedi_1.jpeg",
            species: "Kedi",
            speciesTag: "cats",
            name: "Cici"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_13.jpg",
            species: "Köpek",
            speciesTag: "dogs",
            name: "Dora"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_9.jpg",
            species: "Köpek",
            speciesTag: "dogs",
            name: "Karamel"
        },
    ]

    document.addEventListener('DOMContentLoaded', function() {
        const pathname = window.location.pathname

        if(pathname === "/"){ 
            AnimalstoDisplayHome();
        }else if(pathname === "/gallery"){
            AnimalstoDisplay();
        }
    });

    function AnimalstoDisplay(animals_gonna_show = animals) {

        const galleryContainer = document.querySelector('.all-gallary-container');

        animals_gonna_show.forEach(animal => {
            const eachAnimal = document.createElement("div")
            eachAnimal.className = `gallery-item mb-4 col-md-6 col-xl-3 col-lg-4 col-12 ${animal.speciesTag}`
            eachAnimal.innerHTML = `
                    <div class="captured-gallery-item">
                        <div class="gallery-content">
                            <span href="${animal.imgSrc}" title="Sophie Cute"><i class="icofont-plus"></i></span>
                            <h3>${animal.name}</h3>
                            <h5>${animal.species} </h5>
                        </div>
                        <img src="${animal.imgSrc}" class="rounded" alt="">                                          
                    </div>
            `;
        galleryContainer.appendChild(eachAnimal)
        })
        
    }

    function AnimalstoDisplayHome(animals_gonna_show = homePageAnimals) {

        const homeGalleryContainer = document.querySelector('.homePageGallery');

        const animals = document.createElement("div")
        animals.innerHTML = `
        <div class="row">
        <div class="col-md-4 gallery-item mb-0">
            <div class="captured-gallery-item mb-4">                            
                <div class="gallery-content">
                    <span href="${animals_gonna_show[0].imgSrc}" title="${animals_gonna_show[0].name}"><i class="icofont-plus"></i></span>
                    <h3>${animals_gonna_show[0].name}</h3>
                    <h5>${animals_gonna_show[0].species}</h5>
                </div>
                <img src="${animals_gonna_show[0].imgSrc}">
            </div>
            <div class="captured-gallery-item mb-4">                            
                <div class="gallery-content">
                    <span href="${animals_gonna_show[1].imgSrc}" title="${animals_gonna_show[1].name}"><i class="icofont-plus"></i></span>
                    <h3>${animals_gonna_show[1].name}</h3>
                    <h5>${animals_gonna_show[1].species}</h5>
                </div>
                <img src="${animals_gonna_show[1].imgSrc}" class="rounded" alt="">
            </div>
        </div>

        <div class="col-md-4 gallery-item mb-0">
            <div class="captured-gallery-item mb-4">                            
                <div class="gallery-content">
                    <span href="${animals_gonna_show[2].imgSrc}" title="${animals_gonna_show[2].name}""><i class="icofont-plus"></i></span>
                    <h3>${animals_gonna_show[2].name}</h3>
                    <h5>${animals_gonna_show[2].species}</h5>
                </div>
                <img src="${animals_gonna_show[2].imgSrc}" class="rounded" alt="">
            </div>
            <div class="captured-gallery-item mb-4">                            
                <div class="gallery-content">
                    <span href="${animals_gonna_show[3].imgSrc}" title="${animals_gonna_show[3].name}"><i class="icofont-plus"></i></span>
                    <h3>${animals_gonna_show[3].name}</h3>
                    <h5>${animals_gonna_show[3].species}</h5>
                </div>
                <img src="${animals_gonna_show[3].imgSrc}" class="rounded" alt="">
            </div>
        </div>

        <div class="col-md-4 gallery-item mb-0">
            <div class="captured-gallery-item mb-4">                            
                <div class="gallery-content">
                    <span href="${animals_gonna_show[4].imgSrc}" title="${animals_gonna_show[4].name}"><i class="icofont-plus"></i></span>
                    <h3>${animals_gonna_show[4].name}</h3>
                    <h5>${animals_gonna_show[4].species}</h5>
                </div>
                <img src="${animals_gonna_show[4].imgSrc}" class="rounded" alt="">
            </div>
            <div class="captured-gallery-item mb-4">                            
                <div class="gallery-content">
                    <span href="${animals_gonna_show[5].imgSrc}" title="${animals_gonna_show[5].name}"><i class="icofont-plus"></i></span>
                    <h3>${animals_gonna_show[5].name}</h3>
                    <h5>${animals_gonna_show[5].species}</h5>
                </div>
                <img src="${animals_gonna_show[5].imgSrc}" class="rounded" alt="">
            </div>
        </div>
        </div>
        `;
        homeGalleryContainer.appendChild(animals)
        
    }