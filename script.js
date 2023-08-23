
let score = JSON.parse(localStorage.getItem("score")) ||{
	Wins: 0,
	Losses: 0,
	Ties: 0,
}

updateScores()

const audioWin = new Audio("Sounds/nintendo-game-boy-startup.mp3");
const audioLose = new Audio("Sounds/bumpintowall_X5CNQPB.mp3");
const audioTie = new Audio("Sounds/Draw2.wav");
const audioReset = new Audio("Sounds/gameover.wav")
let audioBackgroundMusic = document.getElementById("Sounds/bg-music.mp3");


updateScores()


function computerMove(){
	let randomMove = Math.floor((Math.random() * 3) + 1);

	if (randomMove === 1){
		return "Rock"
	} else if (randomMove === 2){
		return "Paper"
	} else{
		return "Scissors"
	}
}

function gameOn(playerMove){
	let gameResult = document.querySelector(".js-game-result");
	let myMoveElem = document.querySelector('.js-my-move');
	let computerMoveElem = document.querySelector('.js-computer-move');
	let result = '';
	let computerMoves = computerMove();



	if (playerMove === "Rock"){
		if (computerMoves === playerMove){
			result = "It's a tie";
			audioTie.play();
		} else if (computerMoves === "Paper"){
			result = "You lose";
			audioLose.play();
		} else if (computerMoves === "Scissors"){
			result = "You Win"
			audioWin.play();
		}
	} 

	else if (playerMove === "Paper"){
		if (computerMoves === "Rock"){
			result = "You Win";
			audioWin.play()
		} else if (computerMoves === playerMove){
			result = "It's a tie";
			audioTie.play();
		} else if (computerMoves === "Scissors"){
			result = "You lose";
			audioLose.play();
		}
	}

	else if (playerMove === "Scissors"){
		if (computerMoves === "Rock"){
			result = "You lose";
			audioLose.play();
		} else if (computerMoves === "Paper"){
			result = "You Win";
			audioWin.play();
		} else if (computerMoves === playerMove){
			result = "It's a tie";
			audioTie.play();
		}
	}

	if (result === "You Win"){
		score.Wins ++;
		gameResult.classList.remove('you-lose');
		gameResult.classList.remove('tie');
		gameResult.classList.add("you-win");
	} else if (result === "You lose"){
		score.Losses ++;
		gameResult.classList.remove("you-win");
		gameResult.classList.remove('tie');
		gameResult.classList.add('you-lose')
	} else if (result === "It's a tie"){
		score.Ties ++;
		gameResult.classList.remove("you-win");
		gameResult.classList.remove('you-lose');
		gameResult.classList.add("tie")
	}


	if (playerMove === "Rock"){
		myMoveElem.innerHTML = `<i class="fa-regular fa-hand-back-fist fa-rotate-90"></i>`;	
	} else if (playerMove === "Paper"){
		myMoveElem.innerHTML = `<i class="fa-regular fa-hand fa-rotate-90"></i>`;
	} else if (playerMove === "Scissors"){
		myMoveElem.innerHTML = `<i class="fa-sharp fa-regular fa-hand-scissors fa-rotate-180"></i>`;
	}

	if (computerMoves === "Rock"){
		computerMoveElem.innerHTML = `<i class="fa-regular fa-hand-back-fist fa-rotate-270"></i>`;
	} else if (computerMoves === "Paper"){
		computerMoveElem.innerHTML = `<i class="fa-regular fa-hand fa-rotate-270"></i>`;
	} else if (computerMoves === "Scissors"){
		computerMoveElem.innerHTML = `<i class="fa-sharp fa-regular fa-hand-scissors fa-rotate-0"></i>`;
	}


	localStorage.setItem('score', JSON.stringify(score));
	gameResult.innerHTML = result;

	updateScores();


}


function resetingScore(){
	let gameResult = document.querySelector(".js-game-result");

	score.Wins =  0;
	score.Losses =  0;
	score.Ties = 0;
	gameOn();
	gameResult.classList.remove('you-win');
	gameResult.classList.remove('you-lose');
	gameResult.classList.remove('tie');
	gameResult.innerHTML = "Start"
	audioReset.play();
}


