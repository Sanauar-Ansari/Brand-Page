var emailField = document.getElementById("email_field");
var errorMsg = document.getElementById("email_error");

function validateEmail() {
  if (
    !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    errorMsg.innerHTML = "Please enter a valid email";
    return false;
  }
  errorMsg.innerHTML = "";
  return true;
}
