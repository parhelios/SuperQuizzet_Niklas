let counter = 0;

const btn = document.getElementById("minKnapp");
const countDisplay = document.getElementById("counter");

btn.addEventListener("click", () => {
  counter++;
  console.log(counter);

  countDisplay.innerText = counter;
});

const header = document.getElementById("header1");

header.addEventListener("mouseover", () => {
  header.classList.add("header-color");
});

header.addEventListener("mouseout", () => {
  header.classList.remove("header-color");
});
