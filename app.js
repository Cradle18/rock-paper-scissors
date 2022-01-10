let userScore = 0;
let computerScore = 0;
const userScore_span =  document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("sc");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("sp");


function getComputerChoice() {
    const choices = ["r", "p", "sc", "l", "sp"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter ==="r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "sp") return "Spock";
    if (letter === "l") return "Lizard";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Your ${convertToWord(userChoice)} beats Sheldons ${convertToWord(computerChoice)} You win!`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Sheldons ${convertToWord(computerChoice)} beats your ${convertToWord(userChoice)} You lose!`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = "DRAW!"
    userChoice_div.classList.add("yellow-glow");
    setTimeout(() => userChoice_div.classList.remove("yellow-glow"), 300);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rsc":
        case "pr":
        case "scp":
        case "rl":
        case "lsp":
        case "spsc":
        case "scl":
        case "lp":
        case "psp":
        case "spr": 
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "psc":
        case "scr":
        case "lr":
        case "spl":
        case "scsp":
        case "lsc":
        case "pl":
        case "spp":
        case "rsp":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "scsc":
        case "spsp":
        case "ll":
            draw(userChoice, computerChoice);
            break;       
    }
}


function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("sc");
    })

    lizard_div.addEventListener('click', function() {
        game("l");
    })

    spock_div.addEventListener('click', function() {
        game("sp");
    })
}

main();



