console.log("Script Running!");

const btn = document.querySelector("#btn");
const title = document.querySelector("h1");

btn.addEventListener('click', (e) => {
  title.innerHTML = "Congradulations, You Won $1000 !!!";
  title.style.color = "blue";
})

btn.addEventListener('mouseover', (e) => {
  btn.style.background = "black";
  btn.style.left = Math.floor(Math.random() * 80) + "%";
  btn.style.top = Math.floor(Math.random() * 80) + "%";
})

btn.addEventListener('mouseleave', (e) => {
  btn.style.background = "green";
})
