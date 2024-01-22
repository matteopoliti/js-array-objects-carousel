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
        <img src="./assets/img/${animeArray[i].urlImmagine}" class="border border-black border-2 p-0 col-2 d-block opacity">
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
        <img src="./assets/img/${animeArray[i].urlImmagine}" class="border border-black border-2 p-0 col-2 d-block">
    `
    }  
    
    
    
};

let immagineCorrente = 0
let immagineCorrenteThumbnail = 0
let captionCorrente = 0


arrowLeft.addEventListener( "click", function(){

    let bigImage = document.querySelectorAll( 'main > div:first-child img' )
    console.log( bigImage )
        
    bigImage[immagineCorrente].classList.remove( 'active' )

    if( immagineCorrente == 0 ){
        immagineCorrente = bigImage.length - 1
    } else {
        immagineCorrente--
    }

    bigImage[immagineCorrente].classList.add( 'active' )



    let caption = document.querySelectorAll( 'main > div:first-child div' )
    console.log( caption )
        
    caption[captionCorrente].classList.remove( 'active' )

    if( captionCorrente == 0 ){
        captionCorrente = caption.length - 1
    } else {
        captionCorrente--
    }

    caption[captionCorrente].classList.add( 'active' )




    
    let thumbnail = document.querySelectorAll( 'figure img' )
    console.log( thumbnail )
        
    thumbnail[immagineCorrenteThumbnail].classList.remove( 'opacity' )

    if( immagineCorrenteThumbnail == 0 ){
        immagineCorrenteThumbnail = thumbnail.length - 1
    } else {
        immagineCorrenteThumbnail--
    }

    thumbnail[immagineCorrenteThumbnail].classList.add( 'opacity' )
    
    

} )

arrowRight.addEventListener( "click", function(){

    let bigImage = document.querySelectorAll( 'main > div:first-child img' )
    console.log( bigImage )
        
    bigImage[immagineCorrente].classList.remove( 'active' )

    if(immagineCorrente == bigImage.length - 1 ){
        
        immagineCorrente = 0 
    } else {
        immagineCorrente++
    }

    bigImage[immagineCorrente].classList.add( 'active' )



    let caption = document.querySelectorAll( 'main > div:first-child div' )
    console.log( caption )
        
    caption[captionCorrente].classList.remove( 'active' )

    if( captionCorrente == caption.length - 1 ){
        captionCorrente = 0
    } else {
        captionCorrente++
    }

    caption[captionCorrente].classList.add( 'active' )


    
    let thumbnail = document.querySelectorAll( 'figure img' )
    console.log( thumbnail )
        
    thumbnail[immagineCorrenteThumbnail].classList.remove( 'opacity' )

    if( immagineCorrenteThumbnail == thumbnail.length - 1 ){
        immagineCorrenteThumbnail = 0
    } else {
        immagineCorrenteThumbnail++
    }

    thumbnail[immagineCorrenteThumbnail].classList.add( 'opacity' )
    
    

} )