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