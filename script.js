// //function to display current time in jumbotron
var displayCurrentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentDayEl = $('#currentDay');
currentDayEl.text('Today is ' + displayCurrentTime);
function currentTime() {
    var displayCurrentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    var currentDayEl = $('#currentDay');
    currentDayEl.text('Today is ' + displayCurrentTime);
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


//Trying to get color changes in one loop function

// function loop() {
//     for ()
// }
// function whatever(time) {
//     return $('#timeBlock' + 'time')
// }

// var testing = $('.timeBLock');
// testing.each(function() {
//     console.log($(this).attr('id').charAt(9));
// });

// function background(currentHour, calendarHour) {

  

//     if currentHour == calendarHour {
//         color = "red"
//     } else if currentHour > calendarHour {
//         color = "yellow"
//     } else {
//         color = "green" 
//     }
//     // background.attr('style', 'background-color: red;')
// }

// currentHour = whatever
// for i in 8...17 {
//     let backgroundColor = background(currentHour, i)

// }

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

//10am notes
var textArea8am = $('#textArea8am');
var saveButton8am = $('#save8am');

saveButton8am.click(function() {
    saveButton8am.attr('style', 'background-color: green;');
    var text8amValue = textArea8am.val();
    localStorage.setItem('8am', text8amValue);
    console.log(text8amValue);
});

var displayNew = localStorage.getItem('8am');
textArea8am.val(displayNew);


//9am notes
var textArea9am = $('#textArea9am');
var saveButton9am = $('#save9am');

saveButton9am.click(function() {
    saveButton9am.attr('style', 'background-color: green;');
    var text9amValue = textArea9am.val();
    localStorage.setItem('9am', text9amValue);
});

var displayNew9am = localStorage.getItem('9am');
textArea9am.val(displayNew9am);

// 10am notes
var textArea10am = $('#textArea10am');
var saveButton10am = $('#save10am');

saveButton10am.click(function() {
    saveButton10am.attr('style', 'background-color: green;');
    var text10amValue = textArea10am.val();
    localStorage.setItem('10am', text10amValue);
});

var displayNew10am = localStorage.getItem('10am');
textArea10am.val(displayNew10am);

// 11am notes
var textArea11am = $('#textArea11am');
var saveButton11am = $('#save11am');

saveButton11am.click(function() {
    saveButton11am.attr('style', 'background-color: green;');
    var text11amValue = textArea11am.val();
    localStorage.setItem('11am', text11amValue);
});

var displayNew11am = localStorage.getItem('11am');
textArea11am.val(displayNew11am);

// 12pm notes
var textArea12pm = $('#textArea12pm');
var saveButton12pm = $('#save12pm');

saveButton12pm.click(function() {
    saveButton12pm.attr('style', 'background-color: green;');
    var text12pmValue = textArea12pm.val();
    localStorage.setItem('12pm', text12pmValue);
});

var displayNew12pm = localStorage.getItem('12pm');
textArea12pm.val(displayNew12pm);

// 1pm notes

var textArea1pm = $('#textArea1pm');
var saveButton1pm = $('#save1pm');

saveButton1pm.click(function() {
    saveButton1pm.attr('style', 'background-color: green;');
    var text1pmValue = textArea1pm.val();
    localStorage.setItem('1pm', text1pmValue);
});

var displayNew1pm = localStorage.getItem('1pm');
textArea1pm.val(displayNew1pm);

// 2pm notes
var textArea2pm = $('#textArea2pm');
var saveButton2pm = $('#save2pm');

saveButton2pm.click(function() {
    saveButton2pm.attr('style', 'background-color: green;');
    var text2pmValue = textArea2pm.val();
    localStorage.setItem('2pm', text2pmValue);
});

var displayNew2pm = localStorage.getItem('2pm');
textArea2pm.val(displayNew2pm);

// 3pm notes
var textArea3pm = $('#textArea3pm');
var saveButton3pm = $('#save3pm');

saveButton3pm.click(function() {
    saveButton3pm.attr('style', 'background-color: green;');
    var text3pmValue = textArea3pm.val();
    localStorage.setItem('3pm', text3pmValue);
});

var displayNew3pm = localStorage.getItem('3pm');
textArea3pm.val(displayNew3pm);

// 4pm notes
var textArea4pm = $('#textArea4pm');
var saveButton4pm = $('#save4pm');

saveButton4pm.click(function() {
    saveButton4pm.attr('style', 'background-color: green;');
    var text4pmValue = textArea4pm.val();
    localStorage.setItem('4pm', text4pmValue);
});

var displayNew4pm = localStorage.getItem('4pm');
textArea4pm.val(displayNew4pm);

// 5pm notes
var textArea5pm = $('#textArea5pm');
var saveButton5pm = $('#save5pm');

saveButton5pm.click(function() {
    saveButton5pm.attr('style', 'background-color: green;');
    var text5pmValue = textArea5pm.val();
    localStorage.setItem('5pm', text5pmValue);
});

var displayNew5pm = localStorage.getItem('5pm');
textArea5pm.val(displayNew5pm);

//Trying to get all values in one loop function

// var allButtons = $('.saveButton');
// allButtons.click(function() {
//     console.log($(this).siblings('form').children()[1].value);
    
// });