function updateScores(){
	let gameScoresElem = document.querySelector(".js-score").innerHTML =
		`Wins: ${score.Wins} &nbsp Losses: ${score.Losses}  &nbsp Ties: ${score.Ties}`;
}

console.log(gameOn())





function computerMove(){
	let randomMove = Math.floor((Math.random() * 3) + 1);

	if (randomMove === 1){
		return "Rock"
	} else if (randomMove === 2){
		return "Paper"
	} else{
		return "Scissors"
	}
}

function gameOn(playerMove){
	let gameResult = document.querySelector(".js-game-result");
	let myMoveElem = document.querySelector('.js-my-move');
	let computerMoveElem = document.querySelector('.js-computer-move');
	let result = '';
	let computerMoves = computerMove();



	if (playerMove === "Rock"){
		if (computerMoves === playerMove){
			result = "It's a tie";
			audioTie.play();
		} else if (computerMoves === "Paper"){
			result = "You lose";
			audioLose.play();
		} else if (computerMoves === "Scissors"){
			result = "You Win"
			audioWin.play();
		}
	} 

	else if (playerMove === "Paper"){
		if (computerMoves === "Rock"){
			result = "You Win";
			audioWin.play()
		} else if (computerMoves === playerMove){
			result = "It's a tie";
			audioTie.play();
		} else if (computerMoves === "Scissors"){
			result = "You lose";
			audioLose.play();
		}
	}

	else if (playerMove === "Scissors"){
		if (computerMoves === "Rock"){
			result = "You lose";
			audioLose.play();
		} else if (computerMoves === "Paper"){
			result = "You Win";
			audioWin.play();
		} else if (computerMoves === playerMove){
			result = "It's a tie";
			audioTie.play();
		}
	}

	if (result === "You Win"){
		score.Wins ++;
		gameResult.classList.remove('you-lose');
		gameResult.classList.remove('tie');
		gameResult.classList.add("you-win");
	} else if (result === "You lose"){
		score.Losses ++;
		gameResult.classList.remove("you-win");
		gameResult.classList.remove('tie');
		gameResult.classList.add('you-lose')
	} else if (result === "It's a tie"){
		score.Ties ++;
		gameResult.classList.remove("you-win");
		gameResult.classList.remove('you-lose');
		gameResult.classList.add("tie")
	}


	if (playerMove === "Rock"){
		myMoveElem.innerHTML = `<i class="fa-regular fa-hand-back-fist fa-rotate-90"></i>`;	
	} else if (playerMove === "Paper"){
		myMoveElem.innerHTML = `<i class="fa-regular fa-hand fa-rotate-90"></i>`;
	} else if (playerMove === "Scissors"){
		myMoveElem.innerHTML = `<i class="fa-sharp fa-regular fa-hand-scissors fa-rotate-180"></i>`;
	}

	if (computerMoves === "Rock"){
		computerMoveElem.innerHTML = `<i class="fa-regular fa-hand-back-fist fa-rotate-270"></i>`;
	} else if (computerMoves === "Paper"){
		computerMoveElem.innerHTML = `<i class="fa-regular fa-hand fa-rotate-270"></i>`;
	} else if (computerMoves === "Scissors"){
		computerMoveElem.innerHTML = `<i class="fa-sharp fa-regular fa-hand-scissors fa-rotate-0"></i>`;
	}


	localStorage.setItem('score', JSON.stringify(score));
	gameResult.innerHTML = ` &nbsp ${result}`;

	updateScores();


}


function resetingScore(){
	let gameResult = document.querySelector(".js-game-result");

	score.Wins =  0;
	score.Losses =  0;
	score.Ties = 0;
	gameOn();
	gameResult.classList.remove('you-win');
	gameResult.classList.remove('you-lose');
	gameResult.classList.remove('tie');
	gameResult.innerHTML = "Play Game"
	audioReset.play();
}


function updateScores(){
	let gameScoresElem = document.querySelector(".js-score").innerHTML =
		`Wins: ${score.Wins} &nbsp Losses: ${score.Losses}  &nbsp Ties: ${score.Ties}`;
}

console.log(gameOn())


