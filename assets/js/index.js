const burgerToggle = document.querySelector('.hamburger');
const burgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('body > header');

burgerToggle.addEventListener('click', e =>{
  if(burgerToggle.classList.contains('is-active')){
    burgerToggle.classList.remove('is-active');
    burgerMenu.classList.remove('visible');
  } else {
    burgerToggle.classList.add('is-active');
    burgerMenu.classList.add('visible');
  }
})

window.addEventListener('scroll', e => {
  if(window.pageYOffset >= 10 && !burgerToggle.classList.contains('is-active')){ 
    header.classList.add('shadow')
  } else {
    header.classList.remove('shadow')
  }
});