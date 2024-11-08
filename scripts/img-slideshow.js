// SLIDESHOW automatico: 
let imgSlides = document.getElementsByClassName("slide");

let activeImgSlide = 0;

// slideshow che modifica la opacità delle slide per mostrarle
function setImgSlide(active) {
    for (let i = 0; i < imgSlides.length; i++) {
        // nasconde tutte le slide:
        imgSlides[i].style.opacity = "0";
    }
    // rende visibile la slide con indice "attivo"
    imgSlides[active].style.opacity = "0.2";
    // console.log("slide attiva:", active);
}

// imposto slide attiva la slide di indice 0
setImgSlide(activeImgSlide);

function nextImgSlide() {
    // % prende il modulo (calcola resto divisinoe es n-slide=3
    // (0+1)/3 = 0, %1 | (1+1)/3 = 0, %2 | (2+1)/3 = 1, %0 |
    // per rimanere all'interno del numero di slides
    activeImgSlide = (activeImgSlide + 1) % imgSlides.length;
    setImgSlide(activeImgSlide);
}

// per chiamare la funzione nextImgSlide ogni 3s
setInterval(nextImgSlide, 3000);
// https://developer.mozilla.org/docs/Web/API/setInterval








