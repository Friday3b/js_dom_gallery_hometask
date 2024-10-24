const images = [
    'https://images.unsplash.com/photo-1670321962441-29f4348f1fbc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lkZSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://static.vecteezy.com/system/resources/previews/048/608/132/large_2x/mid-size-crossover-driving-through-peaceful-countryside-with-nature-background-free-photo.jpg',
    'https://www.landspacedesign.com/wp-content/uploads/2015/04/Hampstead_Back011-1030x684.jpg',
    'https://i.pinimg.com/736x/7b/d0/bf/7bd0bf4beb90189543c343fc0f9a4b37.jpg',
    'https://i.etsystatic.com/28236001/r/il/64075b/3412427435/il_570xN.3412427435_oudd.jpg'
];

let currentIndex = 0;  
const container = document.getElementById("container");

//creating main gallery div
const galleryDiv = document.createElement("div");
galleryDiv.id = "gallery";

// for showing main gallery create image
const mainImage = document.createElement("img");
mainImage.classList.add("main-image");
mainImage.src = images[currentIndex];  // Başlangıçta ilk resmi göster
galleryDiv.appendChild(mainImage);

// create prev and next image arrow
const prevArrow = document.createElement("span");
prevArrow.classList.add("arrow");
prevArrow.innerHTML = "&#10094;";  // Sol ok
galleryDiv.insertBefore(prevArrow, mainImage);

const nextArrow = document.createElement("span");
nextArrow.classList.add("arrow");
nextArrow.innerHTML = "&#10095;";  // Sağ ok
galleryDiv.appendChild(nextArrow);

// thumbnail small picture creating
const thumbnailsDiv = document.createElement("div");
thumbnailsDiv.classList.add("thumbnails");

// create thumbnail image with loop
images.forEach((imageSrc, index) => {
    const thumbnail = document.createElement("img");
    thumbnail.classList.add("thumbnail");
    thumbnail.src = imageSrc;
    thumbnail.dataset.index = index;

    // change big image - update thumbnail
    thumbnail.addEventListener('click', () => {
        showImage(index);
    });

    thumbnailsDiv.appendChild(thumbnail);
});

// update main image
function showImage(index) {
    mainImage.src = images[index];
    currentIndex = index;
}

// previouse picture
prevArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

// next picture
nextArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// doma elave edirik hamsini
galleryDiv.appendChild(thumbnailsDiv);
container.appendChild(galleryDiv);