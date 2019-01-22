var currentColumn = 1;
var currentRow = 1;
var gameStart = false;
var randomWord;
var correctLetters = ["", "", "", "", ""];
randomWord = words[Math.floor(Math.random() * words.length)];
correctLetters[0] = randomWord.charAt(0);

console.log(randomWord);
for(i=1; i<=5; i++){
	var row = document.createElement("div");
	row.id="r"+i;
	document.getElementById("container").appendChild (row);
	for (j=1; j<=5; j++){
		var column = document.createElement("div");
		column.id = "r"+i+"c"+j;
		row.appendChild(column);

		var paragraph = document.createElement("p");
		column.appendChild(paragraph);
	}
}
addCorrectLetters();

document.addEventListener("keydown", function(e){
	var x = e.keyCode;
	var y = String.fromCharCode(x).toUpperCase();

	if (gameStart == true && y.match(/[a-z]/i) && currentColumn <= 5){
		var column = document.getElementById("r"+currentRow+"c"+currentColumn).firstChild;
		column.innerHTML = y.toUpperCase();
		column.style.opacity = "1.0";
		currentColumn++;

	} else if (currentColumn > 5 && x == 13){
		var word = "";
		for (var i = 0; i < 5; i++){
			var columnL = document.getElementById("r"+currentRow+"c"+(i+1)).firstChild.innerHTML;
			word+=columnL;		
		}
		check(word);
		currentColumn = 1;
		currentRow++;
		if (currentRow > 5){
			setTimeout(function(){
				alert("Je hebt verloren! het woord was " + randomWord);
				window.location.reload();
			}, 500)
			return;
		}
		addCorrectLetters();
	}
});

function check(myWord){
	var myWordArray = myWord.toLowerCase().split("");
	var goodWordArray = randomWord.split("");

	console.log(myWordArray, goodWordArray)

	for (var i = 0; i < myWordArray.length; i++){
		if (myWordArray[i] == goodWordArray[i]){
			var column = document.getElementById("r" + currentRow + "c"  + (i+1));
			column.style.backgroundColor = "green";
			correctLetters[i] = goodWordArray[i];
			myWordArray[i] = "";
			goodWordArray[i] = "*";
		}
	}
	if (checkValues(goodWordArray) == true){
		setTimeout(function(){
			alert("Je hebt gewonnen");
			window.location.reload();
		}, 500);
		return;
	}
	/*for (var i = 0; i < myWordArray.length; i++){
		for (var j = 0; j < myWordArray.length; j++){
			if (myWordArray[i] == goodWordArray[j]){
				var column = document.getElementById("r"+currentRow+"c"+(i+1));
				column.style.backgroundColor = "yellow";
				column.style.borderRadius = "100px";
				myWordArray[i] = "";
				goodWordArray[j] = "*";
			}
		}
	}
}*/

	for (var i = 0; i < 5; i++){
	if (goodWordArray.indexOf(myWordArray[i])>=0){ 
		var column = document.getElementById("r"+currentRow+"c"+(i+1)); 
	column.style.backgroundColor = "yellow";
				column.style.borderRadius = "100px";
				myWordArray[i] = "";
				//goodWordArray[j] = "*";		
		}
	}
}

function startButton(){
	gameStart = true;
	document.getElementById("startButton").style.display = "none";
}

function checkValues(myArray){
	for (var i = 0; i < myArray.length; i++){
		if (!(myArray[i].includes("*"))){
			return false;
		}
		if (i == myArray.length-1){
			if (myArray[i] != "*"){
				return false;
			}
			return true;
		}
	}
}

function addCorrectLetters(){
	for (i=0; i<correctLetters.length; i++){
		var columnCL = document.getElementById("r" + currentRow + "c" + (i+1)).firstChild;
		columnCL.innerHTML = correctLetters[i].toUpperCase();
		columnCL.style.opacity = "0.5";
	}
}