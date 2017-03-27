/**
 * Created by The Black Sheep on 27/03/2017.
 */

//--------------------------------------------------------------------------
// hier begint de timer

score = 0;

var scoreupdate = function(difficulty)
{
    if (difficulty == 1){
        window.setInterval(editscore, 250)
    }
    if (difficulty == 2){
        window.setInterval(editscore, 650)
    }
    if (difficulty == 3){
        window.setInterval(editscore, 1000)
    }
};

var editscore = function () {
    score += 1;
    $(".score").html("Score: " + score);
};

// hier eindigt de timer
//----------------------------------------------------------------------------


$('document').ready(function () {

    scoreupdate(difficulty);  //difficulty moet meegegeven worden in vorm van 1, easy,2 hard of 3 impossible
});