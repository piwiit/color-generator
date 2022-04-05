const body = document.querySelector('body');

const randColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const hexToRgb = (hex) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const generator = (color) => {
  body.style.background = color;
  hex.textContent = color;
  rgb.textContent = `rgb( ${hexToRgb(color).r}, ${hexToRgb(color).g}, ${hexToRgb(color).b})`;
};

const loop = () => {
  setTimeout(() => {
    generator(randColor());
    loop();
  }, 3000);
};

body.addEventListener('click', () => generator(randColor()));

loop();
