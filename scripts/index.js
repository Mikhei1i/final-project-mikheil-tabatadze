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
