// LOGIN FUNCTIONALITES
let emailLogin = document.getElementById("email");
let passwordLogin = document.getElementById("password");
let loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", function () {
  if (!emailLogin.value || !passwordLogin.value) {
    return alert("Please fill all the fields!");
  }

  if (passwordLogin.value.length < 8) {
    return alert("Password should be atleast 8 digits long!");
  }

  let loggedinUser = JSON.parse(localStorage.getItem("loggedinUser")) || [];
  let allUsers = JSON.parse(localStorage.getItem("signupUsers")) || [];

  // Find matching user
  let isExist = allUsers.find((userData) => {
    return userData.email.toLowerCase() === emailLogin.value.toLowerCase();
  });

  if (!isExist) return alert("No users found! Please signup first.");

  if (isExist.password === passwordLogin.value) {

    let loginUser = {
        email: email.value,
        password: password.value,
    }
    
    loggedinUser.push(loginUser);
    localStorage.setItem("loggedinUser", JSON.stringify(loggedinUser));

    alert("Congratulations, we are signing you up!");
    window.location = "profile.html";
  } else {
    alert("Incorrect Password");
  }
});
