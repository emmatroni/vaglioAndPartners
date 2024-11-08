let form = document.getElementById('form');
// form-result su html è un div vuoto
let formResult = document.getElementById('form-result');


form.addEventListener('submit', (e) => {
    // e. == l'oggetto evento che viene passato alla funzione
    // preventDefault() evita che la pagina si ricarichi quando form viene inviato (evento)
    e.preventDefault(); 

    form.style.visibility = "hidden";
    
    // innerText --> scrive all'interno di un oggetto html (formResult)
    formResult.innerText = "Messaggio inviato!";
    console.log('Messaggio inviato con successo.');
    // window.alert('messaggio inviato');
})


