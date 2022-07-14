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

//change colors according to time: yellow for current hour
//red for past hour green for upcoming hours

// console.log(displayCurrentTime);
var hour = new Date().getHours();
console.log(hour);

var date = new Date();
var date24Hours = date.toLocaleString('en-US', {timeStyle: 'long'});
console.log(date24Hours);
// console.log(date24Hours.getHours());

//var for all time blocks setting equal to respective number
var background8am = $('#timeBlock8am');
var background9am = $('#timeBlock9am');
var background10am = $('#timeBlock10am');
var background11am = $('#timeBlock11am');
var background12pm = $('#timeBlock12pm');
var background1pm = $('#timeBlock1pm');
var background2pm = $('#timeBlock2pm');
var background3pm = $('#timeBlock3pm');
var background4pm = $('#timeBlock4pm');
var background5pm = $('#timeBlock5pm');


//for 8 am background change
// var background8am = $('#timeBlock8am');
if (hour === 8) {
    background8am.attr('style', 'background-color: yellow;');
} else if (hour < 8) {
    background8am.attr('style', 'background-color: green;');
} else {
    background8am.attr('style', 'background-color: red;');
}


// 9am background change
if (hour === 9) {
    background9am.attr('style', 'background-color: yellow;');
} else if (hour < 9) {
    background9am.attr('style', 'background-color: green');
} else {
    background9am.attr('style', 'background-color: red');
}

// 10am background change
if (hour === 10) {
    background10am.attr('style', 'background-color: yellow;');
} else if (hour < 10) {
    background10am.attr('style', 'background-color: green');
} else {
    background10am.attr('style', 'background-color: red');
}

// 11am background change
if (hour === 11) {
    background11am.attr('style', 'background-color: yellow;');
} else if (hour < 11) {
    background11am.attr('style', 'background-color: green');
} else {
    background11am.attr('style', 'background-color: red');
}

//12pm background change
if (hour === 12) {
    background12pm.attr('style', 'background-color: yellow;');
} else if (hour < 12) {
    background12pm.attr('style', 'background-color: green');
} else {
    background12pm.attr('style', 'background-color: red');
}

// 1pm background change
if (hour === 13) {
    background1pm.attr('style', 'background-color: yellow;');
} else if (hour < 13) {
    background1pm.attr('style', 'background-color: green');
} else {
    background1pm.attr('style', 'background-color: red');
}

//2pm background change
if (hour === 14) {
    background2pm.attr('style', 'background-color: yellow;');
} else if (hour < 14) {
    background2pm.attr('style', 'background-color: green');
} else {
    background2pm.attr('style', 'background-color: red');
}

//3pm background change
if (hour === 15) {
    background3pm.attr('style', 'background-color: yellow;');
} else if (hour < 15) {
    background3pm.attr('style', 'background-color: green');
} else {
    background3pm.attr('style', 'background-color: red');
}

// 4pm background change
if (hour === 16) {
    background4pm.attr('style', 'background-color: yellow;');
} else if (hour < 16) {
    background4pm.attr('style', 'background-color: green');
} else {
    background4pm.attr('style', 'background-color: red');
}

// 5pm background change
if (hour === 17) {
    background5pm.attr('style', 'background-color: yellow;');
} else if (hour < 17) {
    background5pm.attr('style', 'background-color: green');
} else {
    background5pm.attr('style', 'background-color: red');
}

var testHour = new Date(2022, 06, 14, 15, 30);
console.log(testHour);
console.log(testHour.getHours());
