const canva = document.querySelector('#slide-img');
const path = canva.src.split('/');
let i = 0;

const direita = () => {
  ++i;
  if (i > 10) i = 1;
  const img = `img-${i}.jpg`;
  path[4] = img;
  canva.src = path.join('/');
};
const esquerda = () => {
  --i;
  if (i < 1) i = 10;
  const img = `img-${i}.jpg`;
  path[4] = img;
  canva.src = path.join('/');
};
