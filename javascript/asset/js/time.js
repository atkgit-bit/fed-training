// Write a JavaScript program to display the current day and time in the following format.
// Current time is : 10 PM : 30 : 38

// var today = new Date();
// var hour = today.getHours();
// var minute = today.getMinutes();
// var second = today.getSeconds();

var hour = 00;
var minute = 00;
var second = 00;

var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = ' Noon';
  }
  else {
    hour = 12;
    prepand = ' PM';
  }
}
if (hour === 0 && prepand === ' AM ') {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = ' Midnight';
  }
  else {
    hour = 12;
    prepand = ' AM';
  }
}
console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);
document.write("Current Time : " + hour + prepand + " : " + minute + " : " + second);