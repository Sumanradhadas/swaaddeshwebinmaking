function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const hamburger = document.querySelector(".hamburger");

    menu.classList.toggle("active");

    // Toggle hamburger icon
    if (menu.classList.contains("active")) {
        hamburger.innerHTML = "✖"; // Show close icon when menu opens
    } else {
        hamburger.innerHTML = "☰"; // Show hamburger icon when menu closes
    }
}

// Preloader
const preloader = document.getElementById("preloader");
setTimeout(() => {
    if (preloader) preloader.classList.add("hide-preloader");
}, 1500);
// Sticky Navbar on Scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    }
});
 // Features Slider
 const slider = document.querySelector(".features-slider");
 if (slider) {
     let scrollAmount = 0;
     let slideWidth = 320; // Width of one card + gap
     let maxScroll = slider.scrollWidth - slider.clientWidth;

     function slideNext() {
         scrollAmount = (scrollAmount < maxScroll) ? scrollAmount + slideWidth : 0;
         slider.style.transform = `translateX(-${scrollAmount}px)`;
     }

     setInterval(slideNext, 3000); // Auto-slide every 3 seconds
 }
