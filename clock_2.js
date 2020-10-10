let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
// let seperators = document.querySelectorAll(".seperator");

setInterval(timer, 1000);

function timer() {
  let date = new Date();
  hoursEl.textContent = timeFormat(date.getHours());
  minutesEl.textContent = timeFormat(date.getMinutes());
  secondsEl.textContent = timeFormat(date.getSeconds());
}


function timeFormat(x) {
  if(x < 10) {
    return "0" + x;
  }
  else {
    return x;
  }
}


// function blink() {
//   for(let element of seperators) {
//     element.classList.toggle("hide");
//   }
// }

// setInterval(blink, 1000);