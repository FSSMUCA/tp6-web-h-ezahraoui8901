document.addEventListener("DOMContentLoaded", () => {
  console.log("JS chargé et DOM prêt");

  const form = document.getElementById("calculatriceForm");
  const erreur = document.getElementById("erreur");
  const historique = document.getElementById("listeHistorique");

  if (!form || !erreur || !historique) {
    console.error("IDs introuvables: vérifie calculatriceForm, erreur, listeHistorique");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    erreur.textContent = "";
    const a = parseFloat(document.getElementById("nombreA").value);
    const b = parseFloat(document.getElementById("nombreB").value);
    const op = document.getElementById("operation").value;
    if (isNaN(a) || isNaN(b)) {
      erreur.textContent = " Veuillez remplir tous les champs.";
      return;
    }

    if (op === "/" && b === 0) {
      erreur.textContent = " Division par zéro interdite.";
      return;
    }
    let resultat;
    switch(op) {
      case "+": 
        resultat = a + b; 
        break;
      case "-": 
        resultat = a - b; 
        break;
      case "*": 
        resultat = a * b; 
        break;
      case "/": 
        resultat = a / b; 
        break;
    }
    const symbole = op === "*" ? "×" : op === "/" ? "÷" : op === "-" ? "−" : op;
    const operationText = `${a} ${symbole} ${b}`;
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="operation-text">${operationText}</span>
      <span class="result-text">= ${resultat.toFixed(2)}</span>
    `;
    historique.insertBefore(li, historique.firstChild);
    form.reset();
  });
});