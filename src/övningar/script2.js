let counter = 0;

const btn = document.getElementById("minKnapp");
const countDisplay = document.getElementById("counter");

btn.addEventListener("click", () => {
  counter++;
  console.log(counter);

  countDisplay.innerText = counter;
});
