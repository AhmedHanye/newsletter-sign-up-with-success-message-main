// Selecting DOM elements
const submitButton = document.querySelector("#submit");
const signUpSection = document.querySelector("#sign-up");
const messageSection = document.querySelector("#message");
const dismissButton = document.querySelector("#dismiss");
const emailField = document.querySelector("#email");
const emailInput = document.querySelector("#email-input");

// Function to check email validation using a regular expression
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Event listener for the submit button
submitButton.onclick = () => {
  // Check if the entered email is valid
  if (isValidEmail(emailInput.value)) {
    // If valid, update the UI
    emailField.classList.remove("Error");
    signUpSection.classList.add("hidden");
    messageSection.classList.remove("hidden");
  } else {
    // If not valid, mark the email field as an error
    emailField.classList.add("Error");
  }
};

// Event listener for the dismiss button
dismissButton.onclick = () => {
  // Reset the UI to show the sign-up section and hide the message section
  signUpSection.classList.remove("hidden");
  messageSection.classList.add("hidden");
};
