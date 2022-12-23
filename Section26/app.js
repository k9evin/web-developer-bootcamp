const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');
const p1Disyplay = document.querySelector('#p1Display');
const p2Disyplay = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Disyplay.classList.add('has-text-success');
            p2Disyplay.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
            isGameOver = true;
        }
        p1Disyplay.textContent = p1Score;
    }
});

p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Disyplay.classList.add('has-text-success');
            p1Disyplay.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Disyplay.textContent = p2Score;
    }
});

const resetGame = () => {
    isGameOver = false;
    p1Score = 0;
    p1Disyplay.textContent = 0;
    p2Score = 0;
    p2Disyplay.textContent = 0;

    p1Disyplay.classList.remove('has-text-success', 'has-text-danger');
    p2Disyplay.classList.remove('has-text-success', 'has-text-danger');

    p1Button.disabled = false;
    p2Button.disabled = false;
};

reset.addEventListener('click', resetGame);

winningScoreSelect.addEventListener('change', () => {
    winningScore = parseInt(winningScoreSelect.value);
    resetGame();
});
