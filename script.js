function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "admin" && password === "password") {
      window.location.href = "account.html"; // Redirect to the main page if login is successful
    } else {
      document.getElementById("error-message").innerText = "Invalid username or password. Please try again.";
    }
  }
  