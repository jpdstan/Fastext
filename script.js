// Takes in the text from the form and relays it back to user. 

var timerID_;
var i = 0;
var blank_ = "gdsafds";

function activate() {
	timerID_ = window.setInterval(speedRead, 500);
}

function speedRead() {
	var text = document.getElementById('userInput').value;
	var newText = text.split(" ");
	if (i == newText.length || newText[i] == undefined)
		pause();
	else {
		document.getElementById('display').innerHTML = newText[i];
		i++;
	}
}

function pause() {
	window.clearInterval(timerID_);
}

//Clears the textbox and resets the timer. 
function reset() {
	window.clearInterval(timerID_);
	i = 0;
	document.getElementById('display').value = blank_;
	document.getElementById('userInput').value = blank_;
}
