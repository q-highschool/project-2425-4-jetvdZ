let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function startSlideshow() {
    showSlide(currentIndex);
    currentIndex = (currentIndex + 1) % slides.length;
    setTimeout(startSlideshow, 3000); // Verander slides elke 3 seconden
}

if (slides.length > 0) {
    startSlideshow();
}
