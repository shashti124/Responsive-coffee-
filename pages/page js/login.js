function validateLogin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email == "") {
    alert("Please enter your email");
    return false;
  }

  if (password == "") {
    alert("Please enter your password");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  alert("Login Successful!");
  window.location.href = "index.html";

  return false;
}
