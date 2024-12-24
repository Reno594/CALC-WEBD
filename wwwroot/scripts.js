document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  
  if (!name) {
    showError("Por favor, ingrese su nombre.");
    return;
  }
  
  if (!email || !validateEmail(email)) {
    showError("Por favor, ingrese un correo electrónico válido.");
    return;
  }
  
  showSuccess("Formulario enviado con éxito!");
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showSuccess(message) {
  const successMessage = document.getElementById("successMessage");
  successMessage.textContent = message;
  successMessage.style.display = "block";
}

function showError(message) {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}


