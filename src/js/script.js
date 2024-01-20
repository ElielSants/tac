let points = 0;
let clicks = 0;
let timer;
let gameInProgress = false;

function startGame() {
  if (gameInProgress) {
    resetGame();
    document.getElementById('startBtn').textContent = 'Iniciar';
  } else {
    updatePoints();
    startTimer(5); // Alterado para 15 segundos para fins de teste
    gameInProgress = true;
    document.getElementById('startBtn').textContent = 'Reiniciar';

  }
}

function addPoint() {
  if (gameInProgress) {
    points++;
    updatePoints();
  }
}

function storeClick() {
  if (gameInProgress) {
    clicks++;
  }
}

function updatePoints() {
  document.getElementById('points').innerText = `${points}`;
}

function startTimer(duration) {
  let timerDisplay = document.getElementById('countdown');

  timer = setInterval(function () {
    if (duration < 0) {
      clearInterval(timer);
      showResult();
    } else {
      timerDisplay.textContent = duration;
      duration--;
    }
  }, 1000);
}

function showResult() {
  let result = points * clicks;
  // Redireciona para a página de resultado com a pontuação final
  window.location.href = `result.html?score=${result}`;
  gameInProgress = false; // Define que o jogo não está mais em andamento
}

function resetTimer() {
  clearInterval(timer);
  
  document.getElementById('countdown').textContent = '15';
  gameInProgress = false;
  document.getElementById('resetBtn').style.display = 'none';
  document.getElementById('startBtn').style.display = 'block';
}

function resetGame() {
  clearInterval(timer);
  document.getElementById('countdown').textContent = '5';
  document.getElementById('points').textContent = '0';
  gameInProgress = false;
  points = 0;
  clicks = 1;
}
