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

    // Fade-in Animation
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => observer.observe(el));

    let slideIndex = 0; 
const slides = document.querySelectorAll(".slides"); 
const dotsContainer = document.querySelector(".dots-container"); 

// Create dot indicators dynamically 
slides.forEach((_, index) => { 
    const dot = document.createElement("span"); 
    dot.classList.add("dot"); 
    dot.setAttribute("onclick", `currentSlide(${index})`); 
    dotsContainer.appendChild(dot); 
}); 
const dots = document.querySelectorAll(".dot"); 

function showSlides(index) { 
    slides.forEach((slide, i) => { 
        slide.style.opacity = i === index ? "1" : "0"; 
    }); 
    dots.forEach((dot, i) => { 
        dot.classList.toggle("active", i === index); 
    }); 
} 

function nextSlide() { 
    slideIndex = (slideIndex + 1) % slides.length; 
    showSlides(slideIndex); 
} 

function prevSlide() { 
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; 
    showSlides(slideIndex); 
} 

function currentSlide(index) { 
    slideIndex = index; 
    showSlides(slideIndex); 
} 

// Auto slide change 
setInterval(nextSlide, 5000); 

// Initialize slides 
showSlides(slideIndex); 

    // PDF Viewer
    window.openPDF = function (pdfUrl) {
        var modal = document.getElementById("pdfModal");
        var iframe = document.getElementById("pdfIframe");

        if (modal && iframe && pdfUrl) {
            iframe.src = pdfUrl;
            modal.style.display = "flex";
        }
    };

    window.closePDF = function () {
        var modal = document.getElementById("pdfModal");
        var iframe = document.getElementById("pdfIframe");

        if (modal && iframe) {
            modal.style.display = "none";
            iframe.removeAttribute("src");
        }
    };

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
