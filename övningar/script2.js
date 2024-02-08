let counter = 0;

const btn = document.getElementById("minKnapp");
const countDisplay = document.getElementById("counter");

btn.addEventListener("click", () => {
  counter++;
  console.log(counter);

  countDisplay.innerText = counter;
});

//--------------------------------------------------
const header = document.getElementById("header1");

header.addEventListener("mouseover", () => {
  header.classList.add("header-color");
});

header.addEventListener("mouseout", () => {
  header.classList.remove("header-color");
});

//--------------------------------------------------

const todoList = document.getElementById("toDo");
const inputToDo = document.getElementById("inputToDo");
const addBtn = document.getElementById("addToDo");

addBtn.addEventListener("click", () => {
  const newToDoLi = document.createElement("li");

  newToDoLi.innerText = inputToDo.value;
  console.log(newToDoLi);

  todoList.appendChild(newToDoLi);
});
