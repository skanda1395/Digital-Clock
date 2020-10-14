let timeSlot = document.getElementById("time");
let toggleFormatBtn = document.getElementById("toggleFormat");

let inMilitaryStyle = false;
let timeStyles =  ["In Military Format", "In Normal Format"];
let formattedTimeOptions = { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true};

function setTime() {
  if(inMilitaryStyle) {
    timeSlot.textContent = new Date().toLocaleTimeString();
  }
  else {
    timeSlot.textContent = new Date().toLocaleTimeString("en-UK", formattedTimeOptions);
  }
}

function toggleFormat() {
  inMilitaryStyle = !inMilitaryStyle;
  toggleFormatBtn.textContent = timeStyles[+inMilitaryStyle];
  setTime();
}

toggleFormatBtn.addEventListener("click", toggleFormat);

// set defaults and an interval
toggleFormatBtn.click();
setInterval(setTime, 1000);