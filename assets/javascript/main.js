const animeArray = [
    {
      urlImmagine: "one-piece.webp",
      titolo: "One Piece",
      descrizione: "La storia di Monkey D. Luffy e della sua ciurma che cercano il leggendario tesoro One Piece."
    },
    {
      urlImmagine: "aot-fury-titan-desktop-wallpaper-preview.jpg",
      titolo: "Attack on Titan",
      descrizione: "Un mondo in cui l'umanità lotta per sopravvivere contro enormi creature chiamate Titani."
    },
    {
        urlImmagine: "JJK-header-mobile2.webp",
        titolo: "Jujutsu Kaisen",
        descrizione: "Yuuji Itadori entra a far parte di una scuola di magia oscura per combattere i maledetti e proteggere il mondo."
    },
    {
      urlImmagine: "demon-slayer-4k-pictures-5v5lz47uso2tx2kr.jpg",
      titolo: "Demon Slayer",
      descrizione: "Tanjiro Kamado cerca vendetta contro i demoni che hanno ucciso la sua famiglia e trasformato sua sorella in un demone."
    },
    {
        urlImmagine: "spider-man-across-6016x3384-11595.jpg",
        titolo: "Spider-Man: Across the Spider-Verse",
        descrizione: "Il seguito di Spider-Man: Into the Spider-Verse, in cui Miles Morales esplora nuovi universi paralleli."
    },
];
  
const arrowLeft = document.querySelector('.fa-circle-chevron-left');

const arrowRight = document.querySelector('.fa-circle-chevron-right');

const risultatoHtml = document.getElementById("risultato");

const figureHtml = document.querySelector("figure");

for( let i = 0; i < animeArray.length; i++ ){
    if( i === 0 ){
        risultatoHtml.innerHTML += `
            <img src="./assets/img/${animeArray[i].urlImmagine}" class="active border border-black border-2 ">
            <div class="carousel_caption rounded active">
                <h5>${animeArray[i].titolo}</h5>
                <p>${animeArray[i].descrizione}</p>
            </div>
        `
        figureHtml.innerHTML += ` 
        <img src="./assets/img/${animeArray[i].urlImmagine}" class="border border-black border-2 p-0 col-2 d-block opacity" id = "thumbnail${i}" >
    `
    } else {
        risultatoHtml.innerHTML += `
            <img src="./assets/img/${animeArray[i].urlImmagine}" class="img-fluid  border border-black border-2 ">
            <div class="carousel_caption rounded">
                <h5>${animeArray[i].titolo}</h5>
                <p>${animeArray[i].descrizione}</p>
            </div>
        `
        figureHtml.innerHTML += ` 
        <img src="./assets/img/${animeArray[i].urlImmagine}" class="border border-black border-2 p-0 col-2 d-block" id = "thumbnail${i}" >
    `
    }  
    
    
    
};

let immagineCorrente = 0
let immagineCorrenteThumbnail = 0
let captionCorrente = 0

let autoplayTimer;
let autoplayDirection = 1;

startAutoplay();

arrowLeft.addEventListener( "click", function(){

    stopAutoplay();

    if( immagineCorrente == 0 ){
        immagineCorrente = animeArray.length - 1
    } else {
        immagineCorrente--
    }

   
    if( captionCorrente == 0 ){
        captionCorrente = animeArray.length - 1
    } else {
        captionCorrente--
    }


    if( immagineCorrenteThumbnail == 0 ){
        immagineCorrenteThumbnail = animeArray.length - 1
    } else {
        immagineCorrenteThumbnail--
    }

    
    updateCarousel();
    startAutoplay()

} )

arrowRight.addEventListener( "click", function(){

    stopAutoplay();
    if(immagineCorrente == animeArray.length - 1 ){
        
        immagineCorrente = 0 
    } else {
        immagineCorrente++
    }


    if( captionCorrente == animeArray.length - 1 ){
        captionCorrente = 0
    } else {
        captionCorrente++
    }


    if( immagineCorrenteThumbnail == animeArray.length - 1 ){
        immagineCorrenteThumbnail = 0
    } else {
        immagineCorrenteThumbnail++
    }

   
    updateCarousel()
    startAutoplay()

} )

const thumbnails = document.querySelectorAll('figure img');

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function() {
        immagineCorrente = index;
        immagineCorrenteThumbnail = index;
        captionCorrente = index;
        updateCarousel();
        startAutoplay()
    });
});



function updateCarousel() {
    const bigImages = document.querySelectorAll('main > div:first-child img');
    const captions = document.querySelectorAll('main > div:first-child div');
    const thumbnails = document.querySelectorAll('figure img');
  
    bigImages.forEach((img) => img.classList.remove('active'));
    captions.forEach((caption) => caption.classList.remove('active'));
    thumbnails.forEach((thumb) => thumb.classList.remove('opacity'));
  
    bigImages[immagineCorrente].classList.add('active');
    captions[immagineCorrenteThumbnail].classList.add('active');
    thumbnails[captionCorrente].classList.add('opacity');
}

const playButton = document.getElementById("playButton");
const stopButton = document.getElementById("stopButton");
const reverseButton = document.getElementById("reverseButton");

playButton.addEventListener("click", startAutoplay);
stopButton.addEventListener("click", stopAutoplay);
reverseButton.addEventListener("click", toggleAutoplayDirection);

function toggleAutoplayDirection() {
    autoplayDirection *= -1;
}

function startAutoplay() {
    autoplayTimer = setInterval(function() {
        if (immagineCorrente == animeArray.length - 1 && autoplayDirection === 1) {
            immagineCorrente = 0;
        } else if (immagineCorrente === 0 && autoplayDirection === -1) {
            immagineCorrente = animeArray.length - 1;
        } else {
            immagineCorrente += autoplayDirection;
        }
        immagineCorrenteThumbnail = immagineCorrente;
        captionCorrente = immagineCorrente;
        updateCarousel();
    }, 3000);
}

function stopAutoplay() {
    clearInterval(autoplayTimer);
}
  