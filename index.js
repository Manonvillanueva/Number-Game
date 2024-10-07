const btns = document.querySelectorAll(".btn");
const validBtn = document.querySelector(".validBtn");

// Génère un nombre aléatoire entre 0 et 100
const randomNumb = Math.floor(Math.random() * 100);

// Initialise un tableau vide qui va stocker les différentes tentatives
let attempts = [];

console.log(randomNumb);

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

  // Comparaison entre la saisie de l'utilisateur avec le nombre aléatoire généré
  if (userValue == randomNumb) {
    resultMessage = `Tentative ${
      attempts.length + 1
    } : ${userValue} - Correct `;
  } else if (userValue > randomNumb) {
    resultMessage = `Tentative ${
      attempts.length + 1
    } : ${userValue} - Il faut voir un peu plus petit ! `;
  } else {
    resultMessage = `Tentative ${
      attempts.length + 1
    } : ${userValue} - C'est un peu léger !`;
  }
  // Ajoute le message correspondant à cette tentative dans le tableau "attempts"
  attempts.push(resultMessage);

  // Fonction qui met à jour l'affichage des tentatives
  displayAttempts();

  // Vide le contenu l'input avant d'ajouter de nouvelles tentatives
  displayNumber.value = "";
});

// Mis à jour de l'affichage des tentatives
function displayAttempts() {
  resultGame.innerHTML = "";
  attempts.forEach((attempt) => {
    const p = document.createElement("p");
    p.textContent = attempt;
    resultGame.appendChild(p);
  });
}
