// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const body = document.body;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Validate input
  if (dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  // check if input is a number
  if(isNaN(dividend) || isNaN(divider) ){
    body.innerText = "Something critical went wrong. Please reload the page";
    return;
  }

  // Check if divider is zero
  if (divider === 0) {
    result.innerText = "Division not performed. Divider cannot be zero";
    return;
  }

  // Check if input is a whole number
  if (dividend % 1 !== 0 || divider % 1 !== 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    return;
  }

  // check if either numbers are less than zero
  if (dividend < 0 || divider < 0){
    result.innerText = "Division not performed. Invalid number provided. Try again";
    return;
  }


  // Calculate the result
  const resultNumber = Math.floor(dividend / divider);

  // Display the result
  result.innerText = resultNumber;
});
