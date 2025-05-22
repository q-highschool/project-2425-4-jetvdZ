document.getElementById("donateBtn").addEventListener("click", function() {
    // Stuur gebruiker naar een donatiepagina, bijvoorbeeld een Tikkie, PayPal of iDeal-link
    window.location.href = "https://kindsponsoring.org/sponsor/ddembe";
});
const images = document.querySelectorAll('.clickable-image');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});