const header1 = document.getElementById("header1");
console.log(header1.innerHTML);
header1.innerHTML = "<h1>My new header</h1>";

const paragraph = document.getElementById("paragraph");
console.log(paragraph.innerText);
paragraph.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sit nobis nisi vitae omnis laudantium voluptatibus nam quae quisquam optio voluptatem, saepe aspernatur amet dolores veritatis, a adipisci enim eveniet.";

// const footer1 = document.getElementById("footer1");
// footer1.innerHTML =
//   '<div><a href="https://www.google.com" target="_blank">Google</a></div>' +
//   '<div><a href="https://www.w3schools.com" target="_blank">W3Schools</a></div>' +
//   '<div><a href="https://www.youtube.com" target="_blank">Youtube</a></div>';

// const footer1 = document.getElementById("footer1");
// footer1.innerHTML =
//   '<ul><li><a href="https://www.google.com" target="_blank">Google</a></li>' +
//   '<li><a href="https://www.w3schools.com" target="_blank">W3Schools</a></li>' +
//   '<li><a href="https://www.youtube.com" target="_blank">Youtube</a></li></ul>';

const footer1 = document.getElementById("footer1");
footer1.innerHTML = `
<ul>
    <li><a href="https://www.google.com" target="_blank">Google</a></li>
    <li><a href="https://www.w3schools.com" target="_blank">W3Schools</a></li>
    <li><a href="https://www.youtube.com" target="_blank">YouTube</a></li>
</ul>
`;

//----------------------------------------
const links = [
  "https://www.google.com",
  "https://www.w3schools.com",
  "https://www.youtube.com",
];

const ul = document.createElement("ul");

for (const link of links) {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.href = link;
  a.innerText = link;
  a.target = "_blank";

  li.appendChild(a);
  ul.appendChild(li);
}
footer1.appendChild(ul);

//-------------------------------------
const myClass = document.getElementsByClassName("myClass");
console.log(myClass);

// for (let i = 0; i < myClass.length; i++) {
//   const children = myClass[i].children;
//   console.log(children);

//   for (let j = 0; j < children.length; j++) {
//     if (children[j].tagName === "P") {
//       children[j].textContent = "hej";
//     }
//   }
// }

const firstHeader = document.createElement("h2");
firstHeader.innerText = "Första";

const secondHeader = document.createElement("h2");
secondHeader.innerText = "Andra";

// myClass[0].appendChild(firstHeader);
// myClass[1].appendChild(secondHeader);

const firstP = myClass[0].children[0];
const secondP = myClass[1].children[0];

myClass[0].insertBefore(firstHeader, firstP);
myClass[1].insertBefore(secondHeader, secondP);

// for (const div of myClass) {
//   for (const child of div.children) {
//     console.log(child);
//     child.innerText = `Space unicorn
// Soaring through the stars
// Delivering the rainbows all around the world
// Space unicorn
// Shining in the night
// Smiles and hugs forever
// All around the world
// So pure of heart
// And strong of mind
// So true of aim with his marshmallow laser
// Marshmallow laser
// Space unicorn
// Soaring through the stars
// Delivering the rainbows all around the world`;
//   }
// }
//----------------------------------------------
const animals = ["Hund", "Katt", "Kanin"];

const div2 = document.createElement("div");
const ul2 = document.createElement("ul");

for (const animal of animals) {
  const li2 = document.createElement("li");

  li2.innerText = animal;

  ul2.appendChild(li2);
}
div2.appendChild(ul2);

document.body.children[1].insertBefore(div2, myClass[0]);

//-----------------------------------------------

const magicBox = document.getElementsByClassName("magic-box")[0];

magicBox.addEventListener("mouseover", () => {
  magicBox.classList.remove("magic-box-red");
  magicBox.classList.add("magic-box-green");
});
magicBox.addEventListener("mouseout", () => {
  magicBox.classList.remove("magic-box-green");
  magicBox.classList.add("magic-box-red");
});
