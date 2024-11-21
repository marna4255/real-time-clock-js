# Digital Clock with JavaScript

This project demonstrates the creation of a digital clock using JavaScript, HTML, and CSS. The clock dynamically updates every second to display the current hours, minutes, and seconds.

## How It Works

1. **Asynchronous Functionality with `setTimeout`:**

   - The `setTimeout` function in JavaScript is used to execute a specified function after a certain delay (in milliseconds).
   - In this project, `setTimeout` is used to call the `digitalClock` function every 1000 milliseconds (1 second) to update the displayed time.

2. **Synchronous vs. Asynchronous Code:**

   - **Synchronous Code**: Executes line by line, and each operation must complete before the next starts. For example:
     ```javascript
     console.log("First");
     console.log("Second");
     ```
     Output:
     ```
     First
     Second
     ```
   - **Asynchronous Code**: Allows certain tasks to run in the background while the rest of the code executes. For instance, `setTimeout` schedules a task to run after a delay, without blocking the execution of other code.

3. **DOM Manipulation**:
   - The `digitalClock` function updates the text content of the `#clock` div every second using the `toLocaleTimeString()` method from JavaScript’s `Date` object.

## File Structure

- `index.html`: Contains the structure of the webpage and a `div` with the ID `clock`.
- `style.css`: Provides the styles for the clock, ensuring a modern and visually appealing design.
- `script.js`: Contains the logic for updating the clock dynamically using JavaScript.

## Getting Started

1. Clone or download the repository.
   https://github.com/marna4255/real-time-clock-js.git
2. Open `index.html` in your browser to view the clock.

## Example Output

You will see a ticking clock in the center of the page, styled to display the current time in HH:MM:SS format.

---
