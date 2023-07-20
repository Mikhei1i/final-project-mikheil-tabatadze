// winner 1
function winner() {
  function triggerAnimation() {
    var box = document.getElementById("winner");
    box.style.opacity = '1'
  }

  function handleScroll() {
    var box = document.getElementById("winner");
    var boxOffsetTop = box.offsetTop;
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY;
    var triggerOffset = 100;

    if (scrollY > boxOffsetTop - windowHeight + triggerOffset) {
      triggerAnimation();
      window.removeEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("scroll", handleScroll);
}

winner()


// winner 2
function winner2 () {
  function triggerAnimation() {
    var box = document.getElementById("winner2");
    box.style.opacity = '1'
  }
  
  function handleScroll() {
    var box = document.getElementById("winner2");
    var boxOffsetTop = box.offsetTop;
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY;
    var triggerOffset = 100;
  
    if (scrollY > boxOffsetTop - windowHeight + triggerOffset) {
      triggerAnimation();
      window.removeEventListener("scroll", handleScroll);
    }
  }
  
  window.addEventListener("scroll", handleScroll);
}

winner2()

// winner 3

function winner3 () {
  function triggerAnimation() {
    var box = document.getElementById("winner3");
    box.style.opacity = '1'
  }
  
  function handleScroll() {
    var box = document.getElementById("winner3");
    var boxOffsetTop = box.offsetTop;
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY;
    var triggerOffset = 100;
  
    if (scrollY > boxOffsetTop - windowHeight + triggerOffset) {
      triggerAnimation();
      window.removeEventListener("scroll", handleScroll);
    }
  }
  
  window.addEventListener("scroll", handleScroll);
}

winner3()

// winner 4

function winner4 () {
  function triggerAnimation() {
    var box = document.getElementById("winner4");
    box.style.opacity = '1'
  }
  
  function handleScroll() {
    var box = document.getElementById("winner4");
    var boxOffsetTop = box.offsetTop;
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY;
    var triggerOffset = 100;
  
    if (scrollY > boxOffsetTop - windowHeight + triggerOffset) {
      triggerAnimation();
      window.removeEventListener("scroll", handleScroll);
    }
  }
  
  window.addEventListener("scroll", handleScroll);
}

winner4()

// winner 5

function winner5 () {
  function triggerAnimation() {
    var box = document.getElementById("winner5");
    box.style.opacity = '1'
  }
  
  function handleScroll() {
    var box = document.getElementById("winner5");
    var boxOffsetTop = box.offsetTop;
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY;
    var triggerOffset = 100;
  
    if (scrollY > boxOffsetTop - windowHeight + triggerOffset) {
      triggerAnimation();
      window.removeEventListener("scroll", handleScroll);
    }
  }
  
  window.addEventListener("scroll", handleScroll);
}

winner5()

// winner 6 

function winner6 () {
  function triggerAnimation() {
    var box = document.getElementById("winner6");
    box.style.opacity = '1'
  }
  
  function handleScroll() {
    var box = document.getElementById("winner6");
    var boxOffsetTop = box.offsetTop;
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY;
    var triggerOffset = 100;
  
    if (scrollY > boxOffsetTop - windowHeight + triggerOffset) {
      triggerAnimation();
      window.removeEventListener("scroll", handleScroll);
    }
  }
  
  window.addEventListener("scroll", handleScroll);
}

winner6()

// winner 7

function winner7 () {
  function triggerAnimation() {
    var box = document.getElementById("winner7");
    box.style.opacity = '1'
  }
  
  function handleScroll() {
    var box = document.getElementById("winner7");
    var boxOffsetTop = box.offsetTop;
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY;
    var triggerOffset = 100;
  
    if (scrollY > boxOffsetTop - windowHeight + triggerOffset) {
      triggerAnimation();
      window.removeEventListener("scroll", handleScroll);
    }
  }
  
  window.addEventListener("scroll", handleScroll);
}

winner7()

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

const container = document.querySelector('.years-container');

container.addEventListener('wheel', (event) => {
  event.preventDefault();
  container.scrollLeft += event.deltaY;
});
