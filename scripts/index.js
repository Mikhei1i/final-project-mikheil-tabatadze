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


function openMenu() {
  
const header = document.getElementById('myheader')
const nav = document.getElementById('nav')
const ul = document.getElementById('ul')
const body = document.getElementById('body')
  if (header.style.maxHeight === '90px') {
    header.style.maxHeight = '300px'
    header.style.borderRadius = '40px'
    header.style.animation = 'open 0.3s 1 linear'
    ul.style.animation = 'fadeIn 1.2s 1 linear'
    ul.style.opacity = '1'
  } else  {
    header.style.maxHeight = '90px'
    header.style.animation = 'close 0.3s 1 linear'
  }

  if (header.style.maxHeight === '300px') {
    nav.style.display = 'block'
  }  else {
    nav.style.display = 'none'
  }
}

function menu() {
  const header = document.getElementById('myheader')
  const nav = document.getElementById('nav')
  if (header.style.width > '925px' && body.style.width > '925px') {
    nav.style.display = 'inline-block'
    header.style.height = '90px'
  } 
}

menu()