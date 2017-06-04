
var correct = 0;
var incorrect = 0;
var notSelected = 0;
var seconds = 60;

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
    checkRadio();
    clearTimeout(countdownTimer);
    $("#hideForm").hide();
    $("#results").show();
    $("#right").text(correct);
    $("#wrong").text(incorrect);
    $("#noShow").text(notSelected);

    } else {
        seconds--;
    }
}

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


var countdownTimer;

$(document).ready( function() {

$("#start").click(function() {
    $("#hideForm").show();
    $("#start").hide();
});

$('#myButton').on('click', function () {
    countdownTimer = setInterval(secondPassed, 1000);
      
})

$('#myButton2').click(function () {
    checkRadio();
    clearTimeout(countdownTimer);
    $("#hideForm").hide();
    $("#results").show();
    $("#right").text(correct);
    $("#wrong").text(incorrect);
    $("#noShow").text(notSelected);
})

notSelected = notSelected - 4;

});

