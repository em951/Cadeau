document.addEventListener("DOMContentLoaded", function() {
    const bienvenue = document.getElementById("welcome");
    const clic = document.getElementById("clic");

    // Pour récupérer le contenu de welcome 
    const bienvenueTexte = bienvenue.innerHTML.trim(); 

    // Pour récupérer le contenu de clic 
    const clicTexte = clic.innerHTML.trim(); 

    bienvenue.innerHTML = ""; // On efface le contenu initial
    clic.innerHTML = "";

    let indexBienvenue = 0;
    let indexClic = 0;
    const interval = 50; // Temps entre chaque caractère (en millisecondes)

    function typeWelcomeText() {
        if (indexBienvenue < bienvenueTexte.length) {
            bienvenue.innerHTML += bienvenueTexte[indexBienvenue];
            if (bienvenueTexte[indexBienvenue] === '\n') {
                bienvenue.innerHTML += "<br>";  
            }
            indexBienvenue++;
            setTimeout(typeWelcomeText, interval);
        } else {
            bienvenue.style.display = "none"; // Cache l'élément "welcome"
            clic.style.display = "block"; // Affiche l'élément "clic"
            typeClicText(); // Commence à afficher le texte dans l'élément "clic"
        }
    }

    function typeClicText() {
        if (indexClic < clicTexte.length) {
            clic.innerHTML += clicTexte[indexClic];
            if (clicTexte[indexClic] === '\n') {
                clic.innerHTML += "<br>";  
            }
            indexClic++;
            setTimeout(typeClicText, interval);
        }
    }
    

    typeWelcomeText(); // Démarre l'animation de bienvenue
});
