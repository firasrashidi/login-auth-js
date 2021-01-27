var usernameField = document.getElementById("username");
var passwordField = document.getElementById("password");

usernameField.addEventListener("focusin", () => {
  usernameField.style.borderColor = "#add8e6";
});

usernameField.addEventListener("focusout", () => {
  usernameField.style.borderColor = "black";
});

passwordField.addEventListener("focusin", () => {
  passwordField.style.borderColor = "#add8e6";
});

passwordField.addEventListener("focusout", () => {
  passwordField.style.borderColor = "black";
});
