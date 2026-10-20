const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");
const customWordInputDiv = document.querySelector(".custom-word-input");
const customWordInput = document.getElementById("custom-word");
const customHintInput = document.getElementById("custom-hint");
const startCustomGameBtn = document.getElementById("start-custom-game");

const gameMode = localStorage.getItem("gameMode");
const isCustomGame = gameMode === "custom";

let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

// 👉 Setup ban đầu dựa theo chế độ chơi
window.addEventListener("DOMContentLoaded", () => {
  if (isCustomGame) {
    customWordInputDiv.style.display = "flex";
  } else {
    getRandomWord();
  }
});

// 👉 Xử lý nút Chơi lại → quay về menu.html
playAgainBtn.addEventListener("click", () => {
  gameModal.classList.remove("show");
  localStorage.removeItem("gameMode");
  window.location.href = "menu.html";
});

// 👉 Reset lại trò chơi
const resetGame = () => {
  correctLetters = [];
  wrongGuessCount = 0;
  hangmanImage.src = "images/hangman-0.svg";
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
  wordDisplay.innerHTML = currentWord
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
  keyboardDiv.querySelectorAll("button").forEach((btn) => (btn.disabled = false));
  gameModal.classList.remove("show");
};

// 👉 Chọn từ random
const getRandomWord = () => {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word;
  document.querySelector(".hint-text b").innerText = hint;
  resetGame();
};

// 👉 Kết thúc trò chơi
const gameOver = (isVictory) => {
  const modalText = isVictory ? `You found the word:` : "The correct word was:";
  gameModal.querySelector("img").src = `images/${isVictory ? "victory" : "lost"}.gif`;
  gameModal.querySelector("h4").innerText = isVictory ? "Congrats!" : "Game Over!";
  gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
  gameModal.classList.add("show");
};

// 👉 Xử lý click chữ cái
const initGame = (button, clickedLetter) => {
  if (currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        correctLetters.push(letter);
        const li = wordDisplay.querySelectorAll("li")[index];
        li.innerText = letter;
        li.classList.add("guessed");
      }
    });
  } else {
    wrongGuessCount++;
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
  }

  button.disabled = true;
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

  if (wrongGuessCount === maxGuesses) return gameOver(false);
  if (correctLetters.length === currentWord.length) return gameOver(true);
};

// 👉 Tạo bàn phím chữ cái
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
  button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

// 👉 Nếu là chế độ nhập tay
startCustomGameBtn.addEventListener("click", () => {
  const word = customWordInput.value.trim().toLowerCase();
  const hint = customHintInput.value.trim();

  if (!word || !/^[a-zA-Z]+$/.test(word)) {
    alert("Vui lòng nhập từ chỉ gồm chữ cái a-z.");
    return;
  }

  currentWord = word;
  document.querySelector(".hint-text b").innerText = hint || "Không có gợi ý";
  customWordInputDiv.style.display = "none";
  resetGame();
});
