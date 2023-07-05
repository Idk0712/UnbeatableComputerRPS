const log = console.log;
const doc = document;
const body = doc.body;
const head = doc.head;
let hue = 0;
doc.addEventListener("keydown", e => {
    if(e.key == "F12") e.preventDefault();
});
const div = doc.querySelector("div");
const robotsWins = doc.querySelector("#robotsWins");
const playersWins = doc.querySelector("#playersWins");
robotsWins.textContent = "🤖's wins: 0"
playersWins.textContent = "Player's wins: 0";
let pChoice;
let computerChoice;
const playersWin = 0;
let computersWins = 0;
function rockBtnClick() {
    pChoice = "rock";
    computerChoice = "paper";
    if(pChoice === "rock" && computerChoice === "paper") {
        computersWins+=1;
        robotsWins.textContent = `🤖's wins: ${computersWins}`;
        div.textContent = `You used ${pChoice}, the computer used ${computerChoice}.\nThe computer won!`;
    }
};
function paperBtnClick() {
    pChoice = "paper";
    computerChoice = "scissors";
    computersWins+=1;
    robotsWins.textContent = `🤖's wins: ${computersWins}`;
    if(pChoice === "paper" && computerChoice === "scissors") {
        div.textContent = `You used ${pChoice}, the computer used ${computerChoice}.\nThe computer won!`;
    }
};
function scissorsBtnClick() {
    pChoice = "scissors";
    computerChoice = "rock";
    computersWins+=1;
    robotsWins.textContent = `🤖's wins: ${computersWins}`;
    if(pChoice === "scissors" && computerChoice === "rock") {
        div.textContent = `You used ${pChoice}, the computer used ${computerChoice}.\nThe computer won!`;
    }
};
function changeHue() {
    hue+=Math.random() * 3;
};
setInterval(changeHue, 10);
setInterval(() => {
    div.style.color = `hsl(${hue}, 100%, 50%)`;
}, 10);
