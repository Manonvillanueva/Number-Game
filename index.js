const btns = document.querySelectorAll(".btn");
const validBtn = document.querySelector(".validBtn");
const randomNumb = Math.floor(Math.random() * 100);
let attempts = [];
console.log(randomNumb);

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    displayNumber.value += e.target.id;
  });
});

validBtn.addEventListener("click", () => {
  console.log(attempts);

  const userValue = displayNumber.value;
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
  attempts.push(resultMessage);
  displayAttempts();
  displayNumber.value = "";
});

function displayAttempts() {
  resultGame.innerHTML = "";
  attempts.forEach((attempt) => {
    const p = document.createElement("p");
    p.textContent = attempt;
    resultGame.appendChild(p);
  });
}
