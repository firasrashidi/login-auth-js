var usernameField = document.getElementById("username");
var passwordField = document.getElementById("password");
var usernameFeedback = document.getElementById("username-feedback");
var passwordFeedback = document.getElementById("password-feedback");

function validateEmail(email) {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

function validatePassword(str) {
  // Minimum 8 characters
  // Atleast 1: uppercase, lowercase, number and special char.
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(str);
}

function validationHandler(kind) {
  let val = kind == "username" ? usernameField.value : passwordField.value;
  if (kind == "username") {
    if (validateEmail(val)) {
      usernameField.style.borderColor = "green";
      usernameFeedback.innerText = "";
    } else {
      usernameField.style.borderColor = "red";
      usernameFeedback.innerText = "Invalid Email";
      usernameFeedback.style.color = "red";
    }
  }
  if (kind == "password") {
    if (validatePassword(val)) {
      passwordField.style.borderColor = "green";
      passwordFeedback.innerText = "";
    } else {
      passwordField.style.borderColor = "red";
      passwordFeedback.innerText =
        "Password: Must have atleast 8 characters and have 1 Uppercase, 1 Lowercase, 1 special character and 1 number ";
      passwordFeedback.style.color = "red";
    }
  }
}

usernameField.addEventListener("focusout", () => {
  validationHandler("username");
});

passwordField.addEventListener("focusout", () => {
  validationHandler("password");
});
