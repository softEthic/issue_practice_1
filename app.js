// app.js
console.log("Hello from app.js!");

// Example: change the background color dynamically
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.backgroundColor = "#f0f8ff"; // light blue
});

// Example: add a click event to a button with id "myButton"
const button = document.getElementById("myButton");
if (button) {
  button.addEventListener("click", () => {
    alert("Button clicked!");
  });
}