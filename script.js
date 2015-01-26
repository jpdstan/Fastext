// Takes in the text from the form and relays it back to user. 

var timerID_;
var i = 0;
var blank_ = "";
var resetCounter_ = false;
var speed_ = 300;

function activate() {
	timerID_ = setInterval(speedRead, speed_);
}

function speedRead() {
	if (resetCounter_) {
		i = 0;
		resetCounter_ = false;
	}
	var text = document.getElementById('userInput').value;
	var newText = text.split(" ");
	if (i == newText.length || newText[i] == undefined)
		pause();
	else if ($( "#text" ).valid()) {
		// var newStr = newText[i].split('');
		// for (var i = 0; i < newStr.length; i++) {
		// 	if (i == (newStr.length / 2))
		// 		document.getElementById('display').innerHTML += mid; 
		// 	else
		// 		document.getElementById('display').innerHTML += newStr[i];
		// }
		document.getElementById('display').innerHTML = newText[i];
		i++;
	}
}

//Pauses whatever text is displayed. 
function pause() {
	clearInterval(timerID_);
}

//Clears the textbox and resets the timer. 
function reset() {
	pause();
	document.getElementById('display').innerHTML = "hello";
	document.getElementById('text').innerHTML = "";
	resetCounter_ = true;
}

function adjustSpeed(newValue) {
	speed_ = 60000 / newValue; // 60,000 milliseconds in a minute. Divide this
							   // by the number of words per minute to get the
							   // amount of time each word should be displayed. 
	document.getElementById('speedBar').innerHTML = newValue + " wpm";
}

//JQuery validation for text field, making sure something exists. 
$(document).ready(function() {
	$( "#text" ).validate({
		rules: {
			input: {
				required: true
			},
		}
	});
	jQuery.extend(jQuery.validator.messages, {
		required: ""
	});
});