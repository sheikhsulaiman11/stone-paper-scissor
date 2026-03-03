// let rock = document.querySelector("#rock");
// let paper = document.querySelector("#paper");
// let scissor = document.querySelector("#scissor");

// let myscore = document.querySelector("#my-score");
// let compscore = document.querySelector("#comp-score");
// let message = document.querySelector("#msg");


let userscore = 0;
let computerscore = 0;

let msg = document.querySelector("#msg");
let myscore = document.querySelector("#my-score");
let compscore = document.querySelector("#comp-score")

const choices = document.querySelectorAll(".choices");
const restartBtn = document.querySelector("#restart-btn");

const drawgame = () => {
    msg.innerText = "Game was a draw";
}

const showWinner = (userwin) => {
     if (userwin){
        msg.innerText = "you won";
        userscore++;
        myscore.innerText = userscore;
     } else{
        msg.innerText = "you lose";
        computerscore++;
        compscore.innerText = computerscore;
     }
}

const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}
const playgame = (userchoice) => {
    const compchoice = gencompchoice();

    // draw: same choice, no score change
    if (userchoice === compchoice) {
        drawgame();
        return;
    }

    let userwin;

    if (userchoice === "rock") {
        userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
        userwin = compchoice === "scissor" ? false : true;
    } else {
        userwin = compchoice === "rock" ? false : true;
    }

    showWinner(userwin);
}



Array.from(choices).forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

const resetGame = () => {
    userscore = 0;
    computerscore = 0;
    myscore.innerText = userscore;
    compscore.innerText = computerscore;
    msg.innerText = "Play your move";
};

if (restartBtn) {
    restartBtn.addEventListener("click", resetGame);
}
