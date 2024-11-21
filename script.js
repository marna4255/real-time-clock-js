// Callback functions are functions that get passed to other functions as arguments
// and get called at a later point in time.asynchronous

// Set timeout is one JavaScript function which requires a callback function.
// We pass, set, timeout a function, and after a certain amount of time,
// our function gets executed.

//  (electronic beeps) In this challenge,
//you'll create a ticking clock in the document body.
// The index.HTML file contains a div with an ID of clock.
// Using callback functions and DOM manipulation,
// output a ticking digital clock which displays the current
//  hours, minutes, and seconds.

function digitalClock() {
  const date = new Date();
  //   console.log(date);
  const divElement = document.querySelector(".clock");
  divElement.textContent = date.toLocaleTimeString();
  setTimeout(digitalClock, 1000);
}
