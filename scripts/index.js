function playVid(card) {
  const video = card.querySelector('.vid1');
  video.setAttribute('autoplay', 'true');
  video.play();
}

function pauseVid(card) {
  const video = card.querySelector('.vid1');
  video.setAttribute('autoplay', false);
  video.pause();
}


const hamburger = document.querySelector('.fa-bars');
const navMenu = document.getElementById('nav')
const header = document.getElementById('myheader')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
  header.classList.toggle('active')
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active')
  navMenu.classList.remove('active')
  header.classList.remove('active')
}))

const screen = window.innerWidth

window.addEventListener('resize', () => {
  if (screen > '924px') {
    console.log('hi')
  }
})

const gameplay = document.querySelector('.select2')
const gameplayText = document.querySelector('.gameplay')
const general = document.querySelector('.select1')
const generalText = document.querySelector('.general')
const synophsis = document.querySelector('.select3')
const synophsisText = document.querySelector('.synophsis')
const trailer = document.querySelector('.select4')
const trailerVideo = document.querySelector('.trailer')

gameplay.addEventListener('click', () => {
  gameplayText.classList.toggle('active')
  gameplayText.classList.remove('notActive')
  generalText.classList.add('notActive')
  gameplay.classList.toggle('active')
  general.classList.remove('active')
  synophsis.classList.remove('active')
  synophsisText.classList.add('notActive')
  synophsisText.classList.remove('active')
  trailer.classList.remove('active')
  trailerVideo.classList.add('notActive')
  trailerVideo.classList.remove('active')
})

general.addEventListener('click', () => {
  generalText.classList.remove('notActive')
  generalText.classList.toggle('active')
  gameplayText.classList.add('notActive')
  gameplay.classList.remove('active')
  general.classList.toggle('active')
  synophsis.classList.remove('active')
  synophsisText.classList.add('notActive')
  synophsisText.classList.remove('active')
  trailer.classList.remove('active')
  trailerVideo.classList.add('notActive')
  trailerVideo.classList.remove('active')
})

synophsis.addEventListener('click', () => {
  generalText.classList.add('notActive')
  general.classList.remove('active')
  gameplayText.classList.add('notActive')
  gameplay.classList.remove('active')
  synophsis.classList.add('active')
  synophsisText.classList.remove('notActive')
  synophsisText.classList.add('active')
  trailer.classList.remove('active')
  trailerVideo.classList.add('notActive')
  trailerVideo.classList.remove('active')
})

trailer.addEventListener('click', () => {
  generalText.classList.add('notActive')
  general.classList.remove('active')
  gameplayText.classList.add('notActive')
  gameplay.classList.remove('active')
  synophsis.classList.remove('active')
  synophsisText.classList.add('notActive')
  synophsisText.classList.remove('active')
  trailer.classList.add('active')
  trailerVideo.classList.remove('notActive')
  trailerVideo.classList.add('active')
})