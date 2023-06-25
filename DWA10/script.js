
// Function to increase the number
function increaseNumber() {
  var numberElement = document.getElementById("number");
  var currentNumber = parseInt(numberElement.innerHTML);
  numberElement.innerHTML = currentNumber + 1;
}

// Function to decrease the number
function decreaseNumber() {
  var numberElement = document.getElementById("number");
  var currentNumber = parseInt(numberElement.innerHTML);
  numberElement.innerHTML = currentNumber - 1;
}

// Function to reset the number
function resetNumber() {
  var numberElement = document.getElementById("number");
  var currentNumber = parseInt(numberElement.innerHTML);
  numberElement.innerHTML = 0;
}
