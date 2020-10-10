let mins = document.getElementById("mins-secs");
let formatBtn = document.getElementById("toggleTimeFormat");
let hours = document.getElementById("hours");
let timeFormat = "Normal";

setInterval(() => {
  let date = new Date();
  let currentHour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  mins.textContent = minutes + ":" + seconds;
  hours.textContent = currentHour + ":";
}, 1000);


function toggleTimeFormat() {
  if (timeFormat == "Normal") {
    timeFormat = "Military";
    formatBtn.textContent = "In Normal Format";
  }
  else {
    timeFormat = "Normal";
    formatBtn.textContent = "In Military Format";
  }
}

formatBtn.addEventListener("click", toggleTimeFormat);

function setDefaults() {
  toggleTimeFormat();
}

setDefaults();


// <div id="time">
//     <span id="hours"></span>
//     <span id="mins-secs"></span>
//   </div>

//   <button id="toggleTimeFormat"></button>