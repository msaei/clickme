console.log("Script Running!");

const btn = document.querySelector("#btn");
const title = document.querySelector("h1");

btn.addEventListener('click', (e) => {
  title.innerHTML = "Congradulations, You Won $1000 !!!";
  title.style.color = "blue";
})

btn.addEventListener('mouseover', (e) => {
  btn.style.background = "black";
})

btn.addEventListener('mouseleave', (e) => {
  btn.style.background = "green";
})
