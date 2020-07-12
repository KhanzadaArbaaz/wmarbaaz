
var hr = 0;
var min = 0;
var sec = 0;
var msec = 0;

var hrhd = document.getElementById("hr");
var minhd = document.getElementById("min");
var sechd = document.getElementById("sec");
var msechd = document.getElementById("msec");

var interv;
function timer() {
  msec++;
  msechd.innerHTML = msec;
  if (msec >= 100) {
    sec++;
    sechd.innerHTML = sec;
    msec = 0;
  } else if (sec >= 60) {
    min++;
    minhd.innerHTML = min;
    sec = 0;
  } else if (min >= 59){
      hr++;
      hrhd.innerHTML = hr;
      min = 0;

  }
}

function start() {
  interv = setInterval(timer, 10);
  document.getElementById("st").disabled = true;
}
function stop() {
  clearInterval(interv);
  document.getElementById("st").disabled = false;
}
function reset() {
  msec = 0;
  sec = 0;
  min = 0;
  hr = 0;
  msechd.innerHTML = msec;
  sechd.innerHTML = sec;
  minhd.innerHTML = min;
  hrhd.innerHTML = hr;
  Laps.innerHTML=""
  clearInterval(interv);
}
var Lap = document.getElementById("lap");
var Laps = document.getElementById("laps");
Lap.onclick = function () {
  Laps.innerHTML += "<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ hr + " : " + min + " : " + sec + " : " + msec + "</li>";
};