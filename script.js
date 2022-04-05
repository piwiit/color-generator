const body = document.querySelector('body');

const randColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const addBackground = (color) => {
  body.style.background = color;
};

const loop = () => {
  setTimeout(() => {
    addBackground(randColor());
    loop();
  }, 3000);
};

loop();
