//your JS code here. If required.

const btn = document.getElementById("btn");
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const outputDiv = document.getElementById("output");


function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

btn.addEventListener("click", async () => {
  const message = textInput.value;
  const delay = parseInt(delayInput.value, 10);

  outputDiv.textContent = "";

  if (!message || isNaN(delay) || delay < 0) {
    outputDiv.textContent = "Please enter valid text and a non-negative delay.";
    return;
  }

  await wait(delay);

  
  outputDiv.textContent = message;
});
