let score = 0;

function updateScore() {
    document.getElementById("score").innerText = score;
}

function addPoints(points) {
    score += points;
    updateScore();
}

function subtractPoints(points) {
    score -= points;
    updateScore();
}