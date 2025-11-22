// SIGNUP FUNCTIONALITES
let signup = document.getElementById("signup");
let login = document.getElementById("login");

signup.addEventListener("click", function signup() {
  let fullName = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!fullName || !email || !password) {
    return alert("Please fill all the fields!");
  }

  if (password.length < 8) {
    return alert("Password should be atleast 8 digits long!");
  }

  let signupDetails = {
    fullName: fullName,
    email: email,
    password: password,
  };

  localStorage.setItem("signupUser", JSON.stringify(signupDetails));

  alert("Signup successful!");
  window.location = "login.html";
});