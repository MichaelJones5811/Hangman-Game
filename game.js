alert("Hello World");



var baseBallPlayers =["ab","abb","abbb","abbbb"];
// var baseBallPlayers = ["Rizzo","Byrant","Fowler","Beaz","Ross","Russell","Zobrist","Heyward","Lester","Contreras"];
var numberOfGuess = 0;
var lettersGuess = [];
var numberWins = 0;
var numberLoses = 0;
var randomWord = baseBallPlayers[Math.floor(Math.random() * baseBallPlayers.length)];
var answerArr = [];
var s;
// setting up the game to run on load
function playGame () {
	
	for (var i = 0; i < randomWord.length; i++)
	{
		answerArr[i] = "_";
	}

	s = answerArr.join(" ");

	document.getElementById("answer").innerHTML = s;
}
	//trying to read user input and compare and display to the DOM	
	document.onkeyup = function(event) {
	 	var userGuess = event.key;
	 	
	 	
	
		for (var i = 0; i < randomWord.length; i++)
		{
			if (randomWord[i] === userGuess)
			{
				answerArr[i] = userGuess;
				lettersGuess.push(userGuess);
			}
			
		
		}
			numberOfGuess++;
			document.getElementById("numberGuess").innerHTML = "No of clicks: " + numberOfGuess;
			document.getElementById("answer").innerHTML = answerArr.join(" ");
			document.querySelector("#lettersGuess").innerHTML = "Guessed Letter " + lettersGuess; 

	//}

			if(numberOfGuess > 5)
			{
				loses++
				document.getElementById("loses").innerHTML = "You failed sorry loser " + loses;
			}
   			

 }

		

