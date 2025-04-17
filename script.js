document.getElementById("nameForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name").value.trim();
  const welcomeText = document.getElementById("welcome-text");

  if (nameInput !== "") {
    if (!localStorage.getItem("hasWelcomed")) {
      alert(`Hi ${nameInput}, Welcome to Our Website!`);
      localStorage.setItem("hasWelcomed", "true");
    }

    welcomeText.textContent = `Hi ${nameInput}, Welcome to Our Website!`;
  }
});

// === Form Welcome Message (Home) ===
document.getElementById("nameForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name").value.trim();
  const welcomeText = document.getElementById("welcome-text");

  if (nameInput !== "") {
    if (!localStorage.getItem("hasWelcomed")) {
      alert(`Hi ${nameInput}, Welcome to Our Website!`);
      localStorage.setItem("hasWelcomed", "true");
    }

    welcomeText.textContent = `Hi ${nameInput}, Welcome to Our Website!`;
  }
});

document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
      card.classList.toggle('flipped');
  });
});

// === Form Kirim Pesan (Message Us) ===
document.getElementById("messageForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phonenumber").value;

  if (!email || !phone) {
    alert("Email and phone number must be filled!");
    return;
  }

  const welcomeText = document.getElementById("welcome-text");
  if (nameInput.trim() !== "") {
    welcomeText.textContent = `Hi ${nameInput}, Welcome to Our Website!`;
  }

  const formSection = document.getElementById("Message Us");
  formSection.innerHTML = "<h2>Thank you for your message! We will contact you soon.</h2>";

  alert("Your form has been submitted!");
});