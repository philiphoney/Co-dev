//
//    © Philiphoney 2022
//    Author: Philiphoney https://github.com/philiphoney
//    Version 1.0
//    MoodyDate: https://github.com/philiphoney/Moody-Date
//

var month;
var monthN;
var weekday;
var today;
var h;
var m;
var s;
var day;
var ye;
var moodytime;
var moodydate;
var moodyfulldate;

// Time and Date
window.setInterval('i_TimeDate()', 200);

// Month as text
switch(new Date().getMonth()) {
    case 0:
        month = "January";
       break;
    case 1:
        month = "February";
       break;
    case 2:
        month = "March";
       break;
    case 3:
        month = "April";
       break;
    case 4:
        month = "May";
       break;
    case 5:
        month = "June";
       break;
    case 6:
        month = "July";
       break;
    case 7:
        month = "August";
       break;
    case 8:
        month = "September";
       break;
    case 9:
        month = "October";
       break;
    case 10:
        month = "November";
       break;
    case 11:
        month = "December";
       break;
}

// Month in Number
switch(new Date().getMonth()) {
    case 0:
        monthN = "01";
       break;
       case 1:
        monthN = "02";
       break;
    case 2:
        monthN = "03";
       break;
    case 3:
        monthN = "04";
       break;
    case 4:
        monthN = "05";
       break;
    case 5:
        monthN = "06";
       break;
    case 6:
        monthN = "07";
       break;
    case 7:
        monthN = "08";
       break;
    case 8:
        monthN = "09";
       break;
    case 9:
        monthN = "10";
       break;
    case 10:
        monthN = "11";
       break;
    case 11:
        monthN = "12";
       break;
}

// Weekdays
switch(new Date().getDay()) {
    case 0:
        weekday = "Sunday";
       break;
    case 1:
        weekday = "Monday";
       break;
    case 2:
        weekday = "Tuesday";
       break;
    case 3:
        weekday = "Wednesday";
       break;
    case 4:
        weekday = "Thursday";
       break;
    case 5:
        weekday = "Friday";
       break;
    case 6:
        weekday = "Saturday";
       break;
}

function i_TimeDate() {
    
    // Extract the data from get
    today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    day = today.getDate();
    year = today.getFullYear();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    day = checkTime(day);

   moodytime = (h+":"+m+":"+s);
   moodydate = (day+"."+monthN+"."+year);
   moodyfulldate = ("Time: "+moodytime+'</br>'+"Date: "+moodydate+'</br>'+"Month: "+month+'</br>'+"Week day: "+weekday);

}

// Fill in the zero
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}