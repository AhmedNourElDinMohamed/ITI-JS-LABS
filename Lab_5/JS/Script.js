// *************************** Task 1 **************************

// // Creat Constuctor Object
// function Student(id,name,phoneNumber,allDegrees){
//     this.id = id;
//     this.name = name;
//     this.phoneNumber = phoneNumber;
//     this.degrees = allDegrees;
//     function calcDegree(){
//         var x = allDegrees;
//         var result = 0;
//         for(i =0; i<x.length;i++)
//         {
//             result +=x[i];
//         }
//         (result /x.length) >= 50 ? console.log("This Student Is Succes"):console.log("This Student Is Faield");
//     }
//     this.getDegree = function(){
//         calcDegree(allDegrees);
//     }
// }
// Student.prototype.getPhoneNumber = function () {
//   console.log(this.phoneNumber);
// };

// function Teacher(id,name,phoneNumber){
//     this.id = id;
//     this.name = name;
//     this.phoneNumber = phoneNumber;
// }

// Teacher.prototype.getPhoneNumber = Student.prototype.getPhoneNumber;

// var student1 = new Student(1,"Ahmed NourEldin Mohamed",1061675007,[200,150,30]);
// var teacher = new Teacher(1,"Ahmed NourEldin Mohamed",1061675007);

// teacher.getPhoneNumber();


// *************************** End Task 1 **************************

// *************************** Start Task 2 **************************

// Four Buttons
var startWorkBtn = document.getElementById("start-work");
var startBreakBtn = document.getElementById("start-break");
var resumeWorkBtn = document.getElementById("resume-work");
var endWokBtn = document.getElementById("end-work");
// Disable Buttons
// Start Work Elements
var workSec = document.getElementById("sec-work");
var workMin = document.getElementById("min-work");
var workHour = document.getElementById("hour-work");
// Start Break Elements
var breakSec = document.getElementById("sec-break");
var breakMin = document.getElementById("min-break");
var breakHour = document.getElementById("hour-break");
// Counter for Work Timer
var countSecWork = 0;
var countMinWork = 0;
var countHourWork = 0;
// Counter for Break Timer
var countSecbreak = 0;
var countMinbreak = 0;
var countHourbreak = 0;
// Default For Work Timer
workSec.textContent = "0" + 0;
workMin.textContent = "0" + 0;
workHour.textContent = "0" + 0;
// Default For Work Timer
breakSec.textContent = "0" + 0;
breakMin.textContent = "0" + 0;
breakHour.textContent = "0" + 0;

var stopHandllerWork;
var stopHandllerBreak;

let startWork = function () {
  // Disable And Enable Buttons
  startWorkBtn.setAttribute("disabled", "");
  startBreakBtn.removeAttribute("disabled", "");
  endWokBtn.removeAttribute("disabled", "");
  // SetInterval Fun And Stop Handller
  stopHandllerWork = setInterval(function () {
    countSecWork++;
    if (countSecWork < 60) {
      if (countSecWork < 10) {
        workSec.textContent = "0" + countSecWork;
      } else {
        workSec.textContent = countSecWork;
      }
    } else {
      countSecWork = 0;
      countMinWork++;
      if (countMinWork < 60) {
        if (countMinWork < 10) {
          workMin.textContent = "0" + countMinWork;
        } else {
          workMin.textContent = countMinWork;
        }
      } else {
        countMinWork = 0;
        workMin.textContent = "0" + countMinWork;
        countHourWork++;
        if (countHourWork < 10) {
          workHour.textContent = "0" + countHourWork;
        } else {
          workHour.textContent = countHourWork;
        }
      }
    }
  }, 1000);
};

let startBreak = function () {
  clearInterval(stopHandllerWork);
  startBreakBtn.setAttribute("disabled", "");
  resumeWorkBtn.removeAttribute("disabled", "");

  stopHandllerBreak = setInterval(function () {
    countSecbreak++;
    if (countSecbreak < 60) {
      if (countSecbreak < 10) {
        breakSec.textContent = "0" + countSecbreak;
      } else {
        breakSec.textContent = countSecbreak;
      }
    } else {
      countSecbreak = 0;
      countMinbreak++;
      if (countMinbreak < 60) {
        if (countMinbreak < 10) {
          breakMin.textContent = "0" + countMinbreak;
        } else {
          breakMin.textContent = countMinbreak;
        }
      } else {
        countMinbreak = 0;
        breakMin.textContent = "0" + countMinbreak;
        countHourbreak++;
        if (countHourbreak < 10) {
          breakHour.textContent = "0" + countHourbreak;
        } else {
          breakHour.textContent = countHourbreak;
        }
      }
    }
  }, 1000);
};

let resumeWork = function () {
  clearInterval(stopHandllerBreak);
  startBreakBtn.removeAttribute("disabled", "");
  resumeWorkBtn.setAttribute("disabled", "");
  startWork();
};

let endWork = function () {
  clearInterval(stopHandllerWork);
  clearInterval(stopHandllerBreak);
  resumeWorkBtn.setAttribute("disabled", "");
  startBreakBtn.setAttribute("disabled", "");
  alert(
    "You Work Hours\n" +
      workSec.textContent +
      " sec\n" +
      workMin.textContent +
      "min\n" +
      workHour.textContent +
      " hr " +
      "\nYou Break Hours\n" +
      breakSec.textContent +
      " sec\n" +
      breakMin.textContent +
      "min\n" +
      breakHour.textContent +
      " hr "
  );
  // Counter for Work Timer
  countSecWork = 0;
  countMinWork = 0;
  countHourWork = 0;
  // Counter for Break Timer
  countSecbreak = 0;
  countMinbreak = 0;
  countHourbreak = 0;
  // Default For Work Timer
  workSec.textContent = "0" + 0;
  workMin.textContent = "0" + 0;
  workHour.textContent = "0" + 0;
  // Default For Work Timer
  breakSec.textContent = "0" + 0;
  breakMin.textContent = "0" + 0;
  breakHour.textContent = "0" + 0;
  startWorkBtn.removeAttribute("disabled", "");
  endWokBtn.setAttribute("disabled", "");
};

startWorkBtn.addEventListener("click", startWork);
startBreakBtn.addEventListener("click", startBreak);
resumeWorkBtn.addEventListener("click", resumeWork);
endWokBtn.addEventListener("click", endWork);

// *************************** End Task 2 **************************
