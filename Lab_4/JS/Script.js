//  Qustion [1] : write a function select all h2 from dom and set text by “hello from h1” ??

function set_text_for_h2() {
  var x = document.getElementsByTagName("h2");
  for (i = 0; i < x.length; i++) {
    x[i].innerText = "Hello From h1";
  }
}

set_text_for_h2();

// ************************************************************************

//  Qustion [2] : Make A synced Clock ??

var sec = document.getElementById("sec");
var min = document.getElementById("min");
var hour = document.getElementById("hour");
var month = document.getElementById("month");
var year = document.getElementById("year");
var night = document.getElementById("time");

setInterval(function () {
  var time = new Date();
  // Convert From 24h To 12h
  time.getHours() > 12
    ? (night.textContent = "PM")
    : (night.textContent = "Am");
  hour.textContent = String(time.getHours() % 12).padStart(2, "0");
  // Min
  min.textContent = sec.textContent = String(time.getMinutes()).padStart(
    2,
    "0"
  );
  // Sec
  sec.textContent = String(time.getSeconds()).padStart(2, "0");

  month.textContent = time.toLocaleString("en-us", { month: "short" });
  year.textContent = time.getFullYear();
}, 1000);
// ***********************************************************************

//  Qustion [3] : Make A Timer [Hours:Mins:Seconds] ??

var stopBtn = document.getElementById("stop");
var startBtn = document.getElementById("start");
var resetBtn = document.getElementById("reset");
var sec = document.getElementById("sec");
var min = document.getElementById("min");
var hour = document.getElementById("hour");
var counSec = 0;
var counMin = 0;
var counHrs = 0;
sec.textContent = "0" + 0;
min.textContent = "0" + 0;
hour.textContent = "0" + 0;
var stopHandller;

let stopWatch = function () {
  clearInterval(stopHandller);
  stopBtn.removeEventListener("click", stopWatch);
  startBtn.addEventListener("click", startWatch);
  resetBtn.addEventListener("click", resetWatch);
};

let resetWatch = function () {
  counSec = 0;
  counMin = 0;
  counHrs = 0;
  sec.textContent = "0" + counSec;
  min.textContent = "0" + counMin;
  hour.textContent = "0" + counHrs;
  resetBtn.removeEventListener("click", resetWatch);
  startBtn.addEventListener("click", startWatch);
  stopBtn.addEventListener("click", stopWatch);
};

let startWatch = function () {
  stopHandller = setInterval(function () {
    counSec++;
    if (counSec < 60) {
      if (counSec < 10) sec.textContent = "0" + counSec;
      else {
        sec.textContent = counSec;
      }
    } else {
      counSec = 0;
      counMin++;
      if (counMin < 60) {
        if (counMin < 10) {
          min.textContent = "0" + counMin;
        } else {
          min.textContent = counMin;
        }
      } else {
        counMin = 0;
        min.textContent = "0" + counMin;
        counHrs++;
        if (counHrs < 10) {
          hour.textContent = "0" + counHrs;
        } else {
          hour.textContent = counHrs;
        }
      }
    }
  }, 1000);
  startBtn.removeEventListener("click", startWatch);
  resetBtn.removeEventListener("click", resetWatch);
  stopBtn.addEventListener("click", stopWatch);
};

startBtn.addEventListener("click", startWatch);
stopBtn.addEventListener("click", stopWatch);
resetBtn.addEventListener("click", resetWatch);

// ************************************************************************
