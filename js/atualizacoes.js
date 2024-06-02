const imgs = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const cards = document.querySelectorAll('.card-img');
// console.log(cards);

let i = 0;
cards.forEach((e) => {
  let imgPath = e.src;
  //   console.log(imgPath);
  imgPath = imgPath.split('/');
  imgPath[4] = `img-${imgs[i]}.jpg`;
  //   console.log(imgPath[4]);
  imgPath = imgPath.join('/');
  i++;
  //   console.log(i);
  //   console.log(imgPath);
  e.src = imgPath;

  //   console.log(e.src);
});

// imgs.forEach(() => {});
