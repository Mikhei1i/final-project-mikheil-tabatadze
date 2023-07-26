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

