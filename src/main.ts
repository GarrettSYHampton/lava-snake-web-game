// src/main.ts
// Stub functions for start and restart
function startGame() {
  console.log('Start game clicked');
  // Hide title overlay and show canvas focus state
  document.getElementById('startBtn').style.display = 'none';
  document.getElementById('gameCanvas').style.display = 'block';
}

function restartGame() {
  console.log('Restart game clicked');
  // Hide game over overlay and reset state
  document.getElementById('gameOverOverlay').classList.add('hidden');
  document.getElementById('score').textContent = '0';
  document.getElementById('finalScore').textContent = '0';
}

// Wire buttons to functions
document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('restartBtn').addEventListener('click', restartGame);