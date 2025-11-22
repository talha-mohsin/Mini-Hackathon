let fullName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let signupBtn = document.getElementById("signup");

signupBtn.addEventListener("click", function () {
  if (!fullName.value || !email.value || !password.value) {
    return alert("Please fill all the fields!");
  }

  if (password.value.length < 8) {
    return alert("Password must be at least 8 characters!");
  }

  // Get old users or empty array
  let usersDetails = JSON.parse(localStorage.getItem("signupUsers")) || [];

  // Check if email already exists
  let exists = usersDetails.find((user) => user.email === email.value);
  if (exists) {
    return alert("Email already registered!");
  }

  // New user object
  let newUser = {
    fullName: fullName.value,
    email: email.value,
    password: password.value,
  };

  usersDetails.push(newUser);
  localStorage.setItem("signupUsers", JSON.stringify(usersDetails));

  alert("Signup successful!");
  window.location = "login.html";
});
