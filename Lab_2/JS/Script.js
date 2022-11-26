/* Qustion [1] : There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
    Sample array :
    - array1 = [1,0,2,3,4];
    -array2 = [3,5,6,7,8,13];
    - Expected Output : [4, 5, 8, 10, 12, 13] ?? */

function Sum_Arr() {
  var arr1 = [1, 0, 2, 3, 4, 5, 12, 2];
  var arr2 = [3, 5, 6, 7, 8];
  var Sum;
  if (arr1.length < arr2.length) {
    Sum = arr2.slice();
    for (i = 0; i < arr1.length; i++) {
      Sum[i] += arr1[i];
    }
  } else {
    Sum = arr1.slice();
    for (i = 0; i < arr2.length; i++) {
      Sum[i] += arr2[i];
    }
  }
  console.log(Sum);
} // End Function
Sum_Arr();

// ************************************************************************

/* Qustion [2] : Search For Name In Array ??
    ✍ Ask the user to enter 5 names (using prompt) and store them into an array .
    ✍ Ask the user to enter a name to search for .
    ✍ If the name is found, alert the order of that name (ex: first, second, third, fourth, or fifth) .
    ✍ If the name is not found, show a message that "The name is not found".
*/

function Name_Search() {
  var Name = [];
  var name = "";
  for (i = 0; i < 5; i++) {
    Name[i] = prompt("Enter 5 Name");
    if (!Name[i]) {
      console.log("Not Valid Value");
    } else continue;
  }
  name = prompt("Enter The Name You Want To Search to it");
  if (Name.includes(name)) {
    switch (Name.indexOf(name)) {
      case 0:
        alert("the order of that name is First");
        break;
      case 1:
        alert("the order of that name is Second");
        break;
      case 2:
        alert("the order of that name is Third");
        break;
      case 3:
        alert("the order of that name is Fourth");
        break;
      case 3:
        alert("the order of that name is Fifth");
        break;
    }
  } else {
    alert("The Name Not Found");
  }
}
Name_Search();

// ************************************************************************

//  Qustion [3] : Function Change Upper Case Strings Of Array To LowerCase ??

var Names = ["Ahmed", "Mohamed", "Ali", "Bendary", "Light"];
var X = Names.map(myFunction);

function myFunction(elem) {
  return elem;
}

for (i = 0; i < X.length; i++) {
  X[i] = X[i].toLowerCase();
}

console.log(Names);
console.log(X);

// another solution

var Names = ["Ahmed", "Mohamed", "Ali", "Bendary", "Light"];
var X = Names.map(function (e) {
  return e.toLocaleLowerCase;
});

console.log(Names);
console.log(X);

// ************************************************************************

//  Bouns [1] : Write a JavaScript program to sort array of word according to every word length (function take two parameters first array , second aesc or desc ) ??

function Sort(arr, type) {
  if (type === "aesc") {
    arr.sort(function (a, b) {
      return a.length - b.length;
    });
  } else if (type === "desc") {
    arr.sort(function (a, b) {
      return b.length - a.length;
    });
  }
  console.log(arr);
} // End Function

console.log(Sort(["Ahmed", "Mohamed", "Alaa", "Bendary", "Dina"], "aesc"));
console.log(Sort(["Ahmed", "Mohamed", "Alaa", "Bendary", "Dina"], "desc"));

// ************************************************************************

//  Bouns [2] : Write a JavaScript program to filters out negative numbers ??

var Numbers = [20, -5, -4, 2, 3, 80];
var Postive_Nums = Numbers.filter(myFunction);

function myFunction(elem) {
  return elem > 0;
}

console.log(Numbers);
console.log(Postive_Nums);

// ************************************************************************

//  Bouns [3] : Write a JavaScript program to remove the spaces found in a string ??
function String_Without_Spaces(str) {
  var without = str.split(" ").join("");
  console.log(str);
  console.log(without);
}

String_Without_Spaces("Ahmed NourElDin Mohamed (ITI Student)");

// **********************************************************************************
