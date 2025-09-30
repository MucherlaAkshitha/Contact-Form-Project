const form = document.getElementById("contactForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop default submit
  let valid = true;

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  // Validate Name
  if (nameField.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  // Validate Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailField.value.trim() === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!emailPattern.test(emailField.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  // Validate Message
  if (messageField.value.trim() === "") {
    messageError.textContent = "Message is required.";
    valid = false;
  }

  // Success
  if (valid) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
  }
});
