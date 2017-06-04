window.onload = function (){
$("#hideForm").hide();
$("#results").hide();
}

function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('right').innerHTML = correct;
        document.getElementById('wrong').innerHTML = incorrect;
        document.getElementById('noShow').innerHTML = notSelected;

    } else {
        seconds--;
    }
}


var correct = 0;
var incorrect = 0;
var notSelected = 0;
var seconds = 60;
var countdownTimer = setInterval(secondPassed, 1000);

$(document).ready( function() {
$("#start").click(function() {
    $("#hideForm").show();
    $("#start").hide();

});

function checkRadio () {
	$('input:radio').each(function() {
  	if($(this).is(':checked')) {
    // You have a checked radio button here...
    	if (this.value === "1"){
    		correct++;
    	}
    	else if (this.value === "0"){
    		incorrect++;
    	}
    	
  	}
  	else if(!$(this).is(':checked')) {
    	notSelected++;
    	}
	});
}

// setTimeout(checkRadio, 5000);
notSelected = notSelected - 4;

$('#myButton2').on('click', function () {
    clearInterval(countdownTimer);
    document.body.innerHTML = "";
    document.getElementById('right').innerHTML = correct;
    document.getElementById('wrong').innerHTML = incorrect;
    document.getElementById('noShow').innerHTML = notSelected;
})



$('#myButton').on('click', function () {
    secondPassed();  
})

$('#myButton2').on('click', function () {
    document.body.innerHTML = "";
    document.getElementById('right').innerHTML = correct;
    document.getElementById('wrong').innerHTML = incorrect;
    document.getElementById('noShow').innerHTML = notSelected;
})

});

