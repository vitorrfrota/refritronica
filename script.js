const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closemenu = document.getElementById("closeMenu");
const menuLinks = document.querySelectorAll(".mobile-menu a");

menuBtn.addEventListener("click", () => {
  mobileMenu.style.display =
    mobileMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");
});

closemenu.addEventListener("click", ()=>{
  mobileMenu.classList.remove("active");
})

menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        
        setTimeout(function() {
            mobileMenu.classList.remove("active");
            menuBtn.classList.remove("active");
        }, 500); // 500 milissegundos = 0.5s

    });
});





const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let current = 0;
let intervalTime = 5000;
let slideInterval = setInterval(nextSlide, intervalTime);

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[index].classList.add('active');
  dots[index].classList.add('active');

  current = index;
}

function nextSlide() {
  current++;
  if (current >= slides.length) {
    current = 0;
  }
  showSlide(current);
}

function prevSlide() {
  current--;
  if (current < 0) {
    current = slides.length - 1;
  }
  showSlide(current);
}

/* Clique nos DOTS */
dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    const index = e.target.getAttribute('data-index');
    showSlide(index);
    resetInterval();
  });
});

/* Clique na imagem (metade esquerda/direita) */
slides.forEach(slide => {
  slide.addEventListener('click', (e) => {
    const width = slide.clientWidth;
    const clickX = e.offsetX;

    if (clickX < width / 2) {
      prevSlide();
    } else {
      nextSlide();
    }

    resetInterval();
  });
});

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
}
