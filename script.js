
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closeIcon = document.getElementById('close');

bar.addEventListener('click', () => {
  nav.classList.add('active');
})

closeIcon.addEventListener('click', () => {
  nav.classList.remove('active');
})
// document.getElementById('bar').addEventListener