
var correct = 0;
var incorrect = 0;
var notSelected = 0;
var seconds = 60;
var countdownTimer;

// check what radios are selected and update variables with value count
function checkRadio () {
    $('input:radio').each(function() {
    if($(this).is(':checked')) {
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

// once game ends, parse radios (checkRadio), end countdown timer, and display results
function endGame() {
    checkRadio();
    clearTimeout(countdownTimer);
    $("#hideForm").hide();
    $("#results").show();
    $("#right").text(correct);
    $("#wrong").text(incorrect);
    $("#noShow").text(notSelected);
}

// create countdown timer text
function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    // If timer counts all the way down, parse radios (checkRadio), end countdown timer, and display results
    if (seconds == 0) {
        endGame();
    } 
    else {
        seconds--;
    }
}

$(document).ready( function() {
    //show only a start button
    $("#hideForm").hide();
    $("#results").hide();
    // show quiz questions after clicking the start button
    $("#start").click(function() {
        $("#hideForm").show();
        $("#start").hide();
    });
    // start the game and timer
    $('#myButton').on('click', function () {
    countdownTimer = setInterval(secondPassed, 1000);    
    })
    
    // end timer button 
    $('#myButton2').click(function () {
        endGame();
    })

    notSelected = notSelected - 4;

});

