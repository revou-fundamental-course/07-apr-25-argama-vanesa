document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault(); // supaya form tidak reload halaman
  
    const nameInput = document.getElementById("name").value;
    const welcomeText = document.getElementById("welcome-text");
  
    if (nameInput.trim() !== "") {
      welcomeText.textContent = `Hi ${nameInput}, Welcome to Our Website!`;
    }
  });

  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form submit

    // Ambil data input
    const nameInput = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phonenumber").value;
    
    // Validasi: Pastikan email dan phone diisi
    if (!email || !phone) {
        alert("Email and phone number must be filled!");
        return;
    }

    // Jika nameInput ada, update teks penyambutan
    if (nameInput.trim() !== "") {
        const welcomeText = document.getElementById("welcome-text");
        welcomeText.textContent = `Hi ${nameInput}, Welcome to Our Website!`;
    }

    // Tampilkan pesan terima kasih setelah submit
    const formSection = document.getElementById("Message Us");
    formSection.innerHTML = "<h2>Thank you for your message! We will contact you soon.</h2>";
    
    // Kosongkan form setelah submit
    document.querySelector("form").reset();

    // Opsional: tampilkan alert untuk konfirmasi
    alert("Your form has been submitted!");
});

