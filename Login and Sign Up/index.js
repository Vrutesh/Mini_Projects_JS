document.querySelector(".redirect-login").addEventListener("click", () => {
  window.location.href = "login.html";
});

//toggle dark mode

let body = document.querySelector(".content");
let signup_heading = document.querySelector(".signup-headings h1");
let input_field_label = document.querySelectorAll(".input-container label");

let isLightTheme = true; // Flag to track current theme state

document.querySelector(".switch-theme").addEventListener("click", () => {
  console.log("click");
  if (isLightTheme) {
    // Switch to dark theme
    document.querySelector(".switch").src = "assets/moon-icon.svg";
    body.style.background = "#fff";
    signup_heading.style.color = "#000";
    input_field_label.forEach((label) => {
      label.style.color = "#000";
    });
  } else {
    // Switch to light theme (default)
    document.querySelector(".switch").src = "assets/sun-icon.svg";
    document.querySelector(".switch").style.color = "#000";
    body.style.background = "#000";
    signup_heading.style.color = "#fff";
    input_field_label.forEach((label) => {
      label.style.color = "#fff";
    });
  }

  // Toggle theme state
  isLightTheme ? (isLightTheme = false) : (isLightTheme = true);
});

//form validation

const validation = () => {
  let input_container = document.querySelectorAll(".input-container");
  let add_msg = document.querySelector(".add-msg");
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let password = document.querySelector(".password");
  let sign_up_btn = document.querySelector(".input-field-btn");

  let name_error = createErrorMessage(input_container[0]);
  let email_error = createErrorMessage(input_container[1]);
  let password_error = createErrorMessage(input_container[2]);

  sign_up_btn.addEventListener("click", (event) => {
    event.preventDefault();
    validateName(name, name_error);
    validateEmail(email, email_error);
    validatePassword(password, password_error);

    // If all fields are valid, save data to localStorage
    let users = [{}];

    if (
      name_error.textContent === "" &&
      email_error.textContent === "" &&
      password_error.textContent === ""
    ) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
      localStorage.setItem("password", password.value);

      let successfull_msg = document.createElement("p");
      successfull_msg.classList.add("success-msg");
      successfull_msg.textContent = "Registration successful !";
      add_msg.appendChild(successfull_msg);

      setTimeout(() => {
        add_msg.removeChild(successfull_msg);
        window.location.href = "login.html";
      }, 1000);
    }
  });
};

const createErrorMessage = (container) => {
  const error = document.createElement("p");
  error.classList.add("error-message");
  container.appendChild(error);
  return error;
};

const validateName = (nameInput, errorElement) => {
  const name = nameInput.value.trim();
  if (name === "") {
    errorElement.textContent = "Please enter your name";
  } else {
    errorElement.textContent = "";
    nameInput.style.boxShadow = "0 0 0 0 #fff inset, springgreen 0 0 0 2px";
  }
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

//   name.value =''
//   email.value =''
//   password.value =''

validation();
