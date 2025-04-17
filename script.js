document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 
  
    const nameInput = document.getElementById("name").value;
    const welcomeText = document.getElementById("welcome-text");
  
    if (nameInput.trim() !== "") {
      welcomeText.textContent = `Hi ${nameInput}, Welcome to Our Website!`;
    }
  });

  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();


    const nameInput = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phonenumber").value;
    

    if (!email || !phone) {
        alert("Email and phone number must be filled!");
        return;
    }

 
    if (nameInput.trim() !== "") {
        const welcomeText = document.getElementById("welcome-text");
        welcomeText.textContent = `Hi ${nameInput}, Welcome to Our Website!`;
    }

    const formSection = document.getElementById("Message Us");
    formSection.innerHTML = "<h2>Thank you for your message! We will contact you soon.</h2>";
    

    document.querySelector("form").reset();


    alert("Your form has been submitted!");
});

