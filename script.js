let clr1 = document.querySelector(".color1");
let clr2 = document.querySelector(".color2");
let css = document.querySelector("h3");

clr1.addEventListener("input", gradientColor);

clr2.addEventListener("input", gradientColor);

function gradientColor() {
  document.body.style.background = `linear-gradient(to right, ${clr1.value}, ${clr2.value})`;

  css.textContent = document.body.style.background + ";";
}

console.log(css.textContent);
