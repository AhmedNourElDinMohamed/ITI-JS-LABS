// Qustion [1] : Write function to read username and return it (hint if user enter value) ??

function User_Name() {
  var x = prompt("Plaese Enter Your Name");
  if (!x) {
    alert("You Didn`t enter Your Name");
  } else {
    document.write("You Enterd Your Name Succfuly");
  }
}
User_Name();

// ************************************************************************

// Qustion [2] : Write a function that takes the base and height of a triangle and return its area (height by default 10) ??

var Area = function Area(height = 10) {
  var Base, height;
  Base = prompt("Enter Base for triangle");
  height = prompt("Enter height for triangle");
  if (isNaN(Base) || isNaN(height)) {
    alert("Please Enter Valid Values");
  } else {
    if (!Base || !height) {
      alert("You Didn`t Enter Any Values");
    }
    return 0.5 * Base * height;
  }
};
console.log(Area());

// ************************************************************************

// Qustion [3] : write a function to take string has lower and upper case letters as a parameter and convert upper case to lower and lower to upper
// Input : AbCDe
// output: aBcdE

function Check() {
  var str = prompt("Enter String");
  var str2 = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      str2 += str[i].toLowerCase();
    } else {
      str2 += str[i].toUpperCase();
    }
  }
  console.log(str2);
}
Check();

// ***********************************************************************

// Qustion [4] : Write a function take string and substring and return count of repeating substring ??

function Take_String() {
  var str1 = prompt("Enter First String");
  var str2 = prompt("Enter Second String");
  var temp;
  temp = str1.split(str2);
  console.log(temp.length - 1);
}
Take_String();
