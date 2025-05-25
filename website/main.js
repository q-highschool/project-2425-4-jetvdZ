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

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscribe-form');
    const emailInput = document.getElementById('email');
    const message = document.getElementById('form-message');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const email = emailInput.value.trim();
  
      if (email === '') {
        message.textContent = 'Vul alsjeblieft je e-mailadres in.';
        message.style.color = 'red';
        return;
      }
  
      // Eenvoudige e-mailvalidatie
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        message.textContent = 'Voer een geldig e-mailadres in.';
        message.style.color = 'red';
        return;
      }
  
      message.style.color = 'green';
      message.textContent = `Bedankt voor je inschrijving, ${email}!`;
  
      form.reset();
    });
  });


