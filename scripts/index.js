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