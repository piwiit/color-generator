const body = document.querySelector('body');
const p = document.querySelector('p');

const randColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const generator = (color) => {
  body.style.background = color;
  p.textContent = color;
};

const loop = () => {
  setTimeout(() => {
    generator(randColor());
    loop();
  }, 3000);
};

body.addEventListener('click', () => generator(randColor()));

loop();
