const header1 = document.getElementById("header1");
console.log(header1.innerHTML);
header1.innerHTML = "<h1>My new header</h1>";

const paragraph = document.getElementById("paragraph");
console.log(paragraph.innerText);
paragraph.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sit nobis nisi vitae omnis laudantium voluptatibus nam quae quisquam optio voluptatem, saepe aspernatur amet dolores veritatis, a adipisci enim eveniet.";

const footer1 = document.getElementById("footer1");
footer1.innerHTML =
  '<div><a href="https://www.google.com" target="_blank">Google</a></div>' +
  '<div><a href="https://www.w3schools.com" target="_blank">W3Schools</a></div>' +
  '<div><a href="https://www.youtube.com" target="_blank">Youtube</a></div>';
