let score = 0;
const ball = document.getElementById("ball");
const scoreDisplay = document.getElementById("score");

function moveBall() {
  const gameContainer = document.getElementById("game-container");
  const containerWidth = gameContainer.offsetWidth;
  const containerHeight = gameContainer.offsetHeight;

  const maxX = containerWidth - ball.offsetWidth;
  const maxY = containerHeight - ball.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  ball.style.left = randomX + "px";
  ball.style.top = randomY + "px";
}

ball.addEventListener("click", function() {
  score += 10;
  scoreDisplay.textContent = "スコア: " + score;
  moveBall();
});

moveBall();  // ゲーム開始時にボールをランダムに配置

