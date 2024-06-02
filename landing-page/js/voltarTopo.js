const botao = document.getElementById('go-to-home');

const voltarTopo = () => {
  let path = window.location.href.split('#');
  if (path[1] === 'home') botao.classList.add('esconder');
  path[1] = 'home';
  const newPath = path.join('#');
  window.location.href = newPath;

  console.log(path);
};

document.addEventListener('scroll', () => {
  botao.classList.remove('esconder');
});
