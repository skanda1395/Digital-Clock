let timeSlot = document.getElementById("time");
let toggleFormatBtn = document.getElementById("toggleFormat");

let time;
let timeStyles =  ["In Military Format", "In Normal Format"];
let timeFunctions = [formattedTime, normalTime];
let inMilitaryStyle =  true;
let period =  null;
// let setTime;

function normalTime() {
  console.log("normal");
  timeSlot.textContent = new Date().toLocaleTimeString();
}

function setTime() {

  let currentHour = new Date().getHours();
  period = currentHour >= 12? "PM": "AM";
  currentHour = currentHour % 12;
  currentHour = currentHour? currentHour: 12;
  currentHour = (currentHour < 10)? `0${currentHour}`: currentHour;
  let minSec = new Date().toLocaleTimeString().slice(3);
  timeSlot.textContent = `${currentHour}:${minSec} ${period}` ;
}

function toggleFormat() {
  inMilitaryStyle = !inMilitaryStyle;
  toggleFormatBtn.textContent = timeStyles[+inMilitaryStyle];
  // setTime = timeFunctions[+inMilitaryStyle]
}

toggleFormatBtn.addEventListener("click", toggleFormat);

// set defaults and an interval
toggleFormatBtn.click();  
setInterval(setTime, 1000);