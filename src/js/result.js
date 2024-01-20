// result.js
document.addEventListener("DOMContentLoaded", function () {
  // Obtém a pontuação final da URL (parâmetro score)
  const urlParams = new URLSearchParams(window.location.search);
  const finalScore = urlParams.get("score") || 0;

  // Exibe a pontuação final na página
  document.getElementById("scoreValue").innerText = finalScore;
});

// result.js
function goHome() {
  window.location.href = 'index.html';
}
