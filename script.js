let userInput = prompt("Rock, Paper, Or Scissor").toLowerCase()
let botInput = Math.floor(Math.random() * 3 + 1)

let botAnswer

console.log(userInput);

switch(botInput) {
    case 1 :
        botAnswer = "rock"
        break;
    case 2 :
        botAnswer = "paper"
        break;
    case 3 :
        botAnswer = "scissor"
        break;
}

console.log(botAnswer)

if (userInput == botAnswer) {
    console.log("Tie");
    alert("Tie!")
} else if (userInput != botAnswer) {
    winningCondition()
}

function winningCondition() {
    if (userInput == "rock" && botAnswer == "scissor") {
        return alert("You won! \n Bot : " + botAnswer)
    }
    else if (userInput == "scissor" && botAnswer == "paper") {
        return alert("You won! \n Bot : "+ botAnswer)
    }
    else if (userInput == "paper" && botAnswer == "rock") {
        return alert("You won! \n Bot :" + botAnswer)
    }
    else {
        return alert("You lost \n Bot : " + botAnswer)
    }
}