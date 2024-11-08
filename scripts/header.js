// il codice controlla se la quantità di scroll verticale (window.scrollY) è maggiore dell'altezza dello slide show meno l'altezza dell'header per applicare i cambiamenti di stile all'header.

// se fosse solo maggiore rispetto all'altezza dello slideshow quando l'header non è al 100% al di sotto dello slideshoe, le scritte bianche dell'header non si vedrebbero nel lightmode


// Trova l'elemento con classe .slide-show
let slideShow = document.querySelector(".slide-show");
// getBoundingClientRect() --> calcola il rettangolo che occupa l'elemento con unità px
let SLIDE_SHOW_HEIGHT = slideShow.getBoundingClientRect().height;

// trova l'elemento header
let header = document.querySelector("header");

// se la pagina è scrollata oltre SLIDE_SHOW_HEIGHT meno l'altezza del header
window.addEventListener("scroll", () => {
  // Ottiene la posizione e i px occupati dall'header
  let headerHeight = header.getBoundingClientRect().height;
  // lo inserito all'interno della funzione in caso cambiasse l'h header durante lo scorrimento della pagina

  if (window.scrollY > SLIDE_SHOW_HEIGHT - headerHeight) {
    header.style.color = "white";
    header.style.background = "#0c1226";
  } else {
    header.style.background = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))";
  }
}, false);


// vorrei che però l'header si adattasse anche alla darkmode - lightmode
