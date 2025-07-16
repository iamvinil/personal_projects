// Button message on click
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  document.getElementById("output").textContent = "Main button was clicked!";
});

// Function to change background color
function changeColor(color) {
  document.body.style.backgroundColor = color;
  document.getElementById("output").textContent =
    "Background changed to " + color;
}
