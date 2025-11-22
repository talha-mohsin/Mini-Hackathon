// LOGIN FUNCTIONALITES
login.addEventListener("click", function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let signupData = JSON.parse(localStorage.getItem("signupUser"))
  console.log(signupData)

  if (!email || !password) {
    return alert("Please fill all the fields!");
  }

  if (password.length < 8) {
    return alert("Password should be atleast 8 digits long!");
  }

  let loggedinDetails = {
    email: email,
    password: password,
  };

  localStorage.setItem("signupUser", JSON.stringify(loggedinDetails));

  alert("Loggedin successful!");
  window.location = "login.html";
});
