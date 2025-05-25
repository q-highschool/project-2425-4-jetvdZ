document.addEventListener("DOMContentLoaded", () => {
    // --- Donatie knop ---
    const donateBtn = document.getElementById("donateBtn");
    if (donateBtn) {
      donateBtn.addEventListener("click", () => {
        window.location.href = "https://kindsponsoring.org/sponsor/ddembe";
      });
    }
  
    // --- Lightbox voor klikbare afbeeldingen ---
    const images = document.querySelectorAll(".clickable-image");
    const lightbox = document.getElementById("lightbox");
    if (images.length > 0 && lightbox) {
      const lightboxImg = lightbox.querySelector("img");
  
      images.forEach((img) => {
        img.addEventListener("click", () => {
          lightboxImg.src = img.src;
          lightbox.style.display = "flex";
        });
      });
  
      lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
      });
    }
  
    // --- Nieuwsbrief inschrijfformulier ---
    const subscribeForm = document.getElementById("subscribe-form");
    if (subscribeForm) {
      const emailInput = document.getElementById("email");
      const message = document.getElementById("form-message");
  
      subscribeForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const email = emailInput.value.trim();
        if (email === "") {
          message.textContent = "Vul alsjeblieft je e-mailadres in.";
          message.style.color = "red";
          return;
        }
  
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          message.textContent = "Voer een geldig e-mailadres in.";
          message.style.color = "red";
          return;
        }
  
        message.style.color = "green";
        message.textContent = `Bedankt voor je inschrijving, ${email}!`;
        subscribeForm.reset();
      });
    }
  
    // --- Contactformulier validatie ---
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");
  
      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const messageError = document.getElementById("messageError");
      const successMessage = document.getElementById("successMessage");
  
      function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      }
  
      contactForm.addEventListener("submit", (e) => {
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
          contactForm.reset();
        }
      });
    }
  });
  