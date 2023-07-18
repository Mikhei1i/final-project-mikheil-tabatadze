function triggerAnimation() {
    var box = document.getElementById("year1");
    var text = document.getElementById("text1");
    box.style.animation = 'slideIn 1s linear 1'
    text.style.animation = 'slideIn2 1s linear 1'
    text.style.animationDelay = '0.2s'
    text.style.opacity = '1'
  }

  function handleScroll() {
    var box = document.getElementById("s3");
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
