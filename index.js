const btns = document.querySelectorAll(".btn");
const validBtn = document.querySelector(".validBtn");

// Initialise un tableau vide qui va stocker les différentes tentatives
let attempts = [];

// Stocker dans la variable randomNumb le nombre généré
let randomNumb = generateNumber();

// ----------------------
// ---------EVENTS---------------------------
// ----------------------

// Lorsque qu'un btn (chiffre) est selectionné, son ID (son ID correspond au chiffre affiché dans chaque btn) est récupéré et l'ajoute au champ d'affichage, on utilise += pour concaténer ces chiffres
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    displayNumber.value += e.target.id;
  });
});

// Effacer le contenu de l'input
returnBtn.addEventListener("click", () => {
  displayNumber.value = "";
});

validBtn.addEventListener("click", () => {
  // Récupérer la valeur de l'utilisateur en recupérant la valeur de l'input displayNumber
  const userValue = displayNumber.value;

  // Stocker le message correspondant à chaque tentative
  let resultMessage;

  // Lorsque le bon  nombre a étét trouvé par l'utilisateur
  if (validBtn.textContent === ">> Rejouer une partie <<") {
    // Réactivation des btns number
    btns.forEach((btn) => {
      btn.disabled = false;
    });
    // Effacer le contenu de l'input
    displayNumber.value = "";
    attempts = [];
    // Effacer les résultats des différentes tentatives
    resultGame.innerHTML = "";
    // Réinitialise le texte du bouton de validation
    validBtn.textContent = "Valider";
    // Générer un nouveau nombre
    randomNumb = generateNumber();
    return;
  }

  // Comparaison entre la saisie de l'utilisateur avec le nombre aléatoire généré
  if (userValue == randomNumb) {
    resultMessage = `Tentative ${
      attempts.length + 1
    } : ${userValue} - Correct `;
    validBtn.textContent = ">> Rejouer une partie <<";
    // Désactiver les btns number lorsque l'utilisateur a trouvé
    btns.forEach((btn) => {
      btn.disabled = true;
    });
  } else if (userValue > randomNumb) {
    resultMessage = `Tentative ${
      attempts.length + 1
    } : ${userValue} - Il faut voir un peu plus petit ! `;
  } else {
    resultMessage = `Tentative ${
      attempts.length + 1
    } : ${userValue} - C'est un peu léger !`;
  }
  // Ajoute le message correspondant à la tentative dans le tableau "attempts"
  attempts.push(resultMessage);

  // Fonction qui met à jour l'affichage des tentatives
  displayAttempts();

  // Vide le contenu de l'input avant d'ajouter de nouvelles tentatives
  displayNumber.value = "";
});

// ----------------------
// ---------FUNCTIONS---------------------------
// ----------------------

// Générer un nombre aléatoire entre 0 et 100
function generateNumber() {
  return Math.floor(Math.random() * 100);
}

// Mis à jour de l'affichage des tentatives
function displayAttempts() {
  resultGame.innerHTML = "";
  attempts.forEach((attempt) => {
    const p = document.createElement("p");
    p.textContent = attempt;
    resultGame.appendChild(p);
  });
}
