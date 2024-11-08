// GESTIONE TEMA CHIARO/SCURO CON COOKIE DEL BROWSER


let body = document.querySelector('body');

// dentro document.cookie vengono salvate le informazioni in formato testuale: elenco di tutti i cookie presenti nella pagina

// nomeChiave=valoreChiave, time=(espiration time); nome=valore...
function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function (el) {
        let [key, value] = el.split('=');
        cookie[key.trim()] = value;
    })
    return cookie[cookieName];
}

// funzione poi chiamata dall'icona con "onclick"
function change() {
    // controlla il "mode" e inverte le due proprietà
    // aggiorna l'info nel cookie
    if (getCookie("mode") == "light") {
        body.className = "darkMode";
        document.cookie = "mode=dark";
    } else {
        body.className = "lightMode";
        document.cookie = "mode=light";
    }
}

// nome=valore; 
// vogliamo cercare --> cookie "mode=light" / "dark"

// CERCHIAMO
// quando la pagina viene caricata, verifica se esiste già un cookie "mode"
// se non esiste, imposta il tema predefinito a "light"
if (document.cookie.search("mode") == -1) {
    document.cookie = "mode=light";
}

// a seconda della mdoalità scritta nel cookie si applica la relativa proprietà light oppure dark
if (getCookie("mode") == "light") {
    body.className = "lightMode";
} else {
    body.className = "darkMode";
}
