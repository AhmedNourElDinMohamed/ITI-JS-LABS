/* Qustion [1] : Alert Properties From Object except Functions ??
    ✍ Create a function that accepts an object as a parameter.    
    ✍ The function should alert the properties and their values.    
    ✍ The function should ignore properties of type "function"..    
*/

var person = {
  name: "Ahmed NourEldin",
  age: 50,
  track: "UI",
  hello: function () {
    console.log(typeof this.hello);
    console.log(person.hello);
  },
};

function Print_Obj(obj) {
  for (i = 0; i < Object.keys(person).length; i++) {
    if (typeof Object.values(person)[i] === "function") {
      console.log("");
    } else {
      alert(Object.keys(person)[i]);
      alert(Object.values(person)[i]);
    }
  }
}

Print_Obj(person);

// ************************************************************************

//  Qustion [2] : Write a JavaScript program to remove duplicate items from an array ??

var Nums = [1, 5, 6, 5, 4, 1, 10, 11, 10];
var uniqueNums = [];
for (i = 0; i < Nums.length; i++) {
  if (!uniqueNums.includes(Nums[i])) {
    uniqueNums.push(Nums[i]);
  }
}
console.log(uniqueNums);

// ************************************************************************
/* Qustion [3] : 
    ✍ Ask the user to enter a string.    
    ✍ Count the number of words the string has.    
    ✍ (ex: “Ahmed goes to school by bus” 🡪 6 words) .    
*/

var str = prompt("Plaese Enter Your Name");
var str_split = str.split(" ");
console.log(`Words is ${str_split.length}`);

// ************************************************************************

// Qustion [4] : Create a function that accepts a string and returns the number of vowels in that string (vowel characters are : a, e, o, u, i)

var arr = ["a", "e", "o", "u", "i"];
var count = 0;

function vawles(str, arr) {
  for (i = 0; i < str.length; i++) {
    if (arr.includes(str[i])) count++;
  }
  console.log(`Numbers Of Vowel Is ${count}`);
}

vawles("that", arr);

// ************************************************************************

/* Qustion [5] : 
    ✍ Ask the user to enter a number.    
    ✍ Write code to calculate the factorial of the number (factorial 5 = 5*4*3*2*1).    
    ✍ Alert the result to the user .    
    ✍ Ask the user if he wants to check for another number ,keep asking the user to enter the number until he clicks no .    
*/

do {
  var Num = prompt("Plaese Enter Number");
  function fact(Num) {
    if (Num == 0) return 1;
    else {
      return Num * fact(Num - 1);
    }
  }
  var Result = fact(Num);
  alert(`Factorial To Num ${Num} Is ${Result}`);
  var X = confirm("Do You Want To Don Another Process");
} while (X);

// ************************************************************************

// Qustion [6] : write a function called every time user click on button and print random number between 1 and 10 ??

function myFunction() {
  document.getElementById("random").innerHTML = Math.floor(Math.random() * 10);
}

// ************************************************************************

/* Qustion [7] : write a function to hide email addresses to protect it (we add … at the first special character) ??
    ✍ Input : menna-Mohamed@gamil.com  
    ✍ output: menna…@gmail.com  
*/

function checkIfStringHasSpecialChar(_string) {
  var index1;
  var index2;
  var arr = _string.split("");
  let spChar = "/[!@#$%^&*()_+-=[]{};':\\|,.<>/?]+/";
  for (var i = 0; i < _string.length; i++) {
    if (spChar.includes(_string[i])) {
      index1 = _string.indexOf(_string[i]);
      break;
    }
  }
  for (var i = index1 + 1; i < _string.length; i++) {
    if (spChar.includes(_string[i])) {
      index2 = _string.indexOf(_string[i]);
      break;
    }
  }
  console.log(index1);
  console.log(index2);
  arr.splice(index1, index2 - index1, "...");
  console.log(arr.join());
}

checkIfStringHasSpecialChar("Mohamed-Ahmed@yahoo.com");

// Solution With Regex

function checkIfStringHasSpecialChar(_string) {
  console.log(_string.replace(/(\W.*)(?=@)/, "..."));
}
checkIfStringHasSpecialChar("Mohamed-Ahmed@yahoo.com");

// ************************************************************************
