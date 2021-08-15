const bday = document.querySelector("#bday");
const btn = document.querySelector(".btn-s");
const form = document.querySelector("#form");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
}

function reverseString(str) {
  var reversedString = str.split("").reverse().join("");
  return reversedString;
}

function ifPalindrome(str) {
  var reversedString = reverseString(str);
  return str === reversedString;
}

console.log(ifPalindrome("racecar"));
