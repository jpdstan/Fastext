// Takes in the text from the form and relays it back to user. 

var timerID_;
var i = 0;
var blank_ = "";
var resetCounter_ = false;

function activate() {
	timerID_ = setInterval(speedRead, 200);
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
	document.getElementById('display').innerHTML = "hello";
	document.getElementById('text').innerHTML = "";
	clearInterval(timerID_);
	resetCounter_ = true;
	pause();
}

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