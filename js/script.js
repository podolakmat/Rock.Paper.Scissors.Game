const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
var winnerText = document.querySelector(".winner_text");
var playerPoints = document.getElementById("player_points");
var computerPoints = document.getElementById("computer_points");
var user = document.getElementById("user");
var comp = document.getElementById("comp");
var playerName = document.getElementById("player_name");
var computerScore = 0;
var playerScore = 0;

window.onload = function() {
    alert("Enter Your name - at least 3 characters");
    do {
        var name = prompt("Ma name is...");
    }
    while (name.length < 3)
    playerName.innerHTML = name;

    alert("Up to how many points do you want to play?");
    do {
        var scoreLimit = parseInt(window.prompt("Please enter a number from 15 to 99", ""), 10);
    } while (isNaN(scoreLimit) || scoreLimit > 99 || scoreLimit < 15);


    function playerRockChoice() {
        user.className = "";
        user.classList.add("fas", "fa-hand-rock");
    }

    function playerPaperChoice() {
        user.className = "";
        user.classList.add("fas", "fa-hand-paper");
    }

    function playerScissorsChoice() {
        user.className = "";
        user.classList.add("fas", "fa-hand-scissors");
    }

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const computerFigure = Math.floor((Math.random() * 3));
        return (choices[computerFigure]);
    }

    getComputerChoice();

    function gameEnd() {
        if ((playerScore == scoreLimit) && (computerScore == scoreLimit)) {
            alert("Game End! Its a Draw!");
        } else if ((playerScore == scoreLimit) && (computerScore !== scoreLimit)) {
            alert("Game End! " + name + " Win!");
        } else {
            alert("Game End! Computer Win!");
        }
    }

    function win() {
        playerScore++;
        winnerText.innerHTML = "Player Beats Computer!";
        playerPoints.innerHTML = playerScore;
    }

    function lose() {
        computerScore++;
        winnerText.innerHTML = "Computer Beats Player !";
        computerPoints.innerHTML = computerScore;
    }

    function tie() {
        playerScore++;
        computerScore++;
        winnerText.innerHTML = "It is a Tie!";
        playerPoints.innerHTML = playerScore;
        computerPoints.innerHTML = computerScore;
    }

    function gameplay(userChoice) {

        const computerChoice = getComputerChoice();

        if (userChoice == computerChoice) {
            tie();
        } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice == "rock" && computerChoice !== "paper")) {
            win();
        } else if ((userChoice === "scissors" && computerChoice === "paper") || (userChoice == "scissors" && computerChoice !== "rock")) {
            win();
        } else if ((userChoice === "paper" && computerChoice === "rock") || (userChoice == "paper" && computerChoice !== "scissors")) {
            win();
        } else {
            lose();
        }

        switch (computerChoice) {
            case "rock":
                comp.className = "";
                comp.classList.add("fas", "fa-hand-rock");
                break;

            case "paper":
                comp.className = "";
                comp.classList.add("fas", "fa-hand-paper");
                break;

            case "scissors":
                comp.className = "";
                comp.classList.add("fas", "fa-hand-scissors");
                break;
        }
    }

    function main() {
        rock.addEventListener("click", function() {
            if ((playerScore == scoreLimit) || (computerScore == scoreLimit)) {
                gameEnd();
                window.location.reload();
            } else {
                gameplay("rock");
                playerRockChoice();
            }
        });
        paper.addEventListener("click", function() {
            if ((playerScore == scoreLimit) || (computerScore == scoreLimit)) {
                gameEnd();
                window.location.reload();
            } else {
                gameplay("paper");
                playerPaperChoice();
            }
        });
        scissors.addEventListener("click", function() {
            if ((playerScore == scoreLimit) || (computerScore == scoreLimit)) {
                gameEnd();
                window.location.reload();
            } else {
                gameplay("scissors");
                playerScissorsChoice();
            }
        });
        console.log(scoreLimit);
    }

    main();
}