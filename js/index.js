// let image = document.querySelector("#hangman");
// console.log(image);
// let ground = document.querySelector("#ground");
// console.log(ground);
const ROUNDS = 6;

const allWords = [
  "banan",
  "bil",
  "kanin",
  "katt",
  "kamm",
  "äpple",
  "cykel",
  "pump",
];

const guesses = new Set();
let currentWord = undefined;

const gameplayTag = document.querySelector(".gameplay-container");

const deleteAllChildren = () => {
  gameplayTag.innerHTML = "";
};

const setCurrentAWord = () => {
  const idx = Math.floor(Math.random() * allWords.length);
  currentWord = allWords[idx];
};

const createChildren = () => {
  const toAddTagStr = /*html*/ `
  <div>
    input.<div class="mb-3">
      <label for="" class="form-label"></label>
      <textarea class="form-control" name="" id="" rows="3"></textarea>
    </div>    
  </div>
  `;

  for (let i = 0; i < currentWord.length; i++) {
    gameplayTag.insertAdjacentHTML("beforeend", toAddTagStr);
  }
};

const runGame = () => {
  for (let i = 0; i < ROUNDS; i++) {
    console.log("Round" + i);
  }
};

const startGameFunc = () => {
  console.log("handleClickFunc");

  deleteAllChildren();
  setCurrentAWord();
  createChildren();
  guesses.clear();
  runGame();
};

const button = document.querySelector(".button");
button.addEventListener("click", startGameFunc);
