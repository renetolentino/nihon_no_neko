const navbar = document.querySelector('.navbar-links');
const toggleButton = document.querySelector('#toggle-button');

toggleButton.addEventListener('click', (e) => {
  console.log(e);
  //   console.log(navbar.className);
  //   console.log(navbar.className);
  const classes = navbar.classList;
  //   console.log(classes);
  classes.toggle('active');
  console.log(classes);
});
