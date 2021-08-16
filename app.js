const bday = document.querySelector("#bday");
const btn = document.querySelector(".btn-s");
const form = document.querySelector("#form");

//no of excercises 8

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
}

//excercise 1
//  Write a function in JS that takes a string and reverses it

function reverseString(str) {
  str = str.split("").reverse().join("");
  var stringReversed = str;

  return stringReversed;
}

// Ex-02: Write a JS function to check for palindrome

function palindromeChecker(str) {
  var stringReversed = reverseString(str);
  return str === stringReversed;
}

// ### Ex-03: Write a function that converts the date from number to string

function dateToString(date) {
  var dateArr = { day: "", month: "", year: "" };

  if (date.day < 10) {
    dateArr.day = "0" + date.day;
  } else {
    dateArr.day = date.day.toString();
  }
  if (date.month < 10) {
    dateArr.month = "0" + date.month;
  } else {
    dateArr.month = date.month.toString();
  }

  dateArr.year = date.year.toString();

  return dateArr;
}

// ### Ex-04: Write a JS function that takes a date and returns all variations of it

function dateVariations(date) {
  var ddmmyyyy = date.day + date.month + date.year;
  var mmddyyyy = date.month + date.day + date.year;
  var yyyymmdd = date.year + date.month + date.day;
  var ddmmyy = date.year.slice(-2) + date.day + date.month;
  var mmddyy = date.month + date.day + date.year.slice(-2);
  var yyddmm = date.year.slice(-2) + date.day + date.month;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
}

// ### Ex-05: Write a function that checks palindrome for all the date formats
function palindromeCheckLoop(date) {
  var listOfDates = dateVariations(date);
  var checkedPalindrome = [];

  for (let i = 0; i < listOfDates.length; i++) {
    const result = palindromeChecker(listOfDates[i]);
    checkedPalindrome.push(result);
  }
  return checkedPalindrome;
}

// ### Ex-06: Find the next palindrome date, also how many days are in between

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
}

function getNextDate(date) {
  var day = date.day + 1;
  var month = date.month;
  var year = date.year;

  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2) {
    if (isLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month = 3;
      } else {
        if (day > 28) {
          day = 1;
          month = 3;
        }
      }
    }
  } else {
    if (day > daysInMonth[month - 1]) {
      day = 1;
      month++;
    }
  }
  if (month > 12) {
    month = 1;
    year++;
  }

  return {
    day: day,
    month: month,
    year: year,
  };
}

function nextDatePalindrome(date) {}

var date = { day: 11, month: 23, year: 1998 };

var dateStr = dateToString(date);

console.log(palindromeCheckLoop(dateStr));
