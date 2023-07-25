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
}))

const language = document.getElementById('language')
const currentUrl = document.URL

language.addEventListener('click', () => {
  if (currentUrl !== "https://mikhei1i-github-io.translate.goog/final-project-mikheil-tabatadze/?_x_tr_sl=ka&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp") {
    window.open('https://mikhei1i-github-io.translate.goog/final-project-mikheil-tabatadze/?_x_tr_sl=ka&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp', '_self')
  } 
})