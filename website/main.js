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

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
  
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
  
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
  
    function validateEmail(email) {

      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      nameError.textContent = "";
      emailError.textContent = "";
      messageError.textContent = "";
      successMessage.style.display = "none";
  
      let isValid = true;
  
      if (nameInput.value.trim() === "") {
        nameError.textContent = "Vul je naam in.";
        isValid = false;
      }
  
      if (emailInput.value.trim() === "") {
        emailError.textContent = "Vul je e-mailadres in.";
        isValid = false;
      } else if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = "Vul een geldig e-mailadres in.";
        isValid = false;
      }
  
      if (messageInput.value.trim() === "") {
        messageError.textContent = "Vul een bericht in.";
        isValid = false;
      }
  
      if (isValid) {
        successMessage.style.display = "block";
        form.reset();
      }
    });
  });
  
  
  
  
  
  


