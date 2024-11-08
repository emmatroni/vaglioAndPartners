//  variabile che tiene traccia dell'indice della slide attualmente attiva, iniziando dalla prima (indice 0)
let activeCardSlide = 0;
let cardSlides = document.getElementsByClassName("cards-slide");
let punti = document.getElementsByClassName("punto");

// funzione di transizione
function setCardSlide(next) {
    cardSlides[activeCardSlide].style.display = "none";
    punti[activeCardSlide].style.backgroundColor = "gray";

    cardSlides[next].style.display = "flex";
    punti[next].style.backgroundColor = "#269556";
    
    // aggiorno la variabile activeCardSlide con il nuovo indice della slide attiva:
    activeCardSlide = next;
}

// funzione di incremento (positivo o negativo)
function nextCardSlide(incremento) {
    let next = activeCardSlide + incremento;
    if (next >= cardSlides.length) {
        next = 0;
    }
    if (next < 0) {
        next = cardSlides.length - 1;
    }

    // console.log(next);
    setCardSlide(next);
}

setCardSlide(0);

