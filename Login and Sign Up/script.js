document.querySelector(".redirect-signup").addEventListener("click", () => {
  window.location.href = "index.html";
});

let body = document.querySelector(".content");
let login_heading = document.querySelector(".login-headings h1");
let input_field_label = document.querySelectorAll(".input-container label");
// let input_field_input = document.querySelectorAll(".input-container input");

let isLightTheme = true; // Flag to track current theme state

document.querySelector(".switch-theme").addEventListener("click", () => {
    console.log("click")
  if (isLightTheme) {
    // Switch to dark theme
    // input_field_input.style.color="#000"
    document.querySelector(".switch").src = "assets/moon-icon.svg";
    body.style.background = "#fff";
    login_heading.style.color = "#000";
    input_field_label.forEach((label) => {
      label.style.color = "#000";
    });
  } else {
    // Switch to light theme (default)
    document.querySelector(".switch").src = "assets/sun-icon.svg";
    document.querySelector(".switch").style.color = "#000";
    // input_field_input.style.color="#000"
    body.style.background = "#000";
    login_heading.style.color = "#fff";
    input_field_label.forEach((label) => {
      label.style.color = "#fff";
    });
  }
  
  // Toggle theme state
  isLightTheme ? isLightTheme = false : isLightTheme = true;});


const validation = () => {
  const input_container = document.querySelectorAll(".input-container");
  const email = document.querySelector("#email-field");
  const password = document.querySelector("#password-field");
  const login_btn = document.querySelector(".input-field-btn");

  let email_error = createErrorMessage(input_container[0]);
  let password_error = createErrorMessage(input_container[1]);

  login_btn.addEventListener("click", (event) => {
    event.preventDefault();

    validateEmail(email, email_error);
    validatePassword(password, password_error);
    if (
      email_error.textContent === "" &&
      password_error.textContent === ""
    ) {
      // Store email and password in localStorage
      localStorage.setItem('email', email.value);
      localStorage.setItem('password', password.value);
      // Redirect to login.html
      window.location.href = 'www.google.com';
    }
    
  });
};

const createErrorMessage = (container) => {
  const error = document.createElement("p");
  error.classList.add("error-message");
  container.appendChild(error);
  return error;
};

const validateEmail = (emailInput, errorElement) => {
  const email = emailInput.value.trim();
  if (email === "") {
    errorElement.textContent = "Please enter your email id";
  } else if (!email.endsWith("@gmail.com")) {
    errorElement.textContent = "Please enter a valid email address";
  } else {
    errorElement.textContent = "";
    emailInput.style.boxShadow = "0 0 0 0 #fff inset, springgreen 0 0 0 2px";
  }
};

const validatePassword = (passwordInput, errorElement) => {
  const password = passwordInput.value.trim();
  if (password === "") {
    errorElement.textContent = "Please enter your password";
  } else if (password.length < 8) {
    errorElement.textContent = "Password must be at least 8 characters long";
  } else if (!/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
    errorElement.textContent =
      "Password must contain at least one numeric character and one special character";
  } else {
    errorElement.textContent = "";
    passwordInput.style.boxShadow = "0 0 0 0 #fff inset, springgreen 0 0 0 2px";
  }
};

validation();
