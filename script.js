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

document.querySelectorAll('.clickable-image').forEach(img => {
  img.addEventListener('click', () => {
      // Tambah efek kursor terbalik
      img.classList.add('reverse-cursor');

      // Hapus popup sebelumnya (jika ada)
      const existingPopup = img.parentElement.querySelector('.location-popup');
      if (existingPopup) existingPopup.remove();

      // Buat elemen popup lokasi
      const popup = document.createElement('div');
      popup.className = 'location-popup';
      popup.innerText = img.getAttribute('data-location');
      img.parentElement.appendChild(popup);

      // Hapus popup dan efek cursor setelah 2 detik
      setTimeout(() => {
          popup.remove();
          img.classList.remove('reverse-cursor');
      }, 2000);
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