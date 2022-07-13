// //function to display current time in jumbotron
var displayCurrentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentDayEl = $('#currentDay');
currentDayEl.text(displayCurrentTime);
function currentTime() {
    var displayCurrentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    var currentDayEl = $('#currentDay');
    currentDayEl.text(displayCurrentTime);
}
setInterval(currentTime, 1000);

//New function for new thing to work on
